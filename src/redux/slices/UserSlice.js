import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {},
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const {
  getAllUsers,
  setAllUsers,
} = userSlice.actions;
export default userSlice.reducer;
