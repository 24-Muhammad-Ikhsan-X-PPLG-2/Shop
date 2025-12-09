import { ImageWithFallback } from '../ImageWithFallback';

const BrandStory = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Image */}
                    <div className="relative h-96 overflow-hidden rounded-3xl lg:h-[600px]">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1681633528883-bc217d2e4dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc2NTAyNjg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Our Design Studio"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 lg:space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-lg text-neutral-900">Our Story</h2>
                            <div className="space-y-4 text-lg text-neutral-600">
                                <p>
                                    Founded in 2015, Elegance began with a simple vision: to create fashion that transcends trends and celebrates
                                    individual style. What started as a small boutique has grown into a beloved destination for those who appreciate
                                    quality, craftsmanship, and timeless design.
                                </p>
                                <p>
                                    Every piece in our collection is thoughtfully curated, combining classic elegance with contemporary sensibilities.
                                    We believe that great fashion should be accessible, sustainable, and made to last — not just for a season, but for
                                    years to come.
                                </p>
                                <p>
                                    Our commitment goes beyond clothing. We&apos;re dedicated to ethical practices, supporting artisans, and reducing
                                    our environmental footprint. When you choose Elegance, you&apos;re not just buying fashion — you&apos;re investing
                                    in a philosophy of conscious living and enduring style.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
                            <div>
                                <div className="text-neutral-900">10+</div>
                                <div className="text-neutral-500">Years</div>
                            </div>
                            <div>
                                <div className="text-neutral-900">50K+</div>
                                <div className="text-neutral-500">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-neutral-900">1000+</div>
                                <div className="text-neutral-500">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
