import { Button, View, ActionBar } from "reshaped";
import { centerX, centerY, centerXY, menubar, fullscreen, sidebar } from "./icons";
import { TextField } from "reshaped";
import { useState, useEffect, useCallback, useRef } from "react";

const Header = ({ ggbContainerRef, coordSystem, hideMenuBar }) => {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [menuBarVisible, setMenuBarVisible] = useState(true);
    const headerRef = useRef();

    const updateWindowSize = useCallback(() => {
        const container = ggbContainerRef.current;
        if (container) {
            const { width, height } = container.getBoundingClientRect();
            setSize({ width, height });
        }
    }, [ggbContainerRef]);

    const updatePluginSize = () => {
        const headerHeight = headerRef.current.getBoundingClientRect().height;
        const adjustedWidth = Math.max(300, size.width || 300);
        const adjustedHeight = Math.max(200, size.height || 200);

        setSize({ width: adjustedWidth, height: adjustedHeight });

        parent.postMessage(
            {
                pluginMessage: {
                    type: "resize",
                    size: { width: adjustedWidth, height: adjustedHeight + headerHeight },
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

    const handleSizeChange = (value, key) => {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) || value === "") {
            setSize((prevSize) => ({ ...prevSize, [key]: value || "" }));
        }
    };

    const toggleSidebar = () => {
        ggbApplet.setPerspective(sidebarVisible ? "G" : "AG");
        setSidebarVisible((prev) => !prev);
    };

    const toggleMenuBar = () => {
        hideMenuBar(menuBarVisible);
        setMenuBarVisible((prev) => !prev);
    };

    const resetCoordSystem = (xRange, yRange) => {
        ggbApplet.setCoordSystem(...xRange, ...yRange);
    };

    const textFieldAttributes = {
        style: { width: "75px" },
        onKeyDown: (e) => e.key === "Enter" && e.target.blur(),
    };

    return (
        <ActionBar position='top' elevated attributes={{ ref: headerRef }}>
            <View direction='row'>
                <View.Item grow>
                    <View direction='row' gap={1}>
                        <Button icon={sidebar} color='neutral' onClick={toggleSidebar} />
                        <Button icon={menubar} color='neutral' onClick={toggleMenuBar} />
                        <Button
                            icon={centerXY}
                            color='neutral'
                            onClick={() =>
                                resetCoordSystem(
                                    [-coordSystem.width / 2, coordSystem.width / 2],
                                    [-coordSystem.height / 2, coordSystem.height / 2]
                                )
                            }
                        />
                        <Button
                            icon={centerY}
                            color='neutral'
                            onClick={() =>
                                resetCoordSystem(
                                    [-coordSystem.width / 2, coordSystem.width / 2],
                                    [coordSystem.ymin, coordSystem.ymax]
                                )
                            }
                        />
                        <Button
                            icon={centerX}
                            color='neutral'
                            onClick={() =>
                                resetCoordSystem(
                                    [coordSystem.xmin, coordSystem.xmax],
                                    [-coordSystem.height / 2, coordSystem.height / 2]
                                )
                            }
                        />
                        <TextField
                            name='width'
                            prefix='w'
                            value={size.width}
                            onChange={(e) => handleSizeChange(e.value, "width")}
                            attributes={textFieldAttributes}
                            onBlur={updatePluginSize}
                        />
                        <TextField
                            name='height'
                            prefix='h'
                            value={size.height}
                            onChange={(e) => handleSizeChange(e.value, "height")}
                            attributes={textFieldAttributes}
                            onBlur={updatePluginSize}
                        />
                    </View>
                </View.Item>
                <Button color='primary'>Export</Button>
            </View>
        </ActionBar>
    );
};

export default Header;
