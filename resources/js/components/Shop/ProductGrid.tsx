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
        name: 'Cozy Knit Sweater',
        description: 'Soft merino wool blend',
        price: 65.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1637820578444-ea7333b64a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3dlYXRlciUyMGNsb3RoaW5nfGVufDF8fHx8MTc2NDg2NTY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 8,
        name: 'Designer Handbag',
        description: 'Luxury leather finish',
        price: 299.99,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBwdXJzZXxlbnwxfHx8fDE3NjQ3ODA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 9,
        name: 'Aviator Sunglasses',
        description: 'UV protection included',
        price: 49.99,
        rating: 4.4,
        image: 'https://images.unsplash.com/photo-1764333327297-0ebfd9fda541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NjQ4NjU2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 10,
        name: 'Chelsea Boots',
        description: 'Premium leather construction',
        price: 159.99,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1609336348831-959d5926d686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm9vdHMlMjBzaG9lc3xlbnwxfHx8fDE3NjQ4NDYxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 11,
        name: 'Tailored Blazer',
        description: 'Modern professional fit',
        price: 139.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwc3R5bGV8ZW58MXx8fHwxNzY0NzU0MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 12,
        name: 'Silk Scarf',
        description: 'Elegant printed design',
        price: 39.99,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1637820578444-ea7333b64a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3dlYXRlciUyMGNsb3RoaW5nfGVufDF8fHx8MTc2NDg2NTY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
];

const ProductGrid = () => {
    return (
        <section className="bg-white py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-neutral-600">Showing {products.length} products</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-shadow hover:shadow-lg"
                        >
                            <div className="relative h-80 overflow-hidden bg-neutral-50">
                                <ImageWithFallback
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-4 p-5">
                                <div>
                                    <h3 className="mb-1 text-lg font-medium text-neutral-900">{product.name}</h3>
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

                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-neutral-900">${product.price}</span>
                                    <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-white transition-colors hover:bg-neutral-800">
                                        <ShoppingCart className="h-4 w-4" />
                                        <span className="hidden sm:inline">Add to Cart</span>
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

export default ProductGrid;
