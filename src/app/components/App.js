"use client";

import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";
import "reshaped/themes/figma/theme.css";

const App = ({ children }) => {
    return (
        <Reshaped theme='figma' defaultColorMode='dark'>
            {children}
        </Reshaped>
    );
};

export default App;
