const PLUGIN_ID = "1163446140410056847";
const FIGMA_URL = "https://www.figma.com";

const postMessage = (msg) => {
    parent.postMessage(
        {
            pluginMessage: msg,
            pluginId: PLUGIN_ID,
        },
        FIGMA_URL
    );
};

export { postMessage };
