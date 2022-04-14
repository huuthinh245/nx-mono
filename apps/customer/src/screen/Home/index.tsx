import { RNText, Header } from '@nx-app/share-ui';
import React from 'react';
import { Button, View} from 'react-native';
const Home: React.FC = (props: { navigation: any, children: React.ReactNode}) => {
    return (
        <View style={{ flex: 1}}>
            <Header title='Trang chủ' style={{ backgroundColor: 'cyan', height: 56, justifyContent: 'center', alignItems: 'center' }}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <RNText style={{ fontSize: 18}}>Home Page</RNText>
            <Button title='go to detail' onPress={() => props?.navigation?.navigate('Detail')}/>
            </View>
        </View>
    )
}

export default Home;