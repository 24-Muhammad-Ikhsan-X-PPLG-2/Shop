import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FeaturedCategories from '@/components/Welcome/FeaturedCategories';
import Hero from '@/components/Welcome/Hero';
import ProductListing from '@/components/Welcome/ProductListing';
import PromoBanner from '@/components/Welcome/PromoBanner';
import Testimonials from '@/components/Welcome/Testimonials';
import { Head } from '@inertiajs/react';
import { FC } from 'react';

const Welcome: FC = () => {
    return (
        <>
            <Head title="Home"></Head>
            <div className="min-h-screen bg-white">
                <Header activePage="home" />
                <main>
                    <Hero />
                    <FeaturedCategories />
                    <ProductListing />
                    <PromoBanner />
                    <Testimonials />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Welcome;
