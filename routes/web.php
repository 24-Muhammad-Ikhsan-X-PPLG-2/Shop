<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/shop', [HomeController::class, 'shop'])->name('shop');
Route::get('/categories', [HomeController::class, 'categories'])->name('categories');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

// AUTH
Route::middleware('guest')->group(function () {
    Route::get('/signin', [AuthController::class, 'signIn'])->name('signin');
    Route::post('/signin', [AuthController::class, 'signInProcess'])->name('signinProcess');
    Route::get('/signup', [AuthController::class, 'signUp'])->name('signup');
    Route::post('/signup', [AuthController::class, 'signUpProcess'])->name('signupProcess');
});
Route::get('/auth/google', [AuthController::class, 'redirectToGoogle'])->name('google.login');
Route::get('/auth/google/callback', [AuthController::class, 'handleGoogleCallback'])->name('google.callback');

Route::middleware('auth')->group(function() {
    Route::post('/signout', [AuthController::class, 'signOut'])->name('signout');
});
