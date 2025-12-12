import { Link } from '@inertiajs/react';

const LoginHeader = () => {
    return (
        <header className="border-b border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-center">
                    {/* Logo */}
                    <Link href={'/'} className="cursor-pointer tracking-wider text-neutral-900 hover:underline">
                        ELEGANCE
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default LoginHeader;
