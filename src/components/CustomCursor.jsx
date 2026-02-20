import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        // Update cursor position
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        document.addEventListener("mousemove", move);

        // Add hover listeners to all <p> tags
        const elements = document.querySelectorAll("p");
        const onEnter = () => setHovered(true);
        const onLeave = () => setHovered(false);

        elements.forEach(el => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        return () => {
            document.removeEventListener("mousemove", move);
            elements.forEach(el => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, []);

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