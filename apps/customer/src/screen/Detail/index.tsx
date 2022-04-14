import { RNText, Header } from '@nx-app/share-ui';
import React from 'react';
import { View } from 'react-native';

const Detail: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header title='Chi tiết' style={{ backgroundColor: 'cyan', height: 56, justifyContent: 'center', alignItems: 'center' }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <RNText style={{ fontSize: 18 }}>Detail Page</RNText>
            </View>
        </View>
    )
}

export default Detail;