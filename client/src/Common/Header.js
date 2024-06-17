import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 0.2,
        borderBottomColor: "#8e8e8e",
        backgroundColor: "#fff",
        paddingTop: 20,
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          fontSize: 20,
          color: "#000",
        }}
      >
        Fashion App
      </Text>
    </View>
  );
};

export default Header;
