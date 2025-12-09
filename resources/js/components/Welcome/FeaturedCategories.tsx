import { ImageWithFallback } from '../ImageWithFallback';

const categories = [
    {
        id: 1,
        title: 'Men',
        image: 'https://images.unsplash.com/photo-1566070143658-523a24797109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2NDc0OTQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 2,
        title: 'Women',
        image: 'https://images.unsplash.com/photo-1638717366457-dbcaf6b1afbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBmYXNoaW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQ3ODA4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 3,
        title: 'Casual',
        image: 'https://images.unsplash.com/photo-1599681906238-c4f97c8b4454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBmYXNoaW9uJTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NjQ4NTc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 4,
        title: 'Formal',
        image: 'https://images.unsplash.com/photo-1760328249114-9010f6065b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBmYXNoaW9uJTIwc3VpdHxlbnwxfHx8fDE3NjQ4NTc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
];

const FeaturedCategories = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-xl font-medium text-neutral-900">Shop by Category</h2>
                    <p className="mx-auto max-w-2xl text-neutral-600">Explore our curated collections designed for every occasion</p>
                </div>

                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {categories.map((category) => (
                        <div key={category.id} className="group cursor-pointer">
                            <div className="relative mb-4 h-80 overflow-hidden rounded-2xl">
                                <ImageWithFallback
                                    src={category.image}
                                    alt={category.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-[18px] font-medium text-white">{category.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
