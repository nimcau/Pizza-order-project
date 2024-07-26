import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/user/userSlice";
// import cartReducer from "./features/cart/cartSlice";
import userReducer from "./components/user/userSlice";
import cartReducer from "./components/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
