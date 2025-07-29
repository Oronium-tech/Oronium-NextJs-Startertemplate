import { configureStore } from "@reduxjs/toolkit"
import commonDataReducer from "../slices/commonDataSlice"
const store = configureStore({
  reducer: {
    commonData: commonDataReducer,
  },
})

export default store
