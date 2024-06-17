import { View, Text, Image, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({
  value,
  placeholder,
  onChangeText,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View
      style={{
        alignSelf: "center",
        width: "85%",
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Image source={icon} style={{ width: 25, height: 25 }} />

      <TextInput
        placeholder={placeholder}
        secureTextEntry={type == "password" ? true : false}
        keyboardType={keyboardType ? keyboardType : "default"}
        value={value}
        onChangeText={(txt) => {
          onChangeText(txt);
        }}
        style={{ marginLeft: 10 }}
      />
    </View>
  );
};

export default CustomTextInput;
