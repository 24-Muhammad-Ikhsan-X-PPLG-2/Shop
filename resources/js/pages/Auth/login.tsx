import LoginFooter from '@/components/Auth/LoginFooter';
import LoginForm from '@/components/Auth/LoginForm';
import LoginHeader from '@/components/Auth/LoginHeader';
import LoginHero from '@/components/Auth/LoginHero';
import { Head } from '@inertiajs/react';

const Login = () => {
    return (
        <>
            <Head title="Sign In"></Head>
            <div className="flex min-h-screen flex-col bg-white">
                <LoginHeader />
                <main className="flex flex-1">
                    <div className="flex w-full items-center justify-center p-8 md:p-12 lg:w-1/2">
                        <div className="w-full max-w-md">
                            <LoginForm />
                        </div>
                    </div>
                    <LoginHero />
                </main>
                <LoginFooter />
            </div>
        </>
    );
};

export default Login;
