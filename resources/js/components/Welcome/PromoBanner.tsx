const PromoBanner = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-700 px-8 py-16 lg:px-16 lg:py-24">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    <div className="relative space-y-6 text-center">
                        <div className="inline-block rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">Limited Time Offer</div>
                        <h2 className="mx-auto max-w-3xl text-white">40% OFF Winter Collection</h2>
                        <p className="mx-auto max-w-2xl text-white/80">
                            Upgrade your wardrobe with our premium winter collection. Shop now and enjoy exclusive discounts on selected items.
                        </p>
                        <button className="rounded-full bg-white px-8 py-3 text-neutral-900 transition-colors hover:bg-neutral-100">
                            Shop Winter Sale
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
