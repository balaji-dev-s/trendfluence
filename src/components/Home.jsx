import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;
    return (
        <section className="hero-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-7 col-md-12 text-center text-lg-start">
                        <h1 className="hero-title">
                            TRENDFLUENCE <span>Creative Studio</span>
                        </h1>

                        <p className="hero-subtitle">
                            A full-service Graphic & Web Design agency delivering creative,
                            strategic, and result-driven solutions. We build strong visual
                            identities, increase brand visibility, and create digital
                            experiences that don’t just look good — they perform.
                        </p>

                        <div className="hero-btn-wrapper">
                            <a href="#contact" className="btn hero-btn">
                                Let’s Connect
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-5 d-lg-block text-center">
                        <div className="shape-wrapper">
                            <div className="shape-composition">
                                <div className="circle orange-circle"></div>

                                <div className="pill-shape">
                                    <div className="pill-track">
                                        <div className="pill-content">
                                            <span className="brand-tag">Brand Identity</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">Print & Packaging</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">Web Design</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">UI / UX Design</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">Digital Marketing</span>
                                            <span className="star">★</span>

                                            {/* Duplicate for smooth infinite loop */}
                                            <span className="brand-tag">Brand Identity</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">Print & Packaging</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">Web Design</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">UI / UX Design</span>
                                            <span className="star">★</span>
                                            <span className="brand-tag">Digital Marketing</span>
                                            <span className="star">★</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="circle purple-circle"></div>

                                <div className="ring ring-top"></div>
                                <div className="ring ring-bottom"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
