import ContactCTA from '@/components/Contact/ContactCTA';
import ContactForm from '@/components/Contact/ContactForm';
import ContactHero from '@/components/Contact/ContactHero';
import ContactInfoCards from '@/components/Contact/ContactInfoCards';
import ContactMap from '@/components/Contact/ContactMap';
import FAQPreview from '@/components/Contact/FAQPreview';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Head } from '@inertiajs/react';

const Contact = () => {
    return (
        <>
            <Head title="Contact"></Head>
            <div className="min-h-screen bg-white">
                <Header activePage="contact" />
                <main>
                    <ContactHero />
                    <ContactInfoCards />
                    <ContactForm />
                    <ContactMap />
                    <FAQPreview />
                    <ContactCTA />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
