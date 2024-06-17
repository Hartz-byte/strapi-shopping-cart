import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Home from "../Screens/Home";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
