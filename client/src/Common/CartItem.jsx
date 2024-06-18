import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CartItem = ({
  item,
  onRemoveItem,
  onAddToWishlist,
  onRemoveFromWishlist,
  isWishlist,
  onAddToCart,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: "95%",
        borderRadius: 20,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginLeft: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ width: "100%" }}>
        {/* image */}
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 120,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />

        {/* item name */}
        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {item.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 10,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          {/* item price */}
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {"₹" + item.price}
          </Text>

          {isWishlist ? (
            // add item to cart button
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 7,
                paddingTop: 7,
              }}
              onPress={() => {
                onAddToCart(item);
              }}
            >
              <Text style={{ color: "#000" }}>Add To Cart</Text>
            </TouchableOpacity>
          ) : (
            // remove item button
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 7,
                paddingTop: 7,
              }}
              onPress={() => {
                onRemoveItem();
              }}
            >
              <Text style={{ color: "#000" }}>Remove Item</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* favorite */}
        {isWishlist ? (
          // red filled heart
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 20,
              elevation: 5,
              position: "absolute",
              top: 10,
              right: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              onRemoveFromWishlist();
            }}
          >
            <Image
              source={require("../Images/redheart.png")}
              style={{ width: 24, height: 24, tintColor: "red" }}
            />
          </TouchableOpacity>
        ) : (
          // empty heart
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 20,
              elevation: 5,
              position: "absolute",
              top: 10,
              right: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              onAddToWishlist(item);
            }}
          >
            <Image
              source={require("../Images/heart.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
