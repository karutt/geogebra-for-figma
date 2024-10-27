"use client";
import { useEffect, useRef, useCallback } from "react";

export default function GeoGebraApplet() {
    const ggbContainerRef = useRef();
    const updateAppletSize = useCallback(() => {
        const container = ggbContainerRef.current;
        if (container && window.ggbApplet) {
            let { width, height } = container.getBoundingClientRect();
            ggbApplet.setSize(width, height);
            console.log(width, height);
        }
    }, []);

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const loadGeoGebra = async () => {
            try {
                // CDNからスクリプトをロード
                await loadScript("https://cdn.geogebra.org/apps/deployggb.js");
            } catch (error) {
                console.warn("CDNからの読み込みに失敗。ローカルスクリプトを使用します。");
                // ローカルスクリプトをロード
                await loadScript("/local-path/deployggb.js");
            }

            const container = ggbContainerRef.current;
            if (container) {
                const { width, height } = container.getBoundingClientRect();
                const params = {
                    appName: "graphing",
                    width,
                    height,
                    showToolBar: true,
                    showAlgebraInput: true,
                    showMenuBar: true,
                };
                const applet = new GGBApplet(params, true);
                applet.inject("ggb-element");
            }
        };

        loadGeoGebra();

        return () => {
            const script = document.querySelector("script[src*='deployggb.js']");
            if (script) document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("resize", updateAppletSize);
        updateAppletSize();
        return () => window.removeEventListener("resize", updateAppletSize);
    }, [updateAppletSize]);

    return (
        <div
            ref={ggbContainerRef}
            style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                overflow: "hidden",
            }}>
            <div id='ggb-element' />
        </div>
    );
}
