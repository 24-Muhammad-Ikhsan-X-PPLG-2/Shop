import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <span className="tracking-wider">ELEGANCE</span>
                        <p className="text-neutral-400">Your destination for premium fashion and timeless style.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-[18px] font-semibold">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/shop" className="text-neutral-400 transition-colors hover:text-white">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-4 text-[18px] font-semibold">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                                    Size Guide
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="font-[17px]">Newsletter</h3>
                        <p className="text-neutral-400">Subscribe to get special offers and updates</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 transition-colors outline-none placeholder:text-neutral-500 focus:border-neutral-500"
                            />
                            <button className="rounded-full bg-white p-2 text-neutral-900 transition-colors hover:bg-neutral-100">
                                <Mail className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
                    <div className="text-neutral-400">© 2024 Elegance. All rights reserved.</div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700">
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                            Terms
                        </a>
                        <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
