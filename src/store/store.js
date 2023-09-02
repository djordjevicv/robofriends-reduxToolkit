import { configureStore } from '@reduxjs/toolkit';
import searchRobotsReducer from '../features/searchRobots/searchRobotsSlice'; 
import fetchUserReducer from '../features/searchRobots/fetchUsersSlice';

const store = configureStore({
    reducer: {
        fetchUserReducer,
        searchRobotsReducer
    }
});

export default store;