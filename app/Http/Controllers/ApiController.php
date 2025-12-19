<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getProducts()
    {
        $products = Product::latest()->get(['id', 'name', 'slug', 'image_url']);
        return response()->json([
            'success'   => true,
            'message'   => 'List Data Produk',
            'data'      => $products
        ], 200);
    }
}
