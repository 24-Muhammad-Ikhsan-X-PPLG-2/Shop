import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router, usePage } from '@inertiajs/react';
import { Eye, EyeOff, Lock, Mail, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

const schemaForm = z.object({
    email: z.string(),
    password: z.string(),
});

type schemaFormType = z.infer<typeof schemaForm>;

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        props: { errors, flash },
    } = usePage();
    const [showSuccessPanel, setShowSuccessPanel] = useState(false);
    const [showErrorPanel, setShowErrorPanel] = useState(false);
    const { register, handleSubmit } = useForm<schemaFormType>({
        resolver: zodResolver(schemaForm),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onLogin: SubmitHandler<schemaFormType> = (data) => {
        router.post('/signin', data);
    };
    useEffect(() => {
        if (flash.success) {
            setShowSuccessPanel(true);
        } else {
            setShowSuccessPanel(false);
        }
        if (flash.error) {
            setShowErrorPanel(true);
        } else {
            setShowErrorPanel(false);
        }
    }, [flash.success, flash.error]);
    return (
        <div className="mx-auto w-full max-w-md">
            {/* Title Section */}
            <div className="mb-8 space-y-2 text-center">
                <h1 className="text-2xl font-semibold text-neutral-900">Welcome Back</h1>
                <p className="text-lg text-neutral-600">Log in to continue your shopping experience.</p>
                <AnimatePresence mode="wait">
                    {flash.success && showSuccessPanel ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="relative mt-2 flex items-center justify-center gap-1 rounded-xl border border-green-600 bg-green-300 p-4"
                        >
                            <p className="text-center text-green-800">{flash.success}</p>
                            <X className="absolute top-1 right-1 size-5 cursor-pointer text-green-800" onClick={() => setShowSuccessPanel(false)} />
                        </motion.div>
                    ) : null}
                    {flash.error && showErrorPanel ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="relative mt-2 flex items-center justify-center gap-1 rounded-xl border border-red-600 bg-red-300 p-4"
                        >
                            <p className="text-center text-red-800">{flash.error}</p>
                            <X className="absolute top-1 right-1 size-5 cursor-pointer text-red-800" onClick={() => setShowErrorPanel(false)} />
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                    <label htmlFor="email" className={`block ${errors.email ? 'text-red-600' : 'text-neutral-900'}`}>
                        Email
                    </label>
                    <div className="relative">
                        <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                        <input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                            className={`w-full rounded-full border bg-neutral-50 px-12 py-3 transition-colors outline-none placeholder:text-neutral-400 ${errors.email ? 'border-red-500 focus:border-red-600' : 'border-neutral-200 focus:border-neutral-400'}`}
                            {...register('email')}
                        />
                    </div>
                    <p className="text-red-600">{errors.email}</p>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                    <label htmlFor="password" className={`block ${errors.password ? 'text-red-600' : 'text-neutral-900'}`}>
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            required
                            className={`w-full rounded-full border bg-neutral-50 px-12 py-3 transition-colors outline-none placeholder:text-neutral-400 ${errors.password ? 'border-red-500 focus:border-red-600' : 'border-neutral-200 focus:border-neutral-400'}`}
                            {...register('password')}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-neutral-400 transition-colors hover:text-neutral-600"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                    <p className="text-red-600">{errors.password}</p>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                    <a href="#" className="text-neutral-600 transition-colors hover:text-neutral-900">
                        Forgot Password?
                    </a>
                </div>

                {/* Login Button */}
                <button type="submit" className="w-full rounded-full bg-neutral-900 py-3 text-white transition-colors hover:bg-neutral-800">
                    Log In
                </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-neutral-200"></div>
                <span className="text-neutral-500">or continue with</span>
                <div className="h-px flex-1 bg-neutral-200"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="mb-8 grid grid-cols-2 gap-4">
                <button
                    onClick={() => (window.location.href = '/auth/google')}
                    className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 py-3 transition-colors hover:bg-neutral-50"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 py-3 transition-colors hover:bg-neutral-50">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Apple
                </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
                <p className="text-neutral-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-neutral-900 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
