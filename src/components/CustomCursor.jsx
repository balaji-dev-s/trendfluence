import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        // Show cursor only if window width >= 1024px (desktop/laptop)
        const handleResize = () => setShowCursor(window.innerWidth >= 1024);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        // Track mouse position
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        document.addEventListener("mousemove", move);

        // Hover detection on <p> tags
        const elements = document.querySelectorAll("p");
        const onEnter = () => setHovered(true);
        const onLeave = () => setHovered(false);
        elements.forEach(el => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousemove", move);
            elements.forEach(el => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, []);

    // Only render the cursor if showCursor is true
    if (!showCursor) return null;

    return (
        <div
            className={`custom-cursor ${hovered ? "hovered" : ""}`}
            style={{
                left: pos.x + "px",
                top: pos.y + "px",
            }}
        />
    );
}