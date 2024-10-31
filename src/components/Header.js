import { Button, View, ActionBar, TextField } from "reshaped";
import { centerX, centerY, centerXY, menubar, sidebar } from "./icons";
import { useState, useEffect, useCallback } from "react";
import { postMessage } from "@/utils";
import PropTypes from "prop-types";
import { LOSS } from "@/constantVariable";

const Header = ({ ggbContainerRef, coordSystem, hideMenuBar, headerRef }) => {
    const [size, setSize] = useState({ width: 300, height: 200 });
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [menuBarVisible, setMenuBarVisible] = useState(true);

    const updateWindowSize = useCallback(() => {
        const container = ggbContainerRef.current;
        if (container) {
            let { width, height } = container.getBoundingClientRect();
            [width, height] = [width - LOSS, height - LOSS];
            setSize({ width, height });
        }
    }, [ggbContainerRef]);

    const updatePluginSize = () => {
        const initialHeaderHeight = headerRef.current.getBoundingClientRect().height;
        const adjustedWidth = Math.max(300, size.width || 300);
        const adjustedHeight = Math.max(200, size.height || 200);
        postMessage({
            type: "resize",
            size: {
                width: adjustedWidth + LOSS,
                height: adjustedHeight + initialHeaderHeight + LOSS,
            },
        });
        setTimeout(() => {
            const headerHeight = headerRef.current.getBoundingClientRect().height;
            if (headerHeight !== initialHeaderHeight) {
                postMessage({
                    type: "resize",
                    size: {
                        width: adjustedWidth + LOSS,
                        height: adjustedHeight + headerHeight + LOSS,
                    },
                });
            }
        }, 100);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowSize);
        updateWindowSize();
        return () => window.removeEventListener("resize", updateWindowSize);
    }, [updateWindowSize]);

    const handleSizeChange = (value, key) => {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) || value === "") {
            setSize((prevSize) => ({ ...prevSize, [key]: parseInt(value) || "" }));
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
                    <View direction='row' gap={2}>
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
                        <View direction='row' gap={2}>
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
                    </View>
                </View.Item>
                <Button
                    color='primary'
                    onClick={() => {
                        ggbApplet.setPerspective("G");
                        ggbApplet.exportSVG((svg) => {
                            if (typeof svg === "string" || svg instanceof String) {
                                const xml = ggbApplet.getXML();
                                const body = document.querySelector("body");
                                const size = { width: body.clientWidth, height: body.clientHeight };
                                postMessage({ type: "export", svg, xml, size });
                            }
                        });
                    }}>
                    Export
                </Button>
            </View>
        </ActionBar>
    );
};

Header.propTypes = {
    ggbContainerRef: PropTypes.object.isRequired,
    coordSystem: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        xmin: PropTypes.number.isRequired,
        xmax: PropTypes.number.isRequired,
        ymin: PropTypes.number.isRequired,
        ymax: PropTypes.number.isRequired,
    }).isRequired,
    hideMenuBar: PropTypes.func.isRequired,
};

export default Header;
