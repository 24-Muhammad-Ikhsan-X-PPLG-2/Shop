import { ImageWithFallback } from '../ImageWithFallback';

const team = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        role: 'Founder & Creative Director',
        image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2NDk4NTg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Visionary leader with 15 years in fashion design',
    },
    {
        id: 2,
        name: 'David Chen',
        role: 'Head of Operations',
        image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjQ5OTM5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Operations expert ensuring seamless experiences',
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
        role: 'Lead Fashion Designer',
        image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTAwOTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Creative mind behind our signature collections',
    },
    {
        id: 4,
        name: 'Muhammad Ikhsan',
        role: 'Fullstack Web Developer',
        image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjQ5OTM5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'A web and apps technology specialist with 5+ years of experience.',
    },
];

const TeamSection = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-3 text-center lg:mb-16">
                    <h2 className="text-xl font-medium text-neutral-900">Meet Our Team</h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                        Passionate individuals dedicated to bringing you exceptional fashion experiences.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    {team.map((member) => (
                        <div key={member.id} className="group space-y-4 text-center">
                            <div className="relative mb-4 aspect-square overflow-hidden rounded-3xl bg-neutral-50">
                                <ImageWithFallback
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-neutral-900">{member.name}</h3>
                                <p className="text-lg font-normal text-neutral-900">{member.role}</p>
                                <p className="text-neutral-500">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
