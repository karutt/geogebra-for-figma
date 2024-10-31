"use client";
import { View } from "reshaped";
import Corner from "@/components/Corner";
import Header from "@/components/Header";
import GeoGebraApplet from "@/components/GeoGebraApplet";
import { useRef, useState } from "react";

export default function Home() {
    const ggbContainerRef = useRef();
    const headerRef = useRef();
    const [coordSystem, setCoordSystem] = useState({});

    const hideMenuBar = (show) => {
        const array = [
            ".header",
            ".main",
            ".button.flatButton.menu.landscapeMenuBtn",
            ".algebraPanel.customScrollbar.tab",
        ];
        for (const className of array) {
            const element = document.querySelector(className);
            if (element) {
                show ? element.classList.remove("hide") : element.classList.add("hide");
            }
        }
    };

    return (
        <View height='100vh' direction='column'>
            <Header
                ggbContainerRef={ggbContainerRef}
                coordSystem={coordSystem}
                hideMenuBar={hideMenuBar}
                headerRef={headerRef}
            />
            <GeoGebraApplet
                ggbContainerRef={ggbContainerRef}
                setCoordSystem={setCoordSystem}
                hideMenuBar={hideMenuBar}
            />
            <Corner headerRef={headerRef} />
        </View>
    );
}
