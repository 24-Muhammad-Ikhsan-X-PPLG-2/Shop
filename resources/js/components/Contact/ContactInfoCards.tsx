import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email Support',
        value: 'support@elegance.com',
        description: 'We typically respond within 24 hours',
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+62 856-1617-593',
        description: 'Mon-Fri from 9am to 6pm EST',
    },
    {
        icon: MapPin,
        title: 'Visit Our Store',
        value: 'Jl. Dara 5 blok dg 5 no 32',
        description: 'Open daily from 10am to 8pm',
    },
];

const ContactInfoCards = () => {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <div
                                key={index}
                                className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition-shadow hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900">
                                    <Icon className="h-7 w-7 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium text-neutral-900">{info.title}</h3>
                                    <p className="text-lg text-neutral-900">{info.value}</p>
                                    <p className="text-neutral-500">{info.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactInfoCards;
