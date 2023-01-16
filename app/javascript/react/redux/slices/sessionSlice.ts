import { createSlice } from "@reduxjs/toolkit";
import { readSession, removeSession, saveSession } from "../../helpers/auth";
import { ISession } from "../../interfaces/authInterfaces";

function initialize(): ISession | null {
  const session: ISession | null = readSession();
  return session;
}

export const userSlice = createSlice({
  name: "session",
  initialState: { session: initialize() },
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload;
      saveSession(action.payload);
    },
    deleteSession: (state) => {
      state.session = null;
      removeSession();
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSession, deleteSession } = userSlice.actions;

export default userSlice.reducer;
