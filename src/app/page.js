"use client";
import { View } from "reshaped";
import Corner from "@/components/Corner";
import Header from "@/components/Header";
import GeoGebraApplet from "@/components/GeoGebraApplet";
import { useRef, useState, useEffect } from "react";

export default function Home() {
    const ggbContainerRef = useRef();

    return (
        <View height='100vh' direction='column'>
            <Header ggbContainerRef={ggbContainerRef} />
            <GeoGebraApplet ggbContainerRef={ggbContainerRef} />
            <Corner />
        </View>
    );
}
