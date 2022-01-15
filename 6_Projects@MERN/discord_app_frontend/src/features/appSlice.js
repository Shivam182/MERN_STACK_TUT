import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelID: null,
    channelName: null,
  },

  reducers: {
    setchannelID: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setchannelID, logout } = appSlice.actions;

export const selectChannelID = (state) => state.app.channelID;

export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
