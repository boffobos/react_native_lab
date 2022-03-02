import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
	userName: string | null;
	loggedInTime: number | null;
	jwt: string | null;
}

interface IUserAction {
	userName: string,
	jwt: string
};

const initialState:IUserState = {
	userName: null,
	loggedInTime: null,
	jwt: null
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
			'userLogin': (state: IUserState, action: PayloadAction<IUserAction>) => {
					state.userName = action.payload.userName;
					state.loggedInTime = Date.now();
					state.jwt = action.payload.jwt;
				},

			 'userLogout': (state: IUserState) => {
					state.userName = null;
					state.loggedInTime = null;
					state.jwt = null;
				}
	}
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;

