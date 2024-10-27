// /utils/postToFigma.js

export const postToFigma = (postMsg) => {
    const pluginId = "1362143149411056847"; // 固定のpluginIdを使用
    parent.postMessage(
        {
            pluginMessage: postMsg,
            pluginId,
        },
        "https://www.figma.com"
    );
};
