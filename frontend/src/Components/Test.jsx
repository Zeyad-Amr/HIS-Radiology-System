import React from 'react'
import Button from './Button/Button';

function Test() {

   function handleClick(event) {
    event.preventDefault();
    alert('Button Clicked');
};

  return (
      <React.Fragment>
    <Button
    onClick={handleClick}
    value='Click me!'
    />
    <Button
    onClick={handleClick}
    value='Akwa Mix'
    />
    </React.Fragment>
  )
}

export default Test