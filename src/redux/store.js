import contactsReducer from "./contacts/contactsReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { tasks: contactsReducer },
});

export default store;
