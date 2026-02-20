import { useEffect, useState } from "react";
import Logo from "../assets/d-logo.webp";
import OffcanvasMenu from "./OffcanvasMenu";

export default function Navbar() {
    const [indiaTime, setIndiaTime] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
            setIndiaTime(time);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <nav className="navbar px-3 position-absolute w-100 pt-3 pb-5" style={{ background: "transparent", zIndex: 999 }}>
                <div className="container pt-2 d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" height="40" /></a>

                    <span className="india-time text-uppercase d-none d-lg-block">
                        <span className="india-text">India(IN) </span>{indiaTime}</span>

                    <span className="our-works d-none d-lg-block">Our Works <i className="bi bi-arrow-right"></i></span>

                    <button className="custom-toggler" type="button" onClick={() => setMenuOpen(true)}>
                        <span className="top burger-icon"></span>
                        <span className="middle burger-icon"></span>
                        <span className="bottom burger-icon"></span>
                    </button>
                </div>
            </nav>

            <OffcanvasMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}