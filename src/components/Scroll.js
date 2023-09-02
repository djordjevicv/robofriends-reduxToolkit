import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '380px' }}
      className='center mv3 shadow-1 w-90 pv3'>
      {props.children}
    </div>
  );
};

export default Scroll;