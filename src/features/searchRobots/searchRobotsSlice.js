import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchField: ''
}

export const searchRobotsSlice = createSlice({
    name: 'searchRobots',
    initialState,
    reducers: {
        changeSearchField: (state, action) => {
            state.searchField = action.payload;
        }
    }
});

export const { changeSearchField } = searchRobotsSlice.actions;
export default searchRobotsSlice.reducer;