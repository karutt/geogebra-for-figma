"use client";

import { Reshaped, useTheme } from "reshaped";

import "reshaped/themes/figma/theme.css";
import { useEffect } from "react";

// OSのカラーモードを取得する関数
const detectSystemColorMode = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light"; // デフォルトで"light"を返す
};

const App = ({ children }) => {
    const { setColorMode } = useTheme(); // カラーモード操作用フック

    useEffect(() => {
        const initialMode = detectSystemColorMode(); // OSからカラーモード取得
        setColorMode(initialMode); // 初期カラーモードを設定
    }, [setColorMode]); // 依存関係にsetColorModeを指定

    return (
        <Reshaped theme='figma' defaultColorMode={detectSystemColorMode()}>
            {children}
        </Reshaped>
    );
};

export default App;
