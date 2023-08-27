import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  isPlayerOpen: boolean;
}
const initialState: InitialState = {
  isPlayerOpen: false,
};
export const cartSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setIsPlayerOpen: (state) => {
      state.isPlayerOpen = !state.isPlayerOpen;
    },
  },
});
export const { setIsPlayerOpen } = cartSlice.actions;
export default cartSlice.reducer;
