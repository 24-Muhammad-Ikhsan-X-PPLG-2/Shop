import { ShoppingCart, Star } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const products = [
    {
        id: 1,
        name: 'Classic White T-Shirt',
        description: 'Premium cotton essential',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1648483098902-7af8f711498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMHByb2R1Y3R8ZW58MXx8fHwxNzY0ODI3MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 2,
        name: 'Elegant Black Dress',
        description: 'Perfect for evening events',
        price: 89.99,
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1586024795129-38d4e68bdd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ3OTE4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 3,
        name: 'Premium Denim Jeans',
        description: 'Comfortable slim fit',
        price: 79.99,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ4MDcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 4,
        name: 'Leather Jacket',
        description: 'Timeless style statement',
        price: 249.99,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwc3R5bGV8ZW58MXx8fHwxNzY0NzU0MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 5,
        name: 'White Sneakers',
        description: 'All-day comfort',
        price: 69.99,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1759542890353-35f5568c1c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMGZhc2hpb24lMjB3aGl0ZXxlbnwxfHx8fDE3NjQ4NTc5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 6,
        name: 'Winter Coat',
        description: 'Warm & stylish outerwear',
        price: 189.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1764026721657-4b41e0201988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ4MzM4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 7,
        name: 'Casual Polo Shirt',
        description: 'Smart casual essential',
        price: 45.99,
        rating: 4.4,
        image: 'https://images.unsplash.com/photo-1648483098902-7af8f711498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMHByb2R1Y3R8ZW58MXx8fHwxNzY0ODI3MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 8,
        name: 'Summer Sundress',
        description: 'Light & breathable',
        price: 59.99,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1586024795129-38d4e68bdd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ3OTE4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
];

const ProductListing = () => {
    return (
        <section className="bg-neutral-50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-xl font-medium text-neutral-900">Featured Products</h2>
                    <p className="mx-auto max-w-2xl text-neutral-600">Discover our handpicked selection of premium fashion pieces</p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-lg">
                            <div className="relative h-80 overflow-hidden">
                                <ImageWithFallback
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-4 p-6">
                                <div>
                                    <h3 className="mb-1 text-[18px] font-semibold text-neutral-900">{product.name}</h3>
                                    <p className="text-neutral-500">{product.description}</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${
                                                i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'
                                            }`}
                                        />
                                    ))}
                                    <span className="ml-2 text-neutral-600">{product.rating}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-neutral-900">${product.price}</span>
                                    <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-white transition-colors hover:bg-neutral-800">
                                        <ShoppingCart className="h-4 w-4" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductListing;
