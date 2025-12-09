import { ImageWithFallback } from '../ImageWithFallback';

const RegisterHero = () => {
    return (
        <div className="relative hidden lg:block lg:w-1/2">
            <div className="flex h-full items-center justify-center bg-neutral-50 p-12">
                <div className="relative h-full max-h-[600px] w-full max-w-lg">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1760264550811-91b2b668cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTE5ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Fashion elegance"
                        className="h-full w-full rounded-3xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default RegisterHero;
