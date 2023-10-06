// unitsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const estateSlice = createSlice({
  name: "estate",
  initialState: {
    EstateList: [],
    Estate : []

  },
  reducers: {
    setEstateDataReducer: (state, action) => {
      console.log("setEstateDataReducer payload: ", action.payload);
      state.EstateList = action.payload;
    },
    propertyReducer : (state,action)=>{
      console.log("propertyReducer payload: ", action.payload);
      state.Estate = action.payload;
    }
  },
});

export const { setEstateDataReducer ,propertyReducer } = estateSlice.actions;
export default estateSlice.reducer;
