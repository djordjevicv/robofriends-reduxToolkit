import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsersAsyncThunk } from '../features/searchRobots/fetchUsersSlice';
import Card from './Card';


const CardList = () => {

  const dispatch = useDispatch();
  
  const searchField = useSelector((state) => state.searchRobotsReducer.searchField);

  useEffect(() => { dispatch(requestUsersAsyncThunk()) }, []);

  const robots = useSelector((state) => state.fetchUserReducer.robots);
  const robotsRequestIsPending = useSelector((state) => state.fetchUserReducer.robotsRequestIsPending);

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return !robotsRequestIsPending ? (
    <div>
      {
        filteredRobots.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </div>
  )
    : (
      <h1 className='f3'>Loading</h1>
  ) 
}

export default CardList;