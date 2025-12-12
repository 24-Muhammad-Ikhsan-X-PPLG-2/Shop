<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Seeder;

class categorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        Categories::create([
            'name_category' => 'men',
        ]);
        Categories::create([
            'name_category' => 'women',
        ]);
        Categories::create([
            'name_category' => 'casual',
        ]);
        Categories::create([
            'name_category' => 'formal',
        ]);
        Categories::create([
            'name_category' => 'accessories'
        ]);
        Categories::create([
            'name_category' => 'new_arrivals'
        ]);
        Categories::create([
            'name_category' => 'activewear'
        ]);
        Categories::create([
            'name_category' => 'footwear'
        ]);
        Categories::create([
            'name_category' => 'summer_collection'
        ]);
    }
}
