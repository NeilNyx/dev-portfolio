import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full glass border border-border hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                pointerEvents: visible ? "auto" : "none",
                transition: "opacity 300ms ease, transform 300ms ease",
            }}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};
