import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { PREFIX } from '../helpers/API';
import axios from 'axios';
import { LoginResponse } from '../intefaces/auth.interface';

export const JWT_PERSISTENT_STATE = 'userData';

export interface Userstate {
  jwt: string | null;
}

export interface UserPersistantState {
  jwt: string | null;
}

const initialState: Userstate = {
  jwt: loadState<UserPersistantState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
      email: params.email,
      password: params.password,
    });
    return data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        state.jwt = action.payload.access_token;
      },
    );
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
