import React from 'react';
import { TextProps, Text } from 'react-native';

type Props = TextProps
const RNText = (props: Props) => {
    return (
        <Text {...props} />
    )
}

export default RNText;