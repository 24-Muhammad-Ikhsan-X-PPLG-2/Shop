import { Award, Leaf, Recycle, Users } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const commitments = [
    {
        icon: Leaf,
        title: 'Eco-Friendly Materials',
        description: 'Organic and sustainable fabrics',
    },
    {
        icon: Recycle,
        title: 'Zero Waste',
        description: 'Circular production process',
    },
    {
        icon: Users,
        title: 'Fair Trade',
        description: 'Ethical labor practices',
    },
    {
        icon: Award,
        title: 'Certified',
        description: 'B-Corp certified business',
    },
];

const SustainableCommitment = () => {
    return (
        <section className="bg-neutral-50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div className="order-2 space-y-8 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-block rounded-full bg-green-100 px-4 py-2 text-green-800">Sustainability First</div>
                            <h2 className="text-lg text-neutral-900">Committed to Sustainable Fashion</h2>
                            <p className="text-neutral-600">
                                We believe fashion should never come at the cost of our planet. That&apos;s why we&apos;ve committed to sustainable
                                practices at every step — from sourcing eco-friendly materials to ensuring fair wages for every worker in our supply
                                chain.
                            </p>
                            <p className="text-neutral-600">
                                Our goal is simple: create beautiful, long-lasting pieces that you&apos;ll love while protecting the environment and
                                supporting communities around the world.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {commitments.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="space-y-2">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium text-neutral-900">{item.title}</div>
                                            <div className="text-neutral-500">{item.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative order-1 h-96 overflow-hidden rounded-3xl lg:order-2 lg:h-[500px]">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1749813991859-8953e5b4dd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBlY298ZW58MXx8fHwxNzY1MDI2ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Sustainable Fashion"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainableCommitment;
