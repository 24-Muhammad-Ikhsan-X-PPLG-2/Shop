import { zodResolver } from '@hookform/resolvers/zod';
import { router, usePage } from '@inertiajs/react';
import { Send, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
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
    const [showSuccessPanel, setShowSuccessPanel] = useState(true);
    const {
        props: { flash, errors },
    } = usePage();
    const { handleSubmit, register, reset } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            message: '',
            name: '',
            subject: '',
        },
    });
    const handleSend: SubmitHandler<FormType> = (data) => {
        router.post('/contact', data, {
            preserveScroll: true,
            preserveState: true,
        });
    };
    useEffect(() => {
        setShowSuccessPanel(true);
        if (flash.success) {
            reset();
        }
    }, [flash.success, reset]);
    return (
        <section className="bg-neutral-50 py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-3 text-center">
                    <h2 className="text-xl font-medium text-neutral-900">Send Us a Message</h2>
                    <p className="text-lg text-neutral-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                    <AnimatePresence mode="wait">
                        {flash.success && showSuccessPanel ? (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="relative mt-2 flex items-center justify-center gap-1 rounded-xl border border-green-600 bg-green-300 p-4"
                            >
                                <p className="text-center text-green-800">{flash.success}</p>
                                <X
                                    className="absolute top-1 right-1 size-5 cursor-pointer text-green-800"
                                    onClick={() => setShowSuccessPanel(false)}
                                />
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>

                <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm lg:p-12">
                    <form onSubmit={handleSubmit(handleSend)} className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className={`block text-lg font-medium ${errors.name ? 'text-red-600' : 'text-neutral-900'}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className={`w-full rounded-xl border bg-white px-4 py-3 transition-colors focus:outline-none ${errors.name ? 'border-red-500 placeholder:text-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-neutral-900'}`}
                                    placeholder="Your full name"
                                    {...register('name')}
                                />
                                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className={`block text-lg font-medium ${errors.email ? 'text-red-600' : 'text-neutral-900'}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`w-full rounded-xl border bg-white px-4 py-3 transition-colors focus:outline-none ${errors.email ? 'border-red-500 placeholder:text-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-neutral-900'}`}
                                    placeholder="your@email.com"
                                    {...register('email')}
                                />
                                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                            <label htmlFor="subject" className={`block text-lg font-medium ${errors.subject ? 'text-red-600' : 'text-neutral-900'}`}>
                                Subject
                            </label>
                            <input
                                type="text"
                                className={`w-full rounded-xl border bg-white px-4 py-3 transition-colors focus:outline-none ${errors.subject ? 'border-red-500 placeholder:text-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-neutral-900'}`}
                                placeholder="How can we help?"
                                {...register('subject')}
                            />
                            {errors.subject && <p className="text-sm text-red-600">{errors.subject}</p>}
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className={`block text-lg font-medium ${errors.message ? 'text-red-600' : 'text-neutral-900'}`}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className={`w-full resize-none rounded-xl border bg-white px-4 py-3 transition-colors focus:outline-none ${errors.message ? 'border-red-500 placeholder:text-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-neutral-900'}`}
                                placeholder="Tell us more about your inquiry..."
                                {...register('message')}
                            />
                            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
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
