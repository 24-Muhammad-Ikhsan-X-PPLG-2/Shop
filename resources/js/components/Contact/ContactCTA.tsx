import { HelpCircle, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 px-8 py-12 text-center lg:px-16 lg:py-16">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    <div className="relative space-y-6">
                        <div className="space-y-3">
                            <h2 className="mx-auto max-w-3xl text-xl font-medium text-neutral-900">Need Further Assistance?</h2>
                            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                                Our team is ready to help. Whether you have questions about products, orders, or anything else, we&apos;re here for
                                you.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                            <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-white transition-colors hover:bg-neutral-800">
                                <MessageCircle className="h-5 w-5" />
                                Chat With Us
                            </button>
                            <button className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-3 text-neutral-900 transition-colors hover:bg-neutral-50">
                                <HelpCircle className="h-5 w-5" />
                                Visit Help Center
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
