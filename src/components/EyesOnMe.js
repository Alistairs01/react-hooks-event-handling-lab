// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    // create a variable and set the handleFocus function to print out Good
  const handleFocus = () => {
    console.log('Good!');
  };
// create a variable and set the handleBlur function to print out Hey Eyes on me 
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    //set the onFocus and onBlur events to call the functions 
    <button
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
