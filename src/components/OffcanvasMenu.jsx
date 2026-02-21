import React, { useEffect, useState } from "react";
import DImage from "../assets/d-logo.webp";
import EmailActions from "./EmailActions";

export default function OffcanvasMenu({ isOpen, onClose }) {

    const [indiaTime, setIndiaTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
            setIndiaTime(time);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`offcanvas-menu ${isOpen ? "open" : ""}`}>

            <div className="offcanvas-wrapper d-flex">

                <div className="blur-section flex-fill">
                    <h1 className="hero-title text-center">
                        TREN
                        <img
                            src={DImage}
                            alt="D"
                            style={{
                                width: ".56em",
                                verticalAlign: "middle",
                                display: "inline-block",
                                position: "relative",
                                top: "-.069em"
                            }}
                        />
                        FLUENCE<br />
                        <span>Creative Studio</span>
                    </h1>
                </div>

                <div className="menu-panel d-flex flex-column gap-1">
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="small grey-menu-text">Menu</small>
                            <button className="close-btn" onClick={onClose}>&times;</button>
                        </div>

                        <ul className="menu-links list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Studio</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="custom-divider"></div>

                    <div className="menu-middle position-relative d-inline-block">
                        <p className="small grey-menu-text">Let’s Talk</p>
                        <EmailActions />
                        <div className="mt-4 small grey-menu-text">
                            <span>
                                <span className="india-text">India(IN) </span>
                                {indiaTime}
                            </span>
                        </div>
                    </div>

                    <div className="custom-divider"></div>


                    <div className="menu-bottom">
                        <p className="small grey-menu-text">Socials</p>
                        <div className="d-flex social-icon flex-row gap-3 align-items-center">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="tel:+91 9677231601" className="text-white fs-5">
                                <i className="bi bi-telephone"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}