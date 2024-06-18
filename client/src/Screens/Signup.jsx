import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";

const Signup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleRegister = async () => {
    try {
      // Define the registration data
      const registrationData = {
        fullname: fullName,
        email: email,
        password: password,
        city: country,
        state: state,
      };

      // Send a POST request to the registration endpoint
      const response = await fetch(
        "http://192.168.29.24:1337/api/register-users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: registrationData }),
        }
      );
      console.log(response);
      if (response.ok) {
        navigation.navigate("Login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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

        {/* signup text */}
        <Text
          style={{
            marginTop: 50,
            alignSelf: "center",
            fontSize: 24,
            fontWeight: "600",
          }}
        >
          Sign Up
        </Text>

        {/* email input area */}
        <CustomTextInput
          placeholder={"Enter Email Id"}
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          icon={require("../Images/mail.png")}
        />

        {/* name input area */}
        <CustomTextInput
          placeholder={"Enter Name"}
          value={fullName}
          onChangeText={(txt) => setFullName(txt)}
          icon={require("../Images/user.png")}
        />

        {/* password input area */}
        <CustomTextInput
          placeholder={"Enter Password"}
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          icon={require("../Images/lock.png")}
          type={"password"}
        />

        {/* country input area */}
        <CustomTextInput
          placeholder={"Enter Country"}
          value={country}
          onChangeText={(txt) => setCountry(txt)}
          icon={require("../Images/user.png")}
        />

        {/* state input area */}
        <CustomTextInput
          placeholder={"Enter State"}
          value={state}
          onChangeText={(txt) => setState(txt)}
          icon={require("../Images/user.png")}
        />

        {/* signup button */}
        <CommonButton
          title={"Sign Up"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={handleRegister}
        />

        {/* register text */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Already Have An Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
