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
        const script = document.createElement("script");
        script.src = "https://cdn.geogebra.org/apps/deployggb.js";
        script.async = true;
        script.onload = () => {
            const container = ggbContainerRef.current;
            if (container) {
                let { width, height } = container.getBoundingClientRect();
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
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
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
