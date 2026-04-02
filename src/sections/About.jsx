import { Code2, Layers, CheckCircle2, Repeat2 } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Front-End Focus",
        description:
            "Currently focused on React and modern UI—building responsive layouts and reusable components.",
    },
    {
        icon: Layers,
        title: "Full-Stack Background",
        description:
            "Built full-stack projects in college (PHP/Laravel), and I’m rebuilding toward that level again—stronger this time.",
    },
    {
        icon: CheckCircle2,
        title: "Accuracy First",
        description:
            "From SAP and ops work to coding—detail matters. I keep outputs clean, predictable, and reliable.",
    },
    {
        icon: Repeat2,
        title: "Continuous Improvement",
        description:
            "I learn fast through iteration: build, get feedback, refactor, and polish.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-14 lg:py-30 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-foreground">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I’m a BSIT graduate (2022) currently focused on
                                frontend development, specializing in React,
                                with the long-term goal of becoming a full-stack
                                developer.
                            </p>
                            <p>
                                I started my career in admin and data-focused
                                roles—from an office assistant to sales
                                operations—where I developed strong attention to
                                detail, consistency, and experience working with
                                structured systems like SAP. While that path
                                strengthened my discipline, I’ve since shifted
                                my focus back to web development.
                            </p>
                            <p>
                                Right now, I’m actively building and deploying
                                projects, improving my frontend skills, and
                                working with modern tools like React Query to
                                handle real-world data and state management. At
                                the same time, I’m gradually expanding my
                                backend knowledge to move toward full-stack
                                development.
                            </p>
                            <p>
                                I’m aiming for a Junior Frontend / Web Developer
                                role where I can contribute, learn quickly, and
                                grow into a well-rounded full-stack developer.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                “I build web experiences that are both
                                functional and elegant — interfaces users can
                                navigate intuitively, code I can maintain and
                                scale, and projects that grow with every
                                iteration. Every component I create is a step
                                toward becoming a versatile full-stack
                                developer.”
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6 z-1">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{
                                    animationDelay: `${(idx + 1) * 100}ms`,
                                }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
