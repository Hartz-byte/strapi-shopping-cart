import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";
import { useAuthContext } from "../Context/AuthContext";
import { API } from "../constant";
import { setToken } from "../helpers";

const Signup = () => {
  const navigation = useNavigation();
  const { setUser } = useAuthContext();

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // validation function
  const validate = () => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    const isPasswordValid = password.length >= 5;

    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return false;
    }

    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!isPasswordValid) {
      setError("Password must be at least 8 characters long.");
      return false;
    }

    return true;
  };

  const SignUp = async () => {
    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const data = {
        name,
        email,
        password,
      };

      const response = await axios.post(`${API}/auth/local/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data?.error) {
        throw response.data.error;
      } else {
        // Set the token and user
        setToken(response.data.jwt);
        setUser(response.data.user);

        navigation.navigate("Home", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
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

        {error ? (
          <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
        ) : null}

        {/* name input area */}
        <CustomTextInput
          placeholder={"Enter Name"}
          value={name}
          onChangeText={(txt) => setName(txt)}
          icon={require("../Images/user.png")}
        />
        {/* bad name */}
        {/* {badName === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Name
          </Text>
        )} */}

        {/* email input area */}
        <CustomTextInput
          placeholder={"Enter Email Id"}
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          icon={require("../Images/mail.png")}
        />
        {/* bad email */}
        {/* {badEmail === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Email
          </Text>
        )} */}

        {/* password input area */}
        <CustomTextInput
          placeholder={"Enter Password"}
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          icon={require("../Images/lock.png")}
          type={"password"}
        />
        {/* bad password */}
        {/* {badPassword === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Password
          </Text>
        )} */}

        {/* signup button */}
        <CommonButton
          title={"Sign Up"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={SignUp}
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
