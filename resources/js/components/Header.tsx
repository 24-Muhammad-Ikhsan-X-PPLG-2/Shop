import { Link, router, usePage } from '@inertiajs/react';
import { Search, ShoppingCart, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FC, useEffect, useState } from 'react';
import HeaderUser from './HeaderUser';
import { ImageWithFallback } from './ImageWithFallback';

type ActivePage = 'home' | 'shop' | 'categories' | 'about' | 'contact';

type Props = {
    activePage?: ActivePage;
};

type ListProducts = {
    id: number;
    name: string;
    slug: string;
    image_url: string;
};

const Header: FC<Props> = ({ activePage }) => {
    const [searchInput, setSearchInput] = useState('');
    const [focusSearch, setFocusSearch] = useState(false);
    const [products, setProducts] = useState<ListProducts[] | null>(null);
    const [listProductsSearch, setListProductsSearch] = useState<ListProducts[] | null>(null);
    const { url } = usePage();
    useEffect(() => {
        const searchParams = new URLSearchParams(url.split('?')[1]);
        const searchQuery = searchParams.get('search');
        setSearchInput(searchQuery ?? '');
    }, [url]);
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/getProducts');
            const data = await res.json();
            setProducts(data.data);
        })();
    }, []);
    useEffect(() => {
        if (!products) return;
        const list = products.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setListProductsSearch(list ?? []);
    }, [searchInput, products]);
    const handleClickSuggestSearch = (name: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set('search', name);
        const queryString = params.toString().replace(/%20/g, '+');
        router.get(
            `/shop?${queryString}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="tracking-wider text-neutral-900">ELEGANCE</span>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden items-center space-x-8 text-[17px] md:flex">
                        <Link
                            href="/"
                            className={`${activePage === 'home' ? 'text-neutral-900 hover:text-neutral-600' : 'text-neutral-600 hover:text-neutral-900'} transition-colors`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className={`${activePage === 'shop' ? 'text-neutral-900 hover:text-neutral-600' : 'text-neutral-600 hover:text-neutral-900'} transition-colors`}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/categories"
                            className={`${activePage === 'categories' ? 'text-neutral-900 hover:text-neutral-600' : 'text-neutral-600 hover:text-neutral-900'} transition-colors`}
                        >
                            Categories
                        </Link>
                        <Link
                            href="/about"
                            className={`${activePage === 'about' ? 'text-neutral-900 hover:text-neutral-600' : 'text-neutral-600 hover:text-neutral-900'} transition-colors`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`${activePage === 'contact' ? 'text-neutral-900 hover:text-neutral-600' : 'text-neutral-600 hover:text-neutral-900'} transition-colors`}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Search Bar & Icons */}
                    <div className="flex items-center gap-6">
                        {/* Search Bar */}
                        <form method="get" action={'/shop'} className="relative">
                            <div
                                className={`hidden w-64 items-center ${focusSearch ? 'rounded-t-xl' : 'rounded-full'} bg-neutral-50 px-4 py-2 transition-all duration-200 lg:flex`}
                            >
                                <Search className="h-4 w-4 text-neutral-400" />
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search products..."
                                    className="ml-2 w-full border-none bg-transparent outline-none placeholder:text-neutral-400"
                                    autoComplete="off"
                                    value={searchInput}
                                    onChange={({ target: { value } }) => setSearchInput(value)}
                                    onFocus={() => setFocusSearch(true)}
                                    onBlur={() => setFocusSearch(false)}
                                />
                                <AnimatePresence mode="wait">
                                    {searchInput !== '' && (
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: '16px' }}
                                            exit={{ opacity: 0, width: 0 }}
                                            className="size-4"
                                        >
                                            <X className="size-4 cursor-pointer text-neutral-400" onClick={() => setSearchInput('')} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <AnimatePresence mode="wait">
                                {focusSearch && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: '96px' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="absolute hidden max-h-24 w-full flex-col overflow-auto rounded-b-xl bg-neutral-50 p-2 lg:flex"
                                    >
                                        {listProductsSearch?.map((item, idx) => {
                                            return (
                                                <div className="flex items-center gap-2">
                                                    <ImageWithFallback src={item.image_url} className="w-8 rounded" />
                                                    <p
                                                        onClick={() => handleClickSuggestSearch(item.name)}
                                                        key={idx}
                                                        className="mb-1 cursor-pointer hover:underline"
                                                    >
                                                        {item.name}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                        {listProductsSearch?.length == 0 && (
                                            <div className="flex h-full w-full items-center justify-center">
                                                <p>Product Not Found</p>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>

                        {/* Icons */}
                        <div className="flex items-center gap-4">
                            <button className="relative rounded-full p-2 transition-colors hover:bg-neutral-50">
                                <ShoppingCart className="h-5 w-5 text-neutral-700" />
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white">
                                    2
                                </span>
                            </button>
                            <HeaderUser />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
