<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Socialite;

class AuthController extends Controller
{
    public function signIn()
    {
        return Inertia::render('Auth/login');
    }
    public function signUp()
    {
        return Inertia::render('Auth/register');
    }
    public function signUpProcess(Request $req)
    {
        $data = $req->validate([
            'fullName' => 'required|unique:users,name',
            'email' => 'required|email|min:3|unique:users,email',
            'password' => 'required|regex:^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$^',
        ], [
            'fullName.required' => 'Full name is required.',
            'fullName.unique' => 'This full name is already taken.',
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.min' => 'Email must be at least 3 characters.',
            'email.unique' => 'This email is already registered.',
            'password.required' => 'Password is required.',
            'password.regex' => 'Password must contain uppercase, lowercase, number, special character, and be at least 8 characters long.',
        ]);



        User::create([
            'name' => $data['fullName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        return redirect()->route('signin')->with('success', "Success, please signin!");
    }
    public function signInProcess(Request $req)
    {
        $cred = $req->validate([
            'email' => "required|email",
            'password' => 'required',
        ]);

        if (!Auth::attempt($cred, true)) {
            return back()->withErrors([
                'email' => 'Incorrect email or password',
                'password' => 'Incorrect email or password'
            ]);
        }
        $req->session()->regenerate();
        return redirect()->intended('/');
    }
    public function signout(Request $req)
    {
        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return redirect()->route('signin')->with('success', 'You have been logged out successfully.');
    }
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
            $user = User::query()->updateOrCreate([
                'email' => $googleUser->getEmail(),
            ], [
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'password' => bcrypt(Str::random(16))
            ]);
            Auth::login($user, true);
            return redirect('/shop');
        } catch (\Exception $e) {
            return redirect('/signin')->with('error', 'Failed login with google.');
        }
    }
}
