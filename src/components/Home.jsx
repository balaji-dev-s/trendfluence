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
        <div>
            Home Page Content
        </div>
    );
}
