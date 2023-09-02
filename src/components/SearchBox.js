import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchField } from '../features/searchRobots/searchRobotsSlice';

const SearchBox = ({ searchChange }) => {

  const dispatch = useDispatch();

  const changeSearchFieldHandler = (event) => {
    dispatch(changeSearchField(event.target.value));
  }

  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={changeSearchFieldHandler}
      />
    </div>
  );
}

export default SearchBox;