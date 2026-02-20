import React from "react";

export default function OffcanvasMenu({ isOpen, onClose }) {
    return (
        <div className={`offcanvas-menu ${isOpen ? "open" : ""}`}>
            <div className="blur-section" onClick={onClose}>
                <h1 className="blur-heading">TRENDFLUENCE</h1>
            </div>
            <div className="links-section">
                <button className="close-btn" onClick={onClose}>×</button>
                <ul>
                    <li><a href="#home" onClick={onClose}>Home</a></li>
                    <li><a href="#about" onClick={onClose}>About</a></li>
                    <li><a href="#projects" onClick={onClose}>Projects</a></li>
                    <li><a href="#contact" onClick={onClose}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}