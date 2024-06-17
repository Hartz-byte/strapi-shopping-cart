import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../Screens/Splash";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Home from "../Screens/Home";
import MyAddress from "../Screens/MyAddress";
import AddAddressInfo from "../Screens/AddAddressInfo";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* splash screen */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />

        {/* login screen */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />

        {/* signup screen */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />

        {/* home screen */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />

        {/* my address */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyAddress"
          component={MyAddress}
        />

        {/* add address */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddAddressInfo"
          component={AddAddressInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
