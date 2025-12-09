const LoginFooter = () => {
    return (
        <footer className="mt-auto border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {/* Logo */}
                    <span className="tracking-wider text-neutral-900">ELEGANCE</span>

                    {/* Copyright */}
                    <div className="text-neutral-600">© 2024 Elegance. All rights reserved.</div>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-neutral-600 transition-colors hover:text-neutral-900">
                            Terms
                        </a>
                        <a href="#" className="text-neutral-600 transition-colors hover:text-neutral-900">
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LoginFooter;
