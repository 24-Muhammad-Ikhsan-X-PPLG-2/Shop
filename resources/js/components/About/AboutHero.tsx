import { ImageWithFallback } from '../ImageWithFallback';

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-neutral-50">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUwMjU3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="About Us"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-white/85" />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-3xl space-y-6 text-center">
                    <div className="inline-block">
                        <span className="rounded-full bg-neutral-900 px-4 py-2 text-lg text-white">Our Story</span>
                    </div>
                    <h1 className="text-lg text-neutral-900">About Us</h1>
                    <p className="mx-auto max-w-2xl text-neutral-600 md:text-lg">Crafting timeless fashion with passion and purpose.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
