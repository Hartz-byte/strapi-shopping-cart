import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    retrievedName = await AsyncStorage.getItem("NAME");
    setName(retrievedName);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* profile text and settings button */}
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        {/* profile text */}
        <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 15 }}>
          Profile
        </Text>

        {/* settings button */}
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../Images/setting.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {/* profile icon */}
      <Image
        source={require("../Images/profile.png")}
        style={{ width: 80, height: 80, alignSelf: "center", marginTop: 30 }}
      />

      {/* user's name */}
      <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 18 }}>
        {name}
      </Text>

      {/* My Address */}
      <TouchableOpacity
        style={{
          width: "90%",
          alignSelf: "center",
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: "8e8e8e",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("MyAddress");
        }}
      >
        <Text>My Address</Text>
      </TouchableOpacity>

      {/* My Orders */}
      <TouchableOpacity
        style={{
          width: "90%",
          alignSelf: "center",
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 2,
          borderBottomColor: "8e8e8e",
          justifyContent: "center",
        }}
      >
        <Text>My Orders</Text>
      </TouchableOpacity>

      {/* Offers */}
      <TouchableOpacity
        style={{
          width: "90%",
          alignSelf: "center",
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 2,
          borderBottomColor: "8e8e8e",
          justifyContent: "center",
        }}
      >
        <Text>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
