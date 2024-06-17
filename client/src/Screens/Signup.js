import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // validation function
  const signup = () => {
    setIsLoading(true);

    let isValid = true;

    if (name.trim() === "") {
      isValid = false;
      setBadName(true);
    } else {
      setBadName(false);
    }

    if (email.trim() === "") {
      isValid = false;
      setBadEmail(true);
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      isValid = false;
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }

    if (mobile.length !== 10) {
      isValid = false;
      setBadMobile(true);
    } else {
      setBadMobile(false);
    }

    if (password.trim() === "") {
      isValid = false;
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }

    if (confirmPassword.trim() === "") {
      isValid = false;
      setBadConfirmPassword(true);
    } else if (confirmPassword !== password) {
      isValid = false;
      setBadConfirmPassword(true);
    } else {
      setBadConfirmPassword(false);
    }

    if (isValid) {
      saveData();
    } else {
      setIsLoading(false);
    }
  };

  // async storage function
  const saveData = async () => {
    try {
      await AsyncStorage.setItem("NAME", name);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("Mobile", mobile);
      await AsyncStorage.setItem("PASSWORD", password);

      navigation.goBack();

      console.log("Successfully saved");
    } catch (error) {
      console.error("Error saving data:", error);
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

        {/* name input area */}
        <CustomTextInput
          placeholder={"Enter Name"}
          value={name}
          onChangeText={(txt) => setName(txt)}
          icon={require("../Images/user.png")}
        />
        {/* bad name */}
        {badName === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Name
          </Text>
        )}

        {/* email input area */}
        <CustomTextInput
          placeholder={"Enter Email Id"}
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          icon={require("../Images/mail.png")}
        />
        {/* bad email */}
        {badEmail === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Email
          </Text>
        )}

        {/* phone input area */}
        <CustomTextInput
          placeholder={"Enter Mobile"}
          value={mobile}
          onChangeText={(txt) => setMobile(txt)}
          keyboardType={"number-pad"}
          icon={require("../Images/phone.png")}
        />
        {/* bad mobile */}
        {badMobile === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Mobile (10 digits)
          </Text>
        )}

        {/* password input area */}
        <CustomTextInput
          placeholder={"Enter Password"}
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          icon={require("../Images/lock.png")}
          type={"password"}
        />
        {/* bad password */}
        {badPassword === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Password
          </Text>
        )}

        {/* confirm password input area */}
        <CustomTextInput
          placeholder={"Confirm Password"}
          value={confirmPassword}
          onChangeText={(txt) => setConfirmPassword(txt)}
          icon={require("../Images/lock.png")}
          type={"password"}
        />
        {/* bad confirm password */}
        {badConfirmPassword === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Password not matched!
          </Text>
        )}

        {/* signup button */}
        <CommonButton
          title={"Sign Up"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => {
            signup();
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
