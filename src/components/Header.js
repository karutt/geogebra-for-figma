import { Button, View, ActionBar } from "reshaped";
import { centerX, centerY, centerXY, sidebar, menubar, fullscreen } from "@/icon/icon";
import { TextField } from "reshaped";

import { useState, useEffect, useCallback, useRef } from "react";

const Header = ({ ggbContainerRef }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const headerrRef = useRef();

    const updateWindowSize = useCallback(() => {
        const container = ggbContainerRef.current;
        if (container) {
            let { width, height } = container.getBoundingClientRect();
            setWidth(width);
            setHeight(height);
        }
    }, [ggbContainerRef]);

    const updatePluginWidnwSize = () => {
        const headerHeight = headerrRef.current.getBoundingClientRect().height;
        const w = width == "" ? 300 : Math.max(300, parseInt(width));
        const h = height == "" ? 200 : Math.max(200, parseInt(height));
        setWidth(w);
        setHeight(h);
        console.log(w, h);
        parent.postMessage(
            {
                pluginMessage: {
                    type: "resize",
                    size: { width: w, height: h + headerHeight },
                },
                pluginId: "1362143149411056847",
            },
            "https://www.figma.com"
        );
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowSize);
        updateWindowSize();
        return () => window.removeEventListener("resize", updateWindowSize);
    }, [updateWindowSize]);

    const updateValue = (newValue, setValue) => {
        console.log(newValue);
        if (newValue === "") {
            setValue("");
            return;
        }
        const intValue = parseInt(newValue);
        if (!isNaN(intValue)) {
            setValue(intValue);
        }
    };

    const attributes = {
        style: { width: "75px" },
        onKeyDown: (e) => {
            if (e.key === "Enter") e.target.blur(); // Enterでフォーカスを外す
        },
    };
    return (
        <ActionBar
            position='top'
            elevated
            attributes={{
                ref: headerrRef,
            }}>
            <View direction='row'>
                <View.Item grow>
                    <View direction='row' gap={3}>
                        <Button icon={fullscreen} color='neutral' />
                        <Button icon={menubar} color='neutral' />
                        <Button icon={centerXY} color='neutral' />
                        <Button icon={centerX} color='neutral' />
                        <Button icon={centerY} color='neutral' />
                        <TextField
                            name='number'
                            suffix='px'
                            value={width}
                            onChange={(e) => {
                                updateValue(e.value, setWidth);
                            }}
                            attributes={attributes}
                            onBlur={updatePluginWidnwSize}
                        />
                        <TextField
                            name='number'
                            suffix='px'
                            value={height}
                            onChange={(e) => {
                                updateValue(e.value, setHeight);
                            }}
                            attributes={attributes}
                            onBlur={updatePluginWidnwSize}
                        />
                    </View>
                </View.Item>
                <Button color='primary'>Export</Button>
            </View>
        </ActionBar>
    );
};

export default Header;
