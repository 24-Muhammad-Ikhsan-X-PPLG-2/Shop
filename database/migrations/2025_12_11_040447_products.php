<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('image_url')->nullable();
            $table->text('description')->nullable();
            $table->string('category');
            $table->foreign('category')->references('name_category')->on('categories')->onDelete('cascade');
            $table->integer('star')->default(0);
            $table->decimal('price', 8, 2);
            $table->text('sizes')->nullable();
            $table->text('colors')->nullable();
            $table->string('brand');
            $table->integer('stock_quantity')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
