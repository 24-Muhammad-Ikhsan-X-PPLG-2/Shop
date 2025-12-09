import { ImageWithFallback } from '../ImageWithFallback';

const LoginHero = () => {
    return (
        <div className="relative hidden lg:block lg:w-1/2">
            <div className="flex h-full items-center justify-center bg-neutral-50 p-12">
                <div className="relative h-full max-h-[600px] w-full max-w-lg">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1745284504942-2eb53650360a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1MjUwMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Elegant fashion"
                        className="h-full w-full rounded-3xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginHero;
