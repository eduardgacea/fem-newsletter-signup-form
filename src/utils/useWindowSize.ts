import { useState, useEffect } from "react";

type WindowSize = {
    width: number;
    height: number;
};

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    } as WindowSize);

    useEffect(() => {
        const windowResizeHandler = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", windowResizeHandler);

        return () => window.removeEventListener("resize", windowResizeHandler);
    }, []);

    return windowSize;
}
