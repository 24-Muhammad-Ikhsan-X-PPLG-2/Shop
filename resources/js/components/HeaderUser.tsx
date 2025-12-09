import { User } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const HeaderUser = () => {
    const [open, setOpen] = useState(false);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);
    const handleToggle = () => setOpen((prev) => !prev);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => window.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <div className="relative">
            <button
                className={`cursor-pointer rounded-full p-2 transition duration-200 hover:bg-neutral-50 ${open ? 'border border-neutral-900' : ''}`}
                onClick={handleToggle}
            >
                <User className="h-5 w-5 text-neutral-700" />
            </button>
            <AnimatePresence mode="wait">
                {open && (
                    <motion.div
                        ref={dropdownMenuRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-15 -left-43 flex h-fit w-fit items-center rounded-tl-full rounded-br-full rounded-bl-full border border-neutral-200 bg-white p-2 shadow"
                    >
                        <button className="cursor-pointer rounded-tl-full rounded-bl-full bg-neutral-900 px-4 py-2 font-medium text-white transition duration-200 hover:bg-neutral-800">
                            Sign In
                        </button>
                        <button className="cursor-pointer rounded-tr-full rounded-br-full border border-neutral-900 bg-transparent px-4 py-2 font-medium text-black transition duration-200 hover:border-neutral-900/70 hover:text-neutral-900/70">
                            Sign Up
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeaderUser;
