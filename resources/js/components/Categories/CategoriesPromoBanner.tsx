import { Link } from '@inertiajs/react';

const CategoriesPromoBanner = () => {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-50 px-8 py-12 text-center lg:px-16 lg:py-16">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    <div className="relative space-y-6">
                        <div className="space-y-3">
                            <h2 className="mx-auto max-w-3xl text-lg font-medium text-neutral-900 md:text-xl">
                                Find Your Perfect Outfit for Every Occasion
                            </h2>
                            <p className="mx-auto max-w-2xl text-neutral-600">
                                From casual weekends to formal events, our curated collections have you covered. Explore timeless styles and
                                contemporary trends crafted with quality and care.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href={'/shop'}>
                                <button className="cursor-pointer rounded-full bg-neutral-900 px-8 py-3 text-white transition-colors hover:bg-neutral-800">
                                    Explore All Categories
                                </button>
                            </Link>
                            <button className="rounded-full border border-neutral-300 bg-white px-8 py-3 text-neutral-900 transition-colors hover:bg-neutral-50">
                                Style Guide
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesPromoBanner;
