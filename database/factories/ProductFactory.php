<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Pest\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $names = [
            "Oversized Cotton T-Shirt",
            "Vintage Denim Jacket",
            "Minimalist Hoodie",
            "Classic Cargo Pants",
            "Athletic Running Shoes",
            "Canvas Tote Bag",
            "Premium Leather Wallet",
            "Checkered Flannel Shirt",
            "Slim Fit Chinos",
            "Urban Baseball Cap",
            "Knitted Beanie",
            "Running Windbreaker Jacket",
            "Sports Training Shorts",
            "Casual Linen Shirt",
            "Streetwear Graphic Tee"
        ];
        $brands = ["Uniqlo", "H&M", "Zara", "Adidas", "Nike", "Levi’s", "Champion", "New Balance"];
        return [
            'name' => fake()->randomElement($names),
            'slug' => fn(array $attrs) => Str::slugify($attrs['name']),
            'image_url' => "https://picsum.photos/seed/" . Str::random(10) . "/800/600",
            'description' => fake()->paragraph(),
            'category' => fake()->randomElement(['men', 'women', 'casual', 'formal', 'accessories', 'new_arrivals', 'activewear', 'footwear', 'summer_collection']),
            'star' => fake()->numberBetween(0, 5),
            'price' => fake()->randomFloat(2, 10, 150),
            'sizes' => implode(',', fake()->randomElements(['S', 'M', 'L', 'XL', 'XXL'], fake()->numberBetween(0, 5))),
            'colors' => implode(',', fake()->randomElements(['red', 'blue', 'green', 'black', 'white', 'yellow'], fake()->numberBetween(0, 6))),
            'brand' => fake()->randomElement($brands),
            'stock_quantity' => fake()->numberBetween(0, 500),
        ];
    }
    public function nosizes(): static
    {
        return $this->state(fn(array $attributes) => [
            'sizes' => '',
        ]);
    }
}
