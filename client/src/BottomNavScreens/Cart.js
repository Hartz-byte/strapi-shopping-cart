import { View, FlatList, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Common/CartItem";
import { addToWishlist, removeFromCart } from "../Redux/actions/Actions";
import CommonButton from "../Common/CommonButton";

const Cart = () => {
  const cartData = useSelector((state) => state.reducers);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 50, marginBottom: 80 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
                onAddToWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No item added in cart.</Text>
        </View>
      )}

      {cartData.length > 0 ? (
        <View style={{ marginBottom: 0 }}>
          <CommonButton
            bgColor={"green"}
            textColor={"#fff"}
            title={"Checkout"}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
