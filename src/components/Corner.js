import React, { useRef, useEffect } from "react";
import { Icon, View } from "reshaped";

const Resize = () => (
    <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M14.776 4.284C14.9085 4.14182 14.9806 3.95378 14.9772 3.75947C14.9737 3.56517 14.895 3.37979 14.7576 3.24238C14.6202 3.10496 14.4348 3.02625 14.2405 3.02282C14.0462 3.01939 13.8582 3.09152 13.716 3.224L3.22 13.72C3.14631 13.7887 3.08721 13.8715 3.04622 13.9635C3.00523 14.0555 2.98319 14.1548 2.98141 14.2555C2.97963 14.3562 2.99816 14.4562 3.03588 14.5496C3.0736 14.643 3.12974 14.7278 3.20096 14.799C3.27218 14.8703 3.35702 14.9264 3.4504 14.9641C3.54379 15.0018 3.64382 15.0204 3.74452 15.0186C3.84523 15.0168 3.94454 14.9948 4.03654 14.9538C4.12854 14.9128 4.21134 14.8537 4.28 14.78L14.776 4.284ZM14.776 9.284C14.9085 9.14182 14.9806 8.95378 14.9772 8.75947C14.9737 8.56517 14.895 8.37979 14.7576 8.24238C14.6202 8.10496 14.4348 8.02625 14.2405 8.02282C14.0462 8.01939 13.8582 8.09152 13.716 8.224L8.22 13.72C8.14631 13.7887 8.08721 13.8715 8.04622 13.9635C8.00523 14.0555 7.98319 14.1548 7.98141 14.2555C7.97963 14.3562 7.99816 14.4562 8.03588 14.5496C8.0736 14.643 8.12974 14.7278 8.20096 14.799C8.27218 14.8703 8.35702 14.9264 8.4504 14.9641C8.54379 15.0018 8.64382 15.0204 8.74452 15.0186C8.84523 15.0168 8.94454 14.9948 9.03654 14.9538C9.12854 14.9128 9.21134 14.8537 9.28 14.78L14.776 9.284Z'
            fill='currentColor'
        />
    </svg>
);

const Corner = () => {
    const resizeIcon = useRef();

    const resizeFigmaWindow = (width, height) => {
        const newSize = {
            width: Math.max(300, Math.floor(parseInt(width))),
            height: Math.max(300, Math.floor(parseInt(height))),
        };

        parent.postMessage(
            {
                pluginMessage: { type: "resize", size: newSize },
                pluginId: "1362143149411056847",
            },
            "https://www.figma.com"
        );
    };

    useEffect(() => {
        const icon = resizeIcon.current;

        const onPointerMove = (e) => {
            resizeFigmaWindow(e.clientX, e.clientY);
        };

        const onPointerDown = (e) => {
            icon.onpointermove = onPointerMove;
            icon.setPointerCapture(e.pointerId);
        };

        const onPointerUp = (e) => {
            icon.onpointermove = null;
            icon.releasePointerCapture(e.pointerId);
        };

        icon.onpointerdown = onPointerDown;
        icon.onpointerup = onPointerUp;

        return () => {
            icon.onpointerdown = null;
            icon.onpointerup = null;
        };
    }, []);

    return (
        <View>
            <Icon
                svg={Resize}
                size={5}
                color='neutral-faded'
                attributes={{
                    ref: resizeIcon,
                    style: {
                        position: "fixed",
                        bottom: 2,
                        right: 2,
                        cursor: "nwse-resize",
                        zIndex: 2,
                    },
                }}
            />
        </View>
    );
};

export default Corner;
