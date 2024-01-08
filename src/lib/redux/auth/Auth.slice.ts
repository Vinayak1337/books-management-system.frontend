import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	user: {
		id: string;
		email: string;
		name: string;
		password: string;
	};
	token: string;
}

const initialState: AuthState = {
	user: {
		id: '',
		email: '',
		name: '',
		password: ''
	},
	token: ''
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<Partial<AuthState['user']>>) => {
			state.user = { ...state.user, ...action.payload };
		},
		loginUserStart: (
			_,
			__: PayloadAction<{ email: string; password: string }>
		) => {},
		loginUserSuccess: (
			state,
			action: PayloadAction<{
				token: string;
				userId: string;
			}>
		) => {
			state.token = action.payload.token;
			state.user.id = action.payload.userId;
		},
		registerUserStart: (
			_,
			__: PayloadAction<Omit<AuthState['user'], 'id'>>
		) => {},
		registerUserSuccess: (
			state,
			action: PayloadAction<{
				token: string;
				userId: string;
			}>
		) => {
			state.token = action.payload.token;
			state.user.id = action.payload.userId;
		},
		logoutUser: () => initialState
	}
});

export const {
	updateUser,
	loginUserStart,
	loginUserSuccess,
	registerUserStart,
	registerUserSuccess,
	logoutUser
} = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
