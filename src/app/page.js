"use client";
import { View } from "reshaped";
import Corner from "@/components/Corner";
import Header from "@/components/Header";
import GeoGebraApplet from "@/components/GeoGebraApplet";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/service-worker.js")
                .then(() => console.log("Service Worker registered"))
                .catch((err) => console.error("Service Worker registration failed", err));
        }
    }, []);

    return (
        <View height='100vh' direction='column'>
            <Header />
            <GeoGebraApplet />
            <Corner />
        </View>
    );
}
