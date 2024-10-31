"use client";
import { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { postMessage } from "@/utils";

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
        (event) => {
            if (event.type !== "viewChanged2D") return;

            const { width: canvasWidth, height: canvasHeight } = canvasRef.current;
            const { xZero, yZero, scale, yscale } = event;

            const coordData = {
                width: canvasWidth / (2 * scale),
                height: canvasHeight / (2 * yscale),
                xmin: -xZero / scale,
                xmax: (canvasWidth / 2 - xZero) / scale,
                ymin: -(canvasHeight / 2 - yZero) / yscale,
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
            appletOnLoad: handleAppletLoad,
        };

        const applet = new GGBApplet(params, true);
        applet.inject("ggb-element");
    }, [ggbContainerRef]);

    const handleAppletLoad = (api) => {
        const canvas = document.querySelector(".EuclidianPanel canvas");
        canvasRef.current = canvas;
        ggbApplet.registerClientListener(handleClientEvent);
        hideMenuBar(false);
        postMessage({ type: "setXML" });
        postMessage({ type: "setSize" });
    };

    onmessage = (e) => {
        if (e.data.pluginMessage.type === "setXML") {
            if (window.ggbApplet) {
                ggbApplet.setXML(e.data.pluginMessage.xml);
            }
        }
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

GeoGebraApplet.propTypes = {
    ggbContainerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    setCoordSystem: PropTypes.func.isRequired,
    hideMenuBar: PropTypes.func.isRequired,
};
