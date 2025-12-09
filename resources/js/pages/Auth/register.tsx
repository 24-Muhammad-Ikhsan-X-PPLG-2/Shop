import LoginFooter from '@/components/Auth/LoginFooter';
import LoginHeader from '@/components/Auth/LoginHeader';
import RegisterForm from '@/components/Auth/RegisterForm';
import RegisterHero from '@/components/Auth/RegisterHero';
import { Head } from '@inertiajs/react';

const Register = () => {
    return (
        <>
            <Head title="Sign Up"></Head>
            <div className="flex min-h-screen flex-col bg-white">
                <LoginHeader />
                <main className="flex flex-1">
                    <div className="flex w-full items-center justify-center p-8 md:p-12 lg:w-1/2">
                        <div className="w-full max-w-md">
                            <RegisterForm />
                        </div>
                    </div>
                    <RegisterHero />
                </main>
                <LoginFooter />
            </div>
        </>
    );
};

export default Register;
