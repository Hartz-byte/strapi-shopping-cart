import { ADD_ADDRESS, DELETE_ADDRESS } from "../ActionTypes";

const AddressReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];

    case DELETE_ADDRESS:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray;

    default:
      return state;
  }
};

export default AddressReducer;
