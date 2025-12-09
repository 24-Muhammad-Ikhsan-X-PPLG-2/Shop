import { ArrowRight } from 'lucide-react';

const AboutCTA = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 px-8 py-12 text-center lg:px-16 lg:py-16">
                    {/* Decorative Element */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    <div className="relative space-y-6">
                        <div className="space-y-3">
                            <h2 className="mx-auto max-w-3xl text-xl font-medium text-white">Explore Our Collections</h2>
                            <p className="mx-auto max-w-2xl text-lg text-white/80">
                                Discover timeless pieces crafted with care. From everyday essentials to statement looks, find your perfect style.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-neutral-900 transition-colors hover:bg-neutral-100">
                                Shop Now
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10">
                                View Lookbook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
