import { useEffect, useState } from "react";
import Loader from "./Loader";
import DImage from "../assets/d-logo.webp";
import CustomCursor from "./CustomCursor";

export default function Home() {
    const [loadingFinished, setLoadingFinished] = useState(false);

    if (!loadingFinished) return <Loader onFinish={() => setLoadingFinished(true)} />;

    return (
        <section className="hero-section d-flex align-items-center">
            <CustomCursor />
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-7 col-md-12 text-center text-lg-start">
                        <h1 className="hero-title">
                            TREN<img src={DImage} alt="D" style={{
                                width: ".56em", verticalAlign: "middle", display: "inline-block", position: "relative", top: "-.069em"
                            }} />
                            FLUENCE <span>Creative Studio</span>
                        </h1>

                        <p className="hero-subtitle">
                            We craft <span className="highlight">visual experiences</span> that{" "}
                            <span className="highlight">shape perception</span>,{" "}
                            <span className="highlight">build trust</span>, and move businesses forward. Every
                            project blends <span className="highlight">creativity</span> with{" "}
                            <span className="highlight">strategic thinking</span> to ensure your brand stands out
                            with <span className="highlight">clarity</span> and{" "}
                            <span className="highlight">confidence</span>.<br />
                            At <span className="highlight">Trendfluence Creative Studio</span>, design is more than
                            aesthetics. It is a purposeful approach to{" "}
                            <span className="highlight">strengthening identity</span>,{" "}
                            <span className="highlight">increasing visibility</span>, and creating{" "}
                            <span className="highlight">lasting impact</span> in a competitive digital space.
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
