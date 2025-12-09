import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FilterBar from '@/components/Shop/FilterBar';
import Newsletter from '@/components/Shop/Newsletter';
import Pagination from '@/components/Shop/Pagination';
import ProductGrid from '@/components/Shop/ProductGrid';
import ShopHeader from '@/components/Shop/ShopHeader';
import { Head } from '@inertiajs/react';

const Shop = () => {
    return (
        <>
            <Head title="Shop"></Head>
            <div className="min-h-screen bg-white">
                <Header activePage="shop" />
                <main>
                    <ShopHeader />
                    <FilterBar />
                    <ProductGrid />
                    <Pagination />
                    <Newsletter />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Shop;
