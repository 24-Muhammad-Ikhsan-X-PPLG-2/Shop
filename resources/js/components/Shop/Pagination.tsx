import { ChevronLeft, ChevronRight } from 'lucide-react';
const Pagination = () => {
    return (
        <section className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-2">
                    {/* Previous Button */}
                    <button className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-50">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <button className="h-10 w-10 rounded-full bg-neutral-900 text-white">1</button>
                    <button className="h-10 w-10 rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-50">
                        2
                    </button>
                    <button className="h-10 w-10 rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-50">
                        3
                    </button>
                    <button className="h-10 w-10 rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-50">
                        4
                    </button>

                    {/* Next Button */}
                    <button className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-50">
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pagination;
