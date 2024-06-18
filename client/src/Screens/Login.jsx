import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const baseUrl = "http://192.168.29.24:1337/api/register-users";
      const queryParams = `?email=${email}&password=${password}`;
      const url = baseUrl + queryParams;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data && data.data && data.data.length > 0) {
        for (let i = 0; i < data.data.length; i++) {
          const user = data.data[i];
          const userId = user.id;
          const email2 = user.attributes.email;
          const fullname = user.attributes.fullname;
          const password2 = user.attributes.password;
          const info = user.attributes;

          if (email == email2 && password == password2) {
            const keyValues = [
              ["userId", userId.toString()],
              ["email", email2.toString()],
              ["fullname", fullname.toString()],
            ];

            await AsyncStorage.multiSet(keyValues);
            navigation.navigate("Home");
          }
        }
      } else {
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* logo */}
      <Image
        source={require("../Images/playstore.png")}
        style={{
          width: 80,
          height: 80,
          alignSelf: "center",
          borderRadius: 50,
          marginTop: 150,
        }}
      />

      {/* login text */}
      <Text
        style={{
          marginTop: 50,
          alignSelf: "center",
          fontSize: 24,
          fontWeight: "600",
        }}
      >
        Login
      </Text>

      {/* email input area */}
      <CustomTextInput
        placeholder={"Enter Email Id"}
        icon={require("../Images/mail.png")}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />

      {/* password input area */}
      <CustomTextInput
        placeholder={"Enter Password"}
        icon={require("../Images/lock.png")}
        type={"password"}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />

      {/* login button */}
      <CommonButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          handleLogin();
        }}
      />

      {/* register text */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          alignSelf: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Create New Account?
      </Text>
    </View>
  );
};

export default Login;
