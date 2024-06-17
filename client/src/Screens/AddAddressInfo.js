import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../Redux/actions/Actions";

// let addressList = [];

const AddAddressInfo = () => {
  const navigation = useNavigation();

  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("");
  const [pin, setPin] = useState("");

  const dispatch = useDispatch();

  const pressHandle = () => {
    if (city !== "" && building !== "" && pin !== "") {
      dispatch(addAddress({ city: city, building: building, pincode: pin }));
      navigation.goBack();
    }
  };

  return (
    <View style={{ flex: 1 }}>
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
        <TouchableOpacity
          style={{
            marginLeft: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 6,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../Images/back.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {/* city name */}
      <CustomTextInput
        placeholder={"Enter City Name"}
        value={city}
        onChangeText={(txt) => setCity(txt)}
        icon={require("../Images/city.png")}
      />

      {/* building name */}
      <CustomTextInput
        placeholder={"Enter Building Name"}
        value={building}
        onChangeText={(txt) => setBuilding(txt)}
        icon={require("../Images/building.png")}
      />

      {/* pincode */}
      <CustomTextInput
        placeholder={"Enter Pincode"}
        value={pin}
        keyboardType={"number-pad"}
        onChangeText={(txt) => setPin(txt)}
        icon={require("../Images/pincode.png")}
      />

      {/* save button */}
      <CommonButton
        title={"Save Address"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          // if (city !== "" && building !== "" && pin !== "") {
          //   dispatch(
          //     AddAddressInfo({ city: city, building: building, pincode: pin })
          //   );
          //   navigation.goBack();
          // }
          pressHandle();
        }}
      />
    </View>
  );
};

export default AddAddressInfo;
