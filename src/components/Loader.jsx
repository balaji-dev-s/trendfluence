import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [hideBar, setHideBar] = useState(false);
    const [shrinkText, setShrinkText] = useState(false);

    useEffect(() => {
        const timers = [
            setTimeout(() => setProgress(20), 400),
            setTimeout(() => setProgress(80), 1200),
            setTimeout(() => setProgress(100), 2000),
            // wait 0.5s after 100% before starting to hide bar
            setTimeout(() => setHideBar(true), 2500),
            // wait 0.5s after bar is hidden before shrinking text
            setTimeout(() => setShrinkText(true), 3000),
            // finish loader after text shrinks
            setTimeout(() => onFinish && onFinish(), 3700)
        ];
        return () => timers.forEach(t => clearTimeout(t));
    }, [onFinish]);

    return (
        <div className="loader-wrapper d-flex flex-column justify-content-center align-items-center position-fixed
         w-100 h-100" style={{ zIndex: 9999, top: 0, left: 0 }}>

            {/* Smooth fade for percentage and bar */}
            <h2 className="mb-3" style={{ opacity: hideBar ? 0 : 1, transition: 'opacity 0.5s' }}>{progress}%</h2>

            <div className="loading-bar" style={{ opacity: hideBar ? 0 : 1, transition: 'opacity 0.5s' }}>
                <div className="loading-fill" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Text wrapper always present, shrink/fade applied after hideBar */}
            <div className={`brand-text-wrapper mt-5 ${shrinkText ? 'expand-fade' : ''}`}
                style={{ display: 'inline-block', transition: 'transform 0.7s, opacity 0.7s' }}>
                <h1 className="brand-text">trendfluence studio</h1>
            </div>

        </div>
    );
}