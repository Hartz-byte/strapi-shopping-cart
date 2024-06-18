import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../Context/AuthContext";
import { removeToken } from "../helpers";

const Header = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();

  // handle logout function
  const handleLogout = () => {
    removeToken();
    navigation.navigate("Login", { replace: true });
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
      {user ? (
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            color: "#000",
            marginLeft: 20,
          }}
        >
          {/* Fashion App */}
          {user.username}
        </Text>
      ) : (
        <Text>Fashion App</Text>
      )}

      <TouchableOpacity onPress={handleLogout} style={{ marginRight: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
