import React from 'react';
import { View, Text, ViewStyle, ViewProps } from 'react-native';

interface Props extends ViewProps {
    title: string
}
const Header = (props: Props) => {
    const { title, style } = props;
    return (
        <View style={style}>
            <Text style={{ fontSize: 18}}>{title}</Text>
        </View>
    )
}

export default Header;