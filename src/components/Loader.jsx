import React from 'react'
import { useEffect, useState } from "react";

export default function Loader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setProgress(20), 400);
        setTimeout(() => setProgress(80), 1200);
        setTimeout(() => setProgress(100), 2000);
    }, []);

    return (
        <div className="loader-wrapper d-flex flex-column justify-content-center align-items-center">

            <div className="loading-bar">
                <div className="loading-fill" style={{ width: `${progress}%` }}></div>
            </div>

            <h1 className="brand-text mt-5">trendfluence studio</h1>

        </div>
    );
}
