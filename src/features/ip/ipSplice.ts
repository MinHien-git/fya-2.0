import { createSlice } from "@reduxjs/toolkit";

export const ipSlice = createSlice({
  name: "ip",
  initialState: {
    ipAddress: "",
  },
  reducers: {
    setIp: (state, action) => {
      state.ipAddress = action.payload;
    },
  },
});

export const { setIp } = ipSlice.actions;

export default ipSlice.reducer;
