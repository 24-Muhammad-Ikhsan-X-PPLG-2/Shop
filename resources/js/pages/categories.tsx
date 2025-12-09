import CategoriesGrid from '@/components/Categories/CategoriesGrid';
import CategoriesHeader from '@/components/Categories/CategoriesHeader';
import CategoriesHighlight from '@/components/Categories/CategoriesHighlight';
import CategoriesNewslatter from '@/components/Categories/CategoriesNewslatter';
import CategoriesPromoBanner from '@/components/Categories/CategoriesPromoBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Head } from '@inertiajs/react';

const Categories = () => {
    return (
        <>
            <Head title="Categories"></Head>
            <div className="min-h-screen bg-white">
                <Header activePage="categories" />
                <main>
                    <CategoriesHeader />
                    <CategoriesGrid />
                    <CategoriesHighlight />
                    <CategoriesPromoBanner />
                    <CategoriesNewslatter />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Categories;
