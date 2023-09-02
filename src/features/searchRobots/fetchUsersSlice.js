import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestUsers } from '../../API Calls/requestUsers';

const initialState = {
    robotsRequestIsPending: false,
    robots: [],
    error: ''
};

export const requestUsersAsyncThunk = createAsyncThunk('user/fetch', requestUsers);

export const fetchUsersSlice = createSlice({
    name: 'userFetch',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestUsersAsyncThunk.pending, (state) => {
                state.robotsRequestIsPending = true;
            })
            .addCase(requestUsersAsyncThunk.fulfilled, (state, action) => {
                state.robots = action.payload;
                state.robotsRequestIsPending = false;
            })
            .addCase(requestUsersAsyncThunk.rejected, (state, action) => {
                state.error = action.payload;
                state.robotsRequestIsPending = false;
            })
    }
});

export default fetchUsersSlice.reducer;