import { ProductType } from '@/types/db';
import { LaravelPaginator } from '@/types/pagination';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC } from 'react';

type PaginationProps = {
    posts?: LaravelPaginator<ProductType>;
};

const Pagination: FC<PaginationProps> = ({ posts = null }) => {
    if (!posts || posts.data.length == 0) {
        return <></>;
    }
    return (
        <section className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-2">
                    {/* Previous Button */}
                    {posts.prev_page_url && (
                        <Link
                            href={posts.prev_page_url}
                            className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-50"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="hidden sm:inline">Previous</span>
                        </Link>
                    )}

                    {/* Page Numbers */}
                    {Array.from({ length: posts.last_page }).map((_, idx) => {
                        const id = ++idx;
                        return (
                            <Link
                                href={`${import.meta.env.VITE_APP_URL}/shop?page=${id}`}
                                key={idx}
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-center transition-colors ${posts.current_page === id ? 'bg-neutral-900 text-white' : 'border border-neutral-200 text-neutral-700 hover:bg-neutral-50'}`}
                            >
                                {id}
                            </Link>
                        );
                    })}

                    {/* Next Button */}
                    {posts.next_page_url && (
                        <Link
                            href={posts.next_page_url}
                            className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-50"
                        >
                            <span className="hidden sm:inline">Next</span>
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Pagination;
