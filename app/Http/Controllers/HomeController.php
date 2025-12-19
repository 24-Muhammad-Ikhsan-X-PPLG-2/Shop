<?php

namespace App\Http\Controllers;

use App\Models\MessageContactModel;
use App\Models\Product;
use Illuminate\Http\Request;
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
        $search = request('search');
        $color = request('color');
        $sort = request('sort');
        $posts = Product::query()
            ->when($category, fn($q) => $q->where('category', $category))
            ->when($minPrice, fn($q) => $q->where('price', '>=', $minPrice))
            ->when($maxPrice, fn($q) => $q->where('price', '<=', $maxPrice))
            ->when($size, fn($q) => $q->where('sizes', 'like', "%$size%"))
            ->when($search, fn($q) => $q->where('name', 'like', "%$search%"))
            ->when($color, fn($q) => $q->where('colors', 'like', "%$color%"))
            ->when($sort, function ($q) use ($sort) {
                if ($sort === 'popular') {
                    return $q->orderBy('star', 'desc');
                } else if ($sort === "price_low") {
                    return $q->orderBy('price', 'asc');
                } else if ($sort === 'price_high') {
                    return $q->orderBy('price', 'desc');
                } else {
                    return $q->latest();
                }
            })
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('shop', [
            'posts' => $posts,
        ]);
    }
    public function categories()
    {
        $dataFromDatabase = Product::query()->groupBy('category')->selectRaw('category, count(*) as total')->pluck('total', 'category');
        return Inertia::render('categories', [
            'countCategories' => $dataFromDatabase,
        ]);
    }
    public function about()
    {
        return Inertia::render('about');
    }
    public function contact()
    {
        return Inertia::render('contact');
    }
    public function contactSend(Request $req)
    {

        $data = $req->validate([
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
        ]);
        MessageContactModel::query()->create($data);
        return redirect()->back()->with('success', 'Success Send Message!');
    }
}
