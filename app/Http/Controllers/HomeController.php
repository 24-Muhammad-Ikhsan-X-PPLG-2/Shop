<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('welcome', [
            "message" => "Tapi ini react!"
        ]);
    }
    public function shop()
    {
        return Inertia::render('shop');
    }
    public function categories()
    {
        return Inertia::render('categories');
    }
    public function about()
    {
        return Inertia::render('about');
    }
    public function contact()
    {
        return Inertia::render('contact');
    }
}
