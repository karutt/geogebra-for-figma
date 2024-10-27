"use client";

import { Reshaped, useTheme } from "reshaped";
import { useEffect } from "react";
import "reshaped/themes/figma/theme.css";

const detectSystemColorMode = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
};

const App = ({ children }) => {
    const { setColorMode } = useTheme();

    useEffect(() => {
        const initialMode = detectSystemColorMode();
        setColorMode(initialMode);
    }, [setColorMode]);

    return (
        <Reshaped theme='figma' defaultColorMode={detectSystemColorMode()}>
            {children}
        </Reshaped>
    );
};

export default App;
