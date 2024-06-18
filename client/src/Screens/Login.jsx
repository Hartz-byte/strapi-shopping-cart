import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";
import Loader from "../Common/Loader";
import { useAuthContext } from "../Context/AuthContext";
import { API, getUsers } from "../constant";
import { setToken } from "../helpers";

const Login = () => {
  const navigation = useNavigation();
  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // login function
  const login = async (values) => {
    setIsLoading(true);

    try {
      const data = {
        identifier: values.email,
        password: values.password,
      };

      const response = await axios.post(`${API}/carts`, data, {
        headers: {
          "Content-Type": "application/json",
          // "X-API-Key":
          // "3b315717616399174e1cbd2d61ec2b548b9968d22abd91d733ac903054adaeaf165326d5c142d959492095e0bd20221c1f132d88b9a7cdd81a81b583e258b1686f004628876ae00f1589ff38e32dd4ef741747a9ba7c5665881737c65de81b1cc7fd04f9b2a2f7d77c994fd049f83e36be67610b562724ac885c971dea04bab4",
        },
      });

      if (response.data?.error) {
        throw response.data.error;
      } else {
        console.log(response.data);
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

      {error ? (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      ) : null}

      {/* email input area */}
      <CustomTextInput
        placeholder={"Enter Email Id"}
        icon={require("../Images/mail.png")}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />
      {/* bad email */}
      {badEmail === true && (
        <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
          Please Enter Email Id
        </Text>
      )}

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
      {/* bad password */}
      {badPassword === true && (
        <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
          Please Enter Password
        </Text>
      )}

      {/* login button */}
      <CommonButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          login();
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

      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Login;
