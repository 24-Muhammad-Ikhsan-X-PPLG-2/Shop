<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('welcome');
    }
    public function shop()
    {
        $category = request('category');
        $minPrice = request('price_min');
        $maxPrice = request('price_max');
        $size = request('size');
        $posts = Product::query()
            ->when($category, fn($q) => $q->where('category', $category))
            ->when($minPrice, fn($q) => $q->where('price', '>=', $minPrice))
            ->when($maxPrice, fn($q) => $q->where('price', '<=', $maxPrice))
            ->when($size, fn($q) => $q->where('sizes', 'like', "%$size%"))
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('shop', [
            'posts' => $posts,
        ]);
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
