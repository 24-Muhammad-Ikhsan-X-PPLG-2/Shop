import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const CategoriesHighlight = () => {
    return (
        <section className="bg-neutral-50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm">
                    <div className="grid gap-0 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative h-96 overflow-hidden lg:h-auto">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1594618410208-d846ec7ef47a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHRyZW5kaW5nJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ5OTY0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Women's Trending Collection"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden" />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12 xl:p-16">
                            <div className="inline-block self-start">
                                <span className="rounded-full bg-neutral-900 px-4 py-2 text-lg text-white">Featured Collection</span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-xl text-neutral-900">Women&apos;s Collection</h2>
                                <p className="max-w-lg text-neutral-600">
                                    Discover our trending women&apos;s collection featuring the latest styles and timeless pieces. From casual
                                    elegance to statement outfits, find everything you need to elevate your wardrobe this season.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <button className="flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-white transition-colors hover:bg-neutral-800">
                                    Shop Category
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                                <button className="rounded-full border border-neutral-300 bg-white px-8 py-3 text-neutral-900 transition-colors hover:bg-neutral-50">
                                    View Lookbook
                                </button>
                            </div>

                            <div className="flex items-center gap-8 border-t border-neutral-200 pt-4">
                                <div>
                                    <div className="text-neutral-900">235+</div>
                                    <div className="text-neutral-500">Products</div>
                                </div>
                                <div>
                                    <div className="text-neutral-900">New</div>
                                    <div className="text-neutral-500">This Season</div>
                                </div>
                                <div>
                                    <div className="text-neutral-900">20% Off</div>
                                    <div className="text-neutral-500">Selected Items</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesHighlight;
