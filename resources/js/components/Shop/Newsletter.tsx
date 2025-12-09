import { Mail } from 'lucide-react';
const Newsletter = () => {
    return (
        <section className="bg-neutral-50 py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-lg font-medium text-neutral-900 md:text-xl">Join Our Newsletter</h2>
                        <p className="mx-auto max-w-2xl text-sm text-neutral-600 md:text-lg">
                            Subscribe to get special offers, exclusive updates, and the latest fashion trends delivered to your inbox.
                        </p>
                    </div>

                    <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded-full border border-neutral-200 bg-white px-6 py-3 transition-colors outline-none placeholder:text-neutral-400 focus:border-neutral-400 sm:flex-1"
                        />
                        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-white transition-colors hover:bg-neutral-800 sm:w-auto">
                            <Mail className="h-4 w-4" />
                            Subscribe
                        </button>
                    </div>

                    <p className="text-neutral-500">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
