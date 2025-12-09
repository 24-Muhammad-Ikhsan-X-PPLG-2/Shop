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
Route::get('/signin', [AuthController::class, 'signIn'])->name('signin');
Route::get('/signup', [AuthController::class, 'signUp'])->name('signup');
