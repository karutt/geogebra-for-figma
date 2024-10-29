"use client";
import GeoGebraApplet from "@/components/GeoGebraApplet";
import { useRef } from "react";
import { View, Button } from "reshaped";
const Page = () => {
    const ggbContainerRef = useRef();
    return (
        <View height='100vh' direction='column' attributes={{ style: { position: "relative" } }}>
            <Button
                attributes={{ style: { position: "fixed", zIndex: 3 } }}
                onClick={() => {
                    ggbApplet.setPerspective("G");
                }}>
                ok
            </Button>
            <div
                style={{
                    flex: "0 0 auto;",
                }}>
                Header
            </div>
            <GeoGebraApplet ggbContainerRef={ggbContainerRef} />
        </View>
    );
};

export default Page;
