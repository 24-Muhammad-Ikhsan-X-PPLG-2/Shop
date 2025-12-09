import { Link } from '@inertiajs/react';
import { Search, ShoppingCart } from 'lucide-react';
import { FC } from 'react';
import HeaderUser from './HeaderUser';

type ActivePage = 'home' | 'shop' | 'categories' | 'about' | 'contact';

type Props = {
    activePage?: ActivePage;
};

const Header: FC<Props> = ({ activePage }) => {
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
                        <div className="hidden w-64 items-center rounded-full bg-neutral-50 px-4 py-2 lg:flex">
                            <Search className="h-4 w-4 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="ml-2 w-full border-none bg-transparent outline-none placeholder:text-neutral-400"
                            />
                        </div>

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
