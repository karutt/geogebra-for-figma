"use client";
import { Button, View, Text, Card } from "reshaped";

export default function Home() {
    function onMessage() {
        parent.postMessage(
            { pluginMessage: { msg: "Hello World" }, pluginId: "1362143149411056847" },
            "https://www.figma.com"
        );
    }

    return (
        <>
            <View align='center' paddingTop={12}>
                <View.Item columns={6}>
                    <Card padding={6}>
                        <View gap={6}>
                            <Text variant='body-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                                nihil! Aspernatur, suscipit id? Ipsum, assumenda dolores rem qui
                                repellat facilis quo consequatur pariatur dolore omnis officiis eum
                                repellendus velit exercitationem.
                            </Text>
                            <Button fullWidth color='primary' onClick={onMessage}>
                                Click me
                            </Button>
                        </View>
                    </Card>
                </View.Item>
            </View>
        </>
    );
}
