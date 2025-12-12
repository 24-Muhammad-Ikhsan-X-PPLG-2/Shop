<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static \Database\Factories\ProductFactory factory($count = null, $state = [])
 */

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    protected $table = "products";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = true;
    protected $fillable = [
        'name',
        'slug',
        'image_url',
        'description',
        'category',
        'star',
        'price',
        'sizes',
        'colors',
        'brand',
        'stock_quantity',
    ];
    public function getAllProducts($orderBy = 'name', $direction = 'asc')
    {
        return $this->orderBy($orderBy, $direction)->get();
    }
}
