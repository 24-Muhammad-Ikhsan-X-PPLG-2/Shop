import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const FilterBar = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSort, setSelectedSort] = useState('Newest');
    return (
        <>
            {/* Desktop Filter Bar */}
            <div className="sticky top-20 z-40 hidden border-y border-neutral-200 bg-white lg:block">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Category Dropdown */}
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400"
                                >
                                    <option>All</option>
                                    <option>Men</option>
                                    <option>Women</option>
                                    <option>Casual</option>
                                    <option>Formal</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                            </div>

                            {/* Price Range */}
                            <div className="relative">
                                <select className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400">
                                    <option>All Prices</option>
                                    <option>Under $50</option>
                                    <option>$50 - $100</option>
                                    <option>$100 - $200</option>
                                    <option>Over $200</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                            </div>

                            {/* Size Filter */}
                            <div className="relative">
                                <select className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400">
                                    <option>All Sizes</option>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                            </div>

                            {/* Color Filter */}
                            <div className="relative">
                                <select className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400">
                                    <option>All Colors</option>
                                    <option>Black</option>
                                    <option>White</option>
                                    <option>Gray</option>
                                    <option>Blue</option>
                                    <option>Red</option>
                                    <option>Green</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={selectedSort}
                                onChange={(e) => setSelectedSort(e.target.value)}
                                className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400"
                            >
                                <option>Newest</option>
                                <option>Popular</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Filter Button */}
            <div className="sticky top-20 z-40 border-b border-neutral-200 bg-white lg:hidden">
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">
                        <button
                            onClick={() => setMobileFiltersOpen(true)}
                            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 transition-colors hover:bg-neutral-100"
                        >
                            <SlidersHorizontal className="h-4 w-4" />
                            <span>Filters</span>
                        </button>

                        <div className="relative">
                            <select
                                value={selectedSort}
                                onChange={(e) => setSelectedSort(e.target.value)}
                                className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400"
                            >
                                <option>Newest</option>
                                <option>Popular</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            <AnimatePresence mode="wait">
                {mobileFiltersOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 lg:hidden">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />

                        {/* Drawer */}
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 80, opacity: 0 }}
                            className="absolute right-0 bottom-0 left-0 max-h-[80vh] overflow-y-auto rounded-t-3xl bg-white"
                        >
                            <div className="sticky top-0 flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">
                                <h3 className="text-neutral-900">Filters</h3>
                                <button
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="rounded-full p-2 transition-colors hover:bg-neutral-100"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="space-y-6 p-6">
                                {/* Category */}
                                <div className="space-y-3">
                                    <label className="text-neutral-900">Category</label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full appearance-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors outline-none focus:border-neutral-400"
                                    >
                                        <option>All</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                        <option>Casual</option>
                                        <option>Formal</option>
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div className="space-y-3">
                                    <label className="text-neutral-900">Price Range</label>
                                    <select className="w-full appearance-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors outline-none focus:border-neutral-400">
                                        <option>All Prices</option>
                                        <option>Under $50</option>
                                        <option>$50 - $100</option>
                                        <option>$100 - $200</option>
                                        <option>Over $200</option>
                                    </select>
                                </div>

                                {/* Size */}
                                <div className="space-y-3">
                                    <label className="text-neutral-900">Size</label>
                                    <select className="w-full appearance-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors outline-none focus:border-neutral-400">
                                        <option>All Sizes</option>
                                        <option>XS</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                </div>

                                {/* Color */}
                                <div className="space-y-3">
                                    <label className="text-neutral-900">Color</label>
                                    <select className="w-full appearance-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors outline-none focus:border-neutral-400">
                                        <option>All Colors</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Gray</option>
                                        <option>Blue</option>
                                        <option>Red</option>
                                        <option>Green</option>
                                    </select>
                                </div>

                                {/* Apply Button */}
                                <button
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="w-full rounded-full bg-neutral-900 py-3 text-white transition-colors hover:bg-neutral-800"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FilterBar;
