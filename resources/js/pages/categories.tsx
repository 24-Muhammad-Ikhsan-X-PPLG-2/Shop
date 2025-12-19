import CategoriesGrid from '@/components/Categories/CategoriesGrid';
import CategoriesHeader from '@/components/Categories/CategoriesHeader';
import CategoriesHighlight from '@/components/Categories/CategoriesHighlight';
import CategoriesNewslatter from '@/components/Categories/CategoriesNewslatter';
import CategoriesPromoBanner from '@/components/Categories/CategoriesPromoBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CountCategories } from '@/types/db';
import { Head } from '@inertiajs/react';
import { FC } from 'react';

type CategoriesProps = {
    countCategories: CountCategories;
};

const Categories: FC<CategoriesProps> = ({ countCategories }) => {
    return (
        <>
            <Head title="Categories"></Head>
            <div className="min-h-screen bg-white">
                <Header activePage="categories" />
                <main>
                    <CategoriesHeader />
                    <CategoriesGrid countCategories={countCategories} />
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
