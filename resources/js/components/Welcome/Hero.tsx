import { ImageWithFallback } from '../ImageWithFallback';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-neutral-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-medium text-neutral-900">Discover Your Style</h1>
                            <p className="max-w-lg text-neutral-600">New arrivals and premium fashion collections</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="rounded-full bg-neutral-900 px-8 py-3 text-white transition-colors hover:bg-neutral-800">
                                Shop Now
                            </button>
                            <button className="rounded-full border border-neutral-300 bg-white px-8 py-3 text-neutral-900 transition-colors hover:bg-neutral-50">
                                View Collections
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[500px] overflow-hidden rounded-3xl lg:h-[600px]">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1622080159621-bfceab50b3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWxzJTIwdHJlbmR5fGVufDF8fHx8MTc2NDg1NzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Fashion models wearing trendy outfits"
                            className="h-full w-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
