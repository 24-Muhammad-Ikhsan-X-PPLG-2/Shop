<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            'name' => fake()->word(),
            'image_url' => fake()->imageUrl(),
            'description' => fake()->paragraph(),
            'category' => fake()->word(),
            'star' => fake()->numberBetween(0, 5),
            'price' => fake()->randomFloat(2, 1, 1000),
            'sizes' => implode(',', fake()->randomElements(['S', 'M', 'L', 'XL', 'XXL'], fake()->numberBetween(0, 5))),
            'colors' => implode(',', fake()->randomElements(['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow'], fake()->numberBetween(0, 6))),
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
