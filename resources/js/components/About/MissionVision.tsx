import { Eye, Heart, Target } from 'lucide-react';

const items = [
    {
        icon: Target,
        title: 'Our Mission',
        description:
            'To provide timeless, high-quality fashion that empowers individuals to express their unique style while maintaining ethical and sustainable practices.',
    },
    {
        icon: Eye,
        title: 'Our Vision',
        description:
            'To be a leading force in conscious fashion, inspiring a global community to embrace quality over quantity and style that lasts beyond seasons.',
    },
    {
        icon: Heart,
        title: 'Our Values',
        description:
            'Quality craftsmanship, ethical sourcing, environmental responsibility, and exceptional customer experience guide everything we do.',
    },
];

const MissionVision = () => {
    return (
        <section className="bg-neutral-50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-3 text-center lg:mb-16">
                    <h2 className="text-xl font-medium text-neutral-900">What Drives Us</h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                        Our core principles guide every decision we make, from design to delivery.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="space-y-4 rounded-3xl border border-neutral-100 bg-white p-8 transition-shadow hover:shadow-lg lg:p-10"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900">
                                    <Icon className="h-7 w-7 text-white" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-neutral-900">{item.title}</h3>
                                    <p className="text-lg text-neutral-600">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
