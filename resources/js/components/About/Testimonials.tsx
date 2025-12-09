import { Star } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        review: 'Absolutely love the quality and style! The fit is perfect and the material feels premium. Will definitely be ordering more.',
        avatar: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDgzOTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 2,
        name: 'Michael Chen',
        rating: 5,
        review: 'Fast shipping and excellent customer service. The clothes exceeded my expectations. Highly recommend this shop!',
        avatar: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDgzOTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        id: 3,
        name: 'Emma Williams',
        rating: 5,
        review: 'Amazing collection! Every piece is thoughtfully curated. The quality-to-price ratio is unbeatable. My new favorite store.',
        avatar: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDgzOTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
];

const Testimonials = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-xl font-medium text-neutral-900">What Our Customers Say</h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-600">Don't just take our word for it - hear from our satisfied customers</p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="space-y-6 rounded-2xl bg-neutral-50 p-8">
                            <div className="flex items-center gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-lg text-neutral-700">"{testimonial.review}"</p>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full bg-neutral-200">
                                    <ImageWithFallback src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-neutral-900">{testimonial.name}</div>
                                    <div className="text-neutral-500">Verified Customer</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
