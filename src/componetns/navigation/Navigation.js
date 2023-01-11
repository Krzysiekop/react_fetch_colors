import React from 'react';
import './Navigation.css'

const Navigation = (props) => {
  return (
    <div className="nav">
      <button className="button" onClick={props.back}>
        Back Page
      </button>
      <button className="button" onClick={props.next}>
        Next Page
      </button>
    </div>
  );
};

export default Navigation;
