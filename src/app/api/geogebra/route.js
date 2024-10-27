// 新しいApp Router用のAPIルート構成
export async function GET(request) {
    try {
        const response = await fetch("https://cdn.geogebra.org/apps/deployggb.js");
        if (!response.ok) {
            throw new Error("Failed to fetch GeoGebra script");
        }
        const script = await response.text();
        return new Response(script, {
            headers: { "Content-Type": "application/javascript" },
        });
    } catch (error) {
        console.error("Error fetching GeoGebra script:", error);
        return new Response(JSON.stringify({ error: "Failed to load GeoGebra script" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
