import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  authLoading: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  authLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authLoading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.authLoading = false;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.authLoading = action.payload;
    },
  },
});

export const { setUser, clearUser, setAuthLoading } = authSlice.actions;

export default authSlice.reducer;
