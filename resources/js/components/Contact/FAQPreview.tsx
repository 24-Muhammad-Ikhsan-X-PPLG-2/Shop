import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for all unworn items with original tags attached. Simply initiate a return through your account and ship items back using our prepaid label.',
    },
    {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days within the US. Express shipping (1-2 days) and international shipping options are also available at checkout.',
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes! We ship to over 50 countries worldwide. International shipping times vary by location, typically 7-14 business days. All duties and taxes are calculated at checkout.',
    },
    {
        question: 'How can I track my order?',
        answer: 'Once your order ships, you&apos;ll receive a tracking number via email. You can also track your order status anytime by logging into your account and viewing order history.',
    },
];

const FAQPreview = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <section className="bg-neutral-50 py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-3 text-center">
                    <h2 className="text-xl font-medium text-neutral-900">Frequently Asked Questions</h2>
                    <p className="text-lg text-neutral-600">Quick answers to common questions. Need more help? Contact our support team.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-neutral-50"
                            >
                                <span className="text-lg text-neutral-900">{faq.question}</span>
                                <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-neutral-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button className="text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-700">View All FAQs</button>
                </div>
            </div>
        </section>
    );
};

export default FAQPreview;
