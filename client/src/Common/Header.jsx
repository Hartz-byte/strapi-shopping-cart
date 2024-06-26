import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  // handle logout function
  const handleLogout = async () => {
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        width: "100%",
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 0.2,
        borderBottomColor: "#8e8e8e",
        backgroundColor: "#fff",
        paddingTop: 20,
      }}
    >
      <Text style={{ marginLeft: 20 }}>Fashion App</Text>

      <TouchableOpacity onPress={handleLogout} style={{ marginRight: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
