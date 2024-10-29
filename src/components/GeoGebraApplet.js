"use client";
import { useEffect, useCallback, useRef } from "react";

export default function GeoGebraApplet({ ggbContainerRef, setCoordSystem, hideMenuBar }) {
    const canvasRef = useRef();

    const updateAppletSize = useCallback(() => {
        const container = ggbContainerRef.current;
        if (container && window.ggbApplet) {
            const { width, height } = container.getBoundingClientRect();
            ggbApplet.setSize(width, height);
        }
    }, [ggbContainerRef]);

    const handleClientEvent = useCallback(
        (e) => {
            if (e.type !== "viewChanged2D") return;

            const { width: w, height: h } = canvasRef.current;
            const { xZero, yZero, scale, yscale } = e;

            const coordData = {
                width: w / (2 * scale),
                height: h / (2 * yscale),
                xmin: -xZero / scale,
                xmax: (w / 2 - xZero) / scale,
                ymin: -(h / 2 - yZero) / yscale,
                ymax: yZero / yscale,
            };
            setCoordSystem(coordData);
        },
        [setCoordSystem]
    );

    const initializeApplet = useCallback(() => {
        const container = ggbContainerRef.current;
        if (!container) return;

        const { width, height } = container.getBoundingClientRect();
        const params = {
            appName: "graphing",
            width,
            height,
            showToolBar: true,
            showAlgebraInput: true,
            showMenuBar: true,
            appletOnLoad: (api) => handleAppletLoad(api),
        };

        const applet = new GGBApplet(params, true);
        applet.inject("ggb-element");
    }, [ggbContainerRef]);

    const handleAppletLoad = (api) => {
        const canvas = document.querySelector(".EuclidianPanel canvas");
        canvasRef.current = canvas;
        ggbApplet.registerClientListener(handleClientEvent);
        hideMenuBar(false);
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.geogebra.org/apps/deployggb.js";
        script.async = true;
        script.onload = initializeApplet;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
            if (window.ggbApplet) {
                window.ggbApplet.unregisterClientListener(handleClientEvent);
            }
        };
    }, [initializeApplet, handleClientEvent]);

    useEffect(() => {
        window.addEventListener("resize", updateAppletSize);
        updateAppletSize();

        return () => window.removeEventListener("resize", updateAppletSize);
    }, [updateAppletSize]);

    return (
        <div
            ref={ggbContainerRef}
            style={{
                width: "100vw",
                flex: 1,
                boxSizing: "border-box",
                overflow: "hidden",
            }}>
            <div id='ggb-element' />
        </div>
    );
}
