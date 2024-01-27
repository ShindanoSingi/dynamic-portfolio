import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userAbout: null,
        userName: null,
        userFirstName: null,
        userLastName: null,
        show: false,
        experiences: null,
    },
    reducers: {
        SetUser: (state,action) => {
            state.user = action.payload;
        },
        SetUserAbout: (state,action) => {
            state.userAbout = action.payload;
        },
        SetUserName: (state,action) => {
            state.userName = action.payload;
        },
        SetUserFirstName: (state,action) => {
            state.userFirstName = action.payload;
        },
        SetUserLastName: (state,action) => {
            state.userLastName = action.payload;
        },
        SetShow: (state,action) => {
            state.show = action.payload;
        },
        SetExperiences: (state,action) => {
            state.experiences = action.payload;
        },
    }
});

export const {SetUser, SetUserAbout, SetUserName, SetUserFirstName, SetUserLastName, SetShow, SetExperiences} = userSlice.actions;
export default userSlice.reducer;