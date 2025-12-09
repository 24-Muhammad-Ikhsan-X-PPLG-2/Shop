import AboutCTA from '@/components/About/AboutCTA';
import AboutHero from '@/components/About/AboutHero';
import BrandStory from '@/components/About/BrandStory';
import MissionVision from '@/components/About/MissionVision';
import SustainableCommitment from '@/components/About/SustainableCommitment';
import TeamSection from '@/components/About/TeamSection';
import Testimonials from '@/components/About/Testimonials';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Head } from '@inertiajs/react';

const About = () => {
    return (
        <>
            <Head title="About"></Head>
            <div className="min-h-screen bg-white">
                <Header activePage="about" />
                <main>
                    <AboutHero />
                    <BrandStory />
                    <MissionVision />
                    <TeamSection />
                    <SustainableCommitment />
                    <Testimonials />
                    <AboutCTA />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default About;
