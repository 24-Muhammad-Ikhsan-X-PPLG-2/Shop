import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const categories = [
    {
        id: 1,
        title: 'Men',
        description: 'Refined styles for the modern gentleman',
        image: 'https://images.unsplash.com/photo-1633655442136-bbc120229009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbiUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY0OTk2NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 142,
    },
    {
        id: 2,
        title: 'Women',
        description: 'Elegant pieces for every occasion',
        image: 'https://images.unsplash.com/photo-1638717366457-dbcaf6b1afbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBmYXNoaW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQ5MjkwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 235,
    },
    {
        id: 3,
        title: 'Casual',
        description: 'Everyday comfort meets style',
        image: 'https://images.unsplash.com/photo-1599681906238-c4f97c8b4454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ5OTY0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 189,
    },
    {
        id: 4,
        title: 'Formal',
        description: 'Sophisticated business attire',
        image: 'https://images.unsplash.com/photo-1764440295593-5efa70ce652e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBidXNpbmVzcyUyMGF0dGlyZXxlbnwxfHx8fDE3NjQ5OTY0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 98,
    },
    {
        id: 5,
        title: 'Accessories',
        description: 'Complete your perfect look',
        image: 'https://images.unsplash.com/photo-1658910453954-6ca847bb7470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NDkxMDM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 176,
    },
    {
        id: 6,
        title: 'New Arrivals',
        description: 'Just landed fresh pieces',
        image: 'https://images.unsplash.com/photo-1758520387756-c96a334eddc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBmYXNoaW9uJTIwYXJyaXZhbHN8ZW58MXx8fHwxNzY0OTk2NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 64,
    },
    {
        id: 7,
        title: 'Activewear',
        description: 'Performance meets fashion',
        image: 'https://images.unsplash.com/photo-1759308553457-6f7f0850d9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0c3dlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2NDk5NjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 87,
    },
    {
        id: 8,
        title: 'Footwear',
        description: 'Step out in style',
        image: 'https://images.unsplash.com/photo-1632979511708-0a5a8b4eb0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc2hvZXN8ZW58MXx8fHwxNzY0OTAzMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 124,
    },
    {
        id: 9,
        title: 'Summer Collection',
        description: 'Light & breezy essentials',
        image: 'https://images.unsplash.com/photo-1619032468883-89a84f565cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY0OTk2NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        itemCount: 156,
    },
];

const CategoriesGrid = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="relative h-72 overflow-hidden bg-neutral-50">
                                <ImageWithFallback
                                    src={category.image}
                                    alt={category.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/20" />

                                {/* Content Overlay */}
                                <div className="absolute right-0 bottom-0 left-0 p-6">
                                    <div className="flex items-end justify-between">
                                        <div className="space-y-1">
                                            <h3 className="text-base text-white md:text-lg">{category.title}</h3>
                                            <p className="text-sm text-white/80">{category.description}</p>
                                            <p className="text-sm text-white/60">{category.itemCount} items</p>
                                        </div>
                                        <div className="translate-x-2 transform rounded-full bg-white p-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                            <ArrowRight className="h-5 w-5 text-neutral-900" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesGrid;
