import { Button, View, ActionBar } from "reshaped";
import { centerX, centerY, centerXY, sidebar, menubar } from "@/icon/icon";

const Header = () => {
    return (
        <ActionBar position='top' elevated>
            <View direction='row'>
                <View.Item grow>
                    <View direction='row' gap={3}>
                        <Button icon={menubar} color='neutral' />
                        <Button icon={sidebar} color='neutral' />
                        <Button icon={centerXY} color='neutral' />
                        <Button icon={centerX} color='neutral' />
                        <Button icon={centerY} color='neutral' />
                    </View>
                </View.Item>
                <Button color='primary'>Export</Button>
            </View>
        </ActionBar>
    );
};

export default Header;
