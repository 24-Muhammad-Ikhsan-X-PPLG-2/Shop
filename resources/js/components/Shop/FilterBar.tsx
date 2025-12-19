import { router } from '@inertiajs/react';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
const priceRanges = {
    all: { min: null, max: null },
    under50: { min: null, max: 50 },
    between50_100: { min: 50, max: 100 },
    between100_200: { min: 100, max: 200 },
    over200: { min: 200, max: null },
} as const;
type PriceRangesKey = keyof typeof priceRanges;

const FilterBar = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedPrices, setSelectedPrices] = useState('all');
    const [selectedSize, setSelectedSize] = useState('all');
    const [selectedColors, setSelectedColors] = useState('all');
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category') ?? 'All';
        const size = params.get('size') ?? 'all';
        const price_max = params.get('price_max') ?? '';
        const sort = params.get('sort') ?? '';
        const price_min = params.get('price_min') ?? '';
        const color = params.get('color') ?? 'all';
        if (price_max == '50' && price_min == '') {
            setSelectedPrices('under50');
        } else if (price_max == '100' && price_min == '50') {
            setSelectedPrices('between50_100');
        } else if (price_max == '200' && price_min == '100') {
            setSelectedPrices('between100_200');
        } else if (price_min == '200' && price_max == '') {
            setSelectedPrices('over200');
        } else {
            setSelectedPrices('all');
        }
        setSelectedCategory(category);
        setSelectedSize(size);
        setSelectedColors(color);
        setSelectedSort(sort);
    }, []);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (selectedCategory === 'all') {
            params.delete('category');
        } else {
            params.set('category', selectedCategory.toLocaleLowerCase());
        }
        router.get(
            `/shop?${params.toString()}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }, [selectedCategory]);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (selectedPrices === 'all') {
            params.delete('price_min');
            params.delete('price_max');
        } else {
            const range = priceRanges[selectedPrices as PriceRangesKey];

            if (range.min !== null) params.set('price_min', range.min.toString());
            else params.delete('price_min');

            if (range.max !== null) params.set('price_max', range.max.toString());
            else params.delete('price_max');
        }
        router.get(
            `/shop?${params.toString()}`,
            {},
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    }, [selectedPrices]);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (selectedSize === 'all') {
            params.delete('size');
        } else {
            params.set('size', selectedSize);
        }
        router.get(
            `/shop?${params.toString()}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }, [selectedSize]);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (selectedColors === 'all') {
            params.delete('color');
        } else {
            params.set('color', selectedColors);
        }
        router.get(
            `/shop?${params.toString()}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }, [selectedColors]);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (selectedSort === '') {
            params.set('sort', 'newest');
        } else {
            params.set('sort', selectedSort);
        }
        router.get(
            `/shop?${params.toString()}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }, [selectedSort]);
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
                                    <option value={'all'}>All</option>
                                    <option value={'men'}>Men</option>
                                    <option value={'women'}>Women</option>
                                    <option value={'casual'}>Casual</option>
                                    <option value={'formal'}>Formal</option>
                                    <option value={'accessories'}>Accessories</option>
                                    <option value={'new_arrivals'}>New Arrivals</option>
                                    <option value={'activewear'}>Activewear</option>
                                    <option value={'footwear'}>Footwear</option>
                                    <option value={'summer_collection'}>Summer Collection</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                            </div>

                            {/* Price Range */}
                            <div className="relative">
                                <select
                                    className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400"
                                    value={selectedPrices}
                                    onChange={(e) => setSelectedPrices(e.target.value)}
                                >
                                    <option value="all">All Prices</option>
                                    <option value="under50">Under $50</option>
                                    <option value="between50_100">$50 - $100</option>
                                    <option value="between100_200">$100 - $200</option>
                                    <option value="over200">Over $200</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                            </div>

                            {/* Size Filter */}
                            <div className="relative">
                                <select
                                    className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                >
                                    <option value="all">All Sizes</option>
                                    <option value="xs">XS</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value={'xl'}>XL</option>
                                    <option value={'xxl'}>XXL</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                            </div>

                            {/* Color Filter */}
                            <div className="relative">
                                <select
                                    className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 transition-colors outline-none focus:border-neutral-400"
                                    value={selectedColors}
                                    onChange={({ target: { value } }) => setSelectedColors(value)}
                                >
                                    <option value={'all'}>All Colors</option>
                                    <option value={'black'}>Black</option>
                                    <option value={'white'}>White</option>
                                    <option value={'gray'}>Gray</option>
                                    <option value={'blue'}>Blue</option>
                                    <option value={'redd'}>Red</option>
                                    <option value={'green'}>Green</option>
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
                                <option value={'newest'}>Newest</option>
                                <option value={'popular'}>Popular</option>
                                <option value={'price_low'}>Price: Low to High</option>
                                <option value={'price_high'}>Price: High to Low</option>
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
                                <option value={'newest'}>Newest</option>
                                <option value={'popular'}>Popular</option>
                                <option value={'price_low'}>Price: Low to High</option>
                                <option value={'price_high'}>Price: High to Low</option>
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
                                        <option value={'all'}>All</option>
                                        <option value={'men'}>Men</option>
                                        <option value={'women'}>Women</option>
                                        <option value={'casual'}>Casual</option>
                                        <option value={'formal'}>Formal</option>
                                        <option value={'accessories'}>Accessories</option>
                                        <option value={'new_arrivals'}>New Arrivals</option>
                                        <option value={'activewear'}>Activewear</option>
                                        <option value={'footwear'}>Footwear</option>
                                        <option value={'summer_collection'}>Summer Collection</option>
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div className="space-y-3">
                                    <label className="text-neutral-900">Price Range</label>
                                    <select
                                        className="w-full appearance-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors outline-none focus:border-neutral-400"
                                        value={selectedPrices}
                                        onChange={(e) => setSelectedPrices(e.target.value)}
                                    >
                                        <option value="all">All Prices</option>
                                        <option value="under50">Under $50</option>
                                        <option value="between50_100">$50 - $100</option>
                                        <option value="between100_200">$100 - $200</option>
                                        <option value="over200">Over $200</option>
                                    </select>
                                </div>

                                {/* Size */}
                                <div className="space-y-3">
                                    <label className="text-neutral-900">Size</label>
                                    <select
                                        className="w-full appearance-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors outline-none focus:border-neutral-400"
                                        value={selectedSize}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                    >
                                        <option value="all">All Sizes</option>
                                        <option value="xs">XS</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value={'xl'}>XL</option>
                                        <option value={'xxl'}>XXL</option>
                                    </select>
                                </div>

                                {/* Color */}
                                <div className="space-y-3">
                                    <label className="text-neutral-900">Color</label>
                                    <select
                                        className="w-full appearance-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors outline-none focus:border-neutral-400"
                                        value={selectedColors}
                                        onChange={(e) => setSelectedColors(e.target.value)}
                                    >
                                        <option value={'all'}>All Colors</option>
                                        <option value={'black'}>Black</option>
                                        <option value={'white'}>White</option>
                                        <option value={'gray'}>Gray</option>
                                        <option value={'blue'}>Blue</option>
                                        <option value={'redd'}>Red</option>
                                        <option value={'green'}>Green</option>
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
