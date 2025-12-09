import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

const schema = z.object({
    name: z.string(),
    email: z.string(),
    subject: z.string(),
    message: z.string(),
});

type FormType = z.infer<typeof schema>;

const ContactForm = () => {
    const { handleSubmit, register } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            message: '',
            name: '',
            subject: '',
        },
    });
    const handleSend: SubmitHandler<FormType> = (data) => {
        alert('Yay!!');
    };
    return (
        <section className="bg-neutral-50 py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-3 text-center">
                    <h2 className="text-xl font-medium text-neutral-900">Send Us a Message</h2>
                    <p className="text-lg text-neutral-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                </div>

                <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm lg:p-12">
                    <form onSubmit={handleSubmit(handleSend)} className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-lg font-medium text-neutral-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-neutral-900 focus:outline-none"
                                    placeholder="Your full name"
                                    {...register('name')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-lg font-medium text-neutral-900">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-neutral-900 focus:outline-none"
                                    placeholder="your@email.com"
                                    {...register('email')}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                            <label htmlFor="subject" className="block text-lg font-medium text-neutral-900">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                required
                                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-neutral-900 focus:outline-none"
                                placeholder="How can we help?"
                                {...register('email')}
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-lg font-medium text-neutral-900">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-neutral-900 focus:outline-none"
                                placeholder="Tell us more about your inquiry..."
                                {...register('message')}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-white transition-colors hover:bg-neutral-800"
                        >
                            Send Message
                            <Send className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
