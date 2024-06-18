import { View, Text, FlatList } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Common/CartItem";
import { addItemToCart, removeFromWishlist } from "../Redux/actions/Actions";

const Wishlist = () => {
  const cartData = useSelector((state) => state.reducers2);

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
                isWishlist={"true"}
                onRemoveFromWishlist={() => {
                  dispatch(removeFromWishlist(index));
                }}
                onAddToCart={(x) => {
                  dispatch(addItemToCart(x));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No item added in Wishlist.</Text>
        </View>
      )}
    </View>
  );
};

export default Wishlist;
