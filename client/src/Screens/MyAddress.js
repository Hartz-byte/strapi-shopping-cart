import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "../Redux/actions/Actions";

const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector((state) => state.AddressReducer);
  const dispatch = useDispatch();
  console.log(addressList);

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

        {/* My Address text */}
        <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 50 }}>
          My Address
        </Text>

        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 6,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate("AddAddressInfo");
          }}
        >
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={addressList}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: "100%",
              borderWidth: 2,
              borderColor: "#8e8e8e",
              alignSelf: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ marginLeft: 20 }}>{"City: " + item.city}</Text>
              <Text style={{ marginLeft: 20 }}>
                {"Building: " + item.building}
              </Text>
              <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                {"Pincode: " + item.pincode}
              </Text>
            </View>

            <TouchableOpacity
              style={{ borderWidth: 0.2, padding: 7, marginRight: 20 }}
              onPress={() => {
                dispatch(deleteAddress(index));
              }}
            >
              <Text>Delete Address</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default MyAddress;
