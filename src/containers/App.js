import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {

  return (
    <div className='tc'>
      <h1 className='f2 f1-ns'>RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <CardList />
      </Scroll>
    </div>
  );
  
}

export default App;