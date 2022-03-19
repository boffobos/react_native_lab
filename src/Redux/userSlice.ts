import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
	email: string | null;
	loggedInTime: number | null;
	jwt: string | null;
	userName: string | null;
	dob: string | null;
	avatar: string;
}

interface IUserAction {
	email: string;
	jwt: string;
	userName: string;
	dob: string;
	avatar: string;
};

interface IUserUpdate {
	userName?: string | null;
	dob?: string | null;
	avatar?: string | null;
}

const initialState:IUserState = {
	email: null,
	loggedInTime: null,
	jwt: null,
	userName: null,
	dob: null,
	avatar: '',
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
			'userLogin': (state: IUserState, action: PayloadAction<IUserAction>) => {
				state.email = action.payload.email
				state.loggedInTime = Date.now();
				state.jwt = action.payload.jwt;
				state.userName = action.payload.userName;
				state.dob = action.payload.dob;
				state.avatar= action.payload.avatar;
				},

			 'userLogout': (state: IUserState) => {
					state.email = null;
					state.loggedInTime = null;
					state.jwt = null;
					state.userName = null;
					state.dob = null;
				},

				'userUpdate': (state: IUserState, action: PayloadAction<IUserUpdate>) => {
					if (action.payload.userName) state.userName = action.payload.userName;
					if (action.payload.dob) state.dob = action.payload.dob;
					if (action.payload.avatar) state.avatar = action.payload.avatar;
				}
	}
});

export const { userLogin, userLogout, userUpdate } = userSlice.actions;
export default userSlice.reducer;

