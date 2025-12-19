import { ProductType } from '@/types/db';
import { ShoppingCart, Star } from 'lucide-react';
import { FC } from 'react';
import { ImageWithFallback } from '../ImageWithFallback';

type ProductGridProps = {
    products?: ProductType[];
};

const ProductGrid: FC<ProductGridProps> = ({ products = null }) => {
    if (!products) {
        return <></>;
    }
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
                                    src={product.image_url ?? ''}
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
                                                i < Math.floor(product.star) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'
                                            }`}
                                        />
                                    ))}
                                    <span className="ml-2 text-neutral-600">{product.star}</span>
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
