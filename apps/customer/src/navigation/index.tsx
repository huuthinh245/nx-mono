import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
export type NavigatorParamList = {
  Home: undefined;
  Detail: undefined;
};
const Stack = createStackNavigator<NavigatorParamList>();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"

      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Detail" component={Detail} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
