import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FilterBar from '@/components/Shop/FilterBar';
import Newsletter from '@/components/Shop/Newsletter';
import Pagination from '@/components/Shop/Pagination';
import ProductGrid from '@/components/Shop/ProductGrid';
import ShopHeader from '@/components/Shop/ShopHeader';
import { ProductType } from '@/types/db';
import { LaravelPaginator } from '@/types/pagination';
import { Head } from '@inertiajs/react';
import { FC } from 'react';

type ShopProps = {
    posts: LaravelPaginator<ProductType>;
};

const Shop: FC<ShopProps> = ({ posts }) => {
    return (
        <>
            <Head title="Shop"></Head>
            <div className="min-h-screen bg-white">
                <Header activePage="shop" />
                <main>
                    <ShopHeader />
                    <FilterBar />
                    <ProductGrid products={posts.data} />
                    <Pagination posts={posts} />
                    <Newsletter />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Shop;
