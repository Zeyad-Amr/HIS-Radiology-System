import React from 'react'
import Button from './Button/Button';
import Dropdown from './DropDown/DropDown';
import UserDetails from './UserDetails/UserDetails';

function Test() {

   function handleClick(event) {
    event.preventDefault();
    alert('Button Clicked');
};

const handleDropdown = (country) => {
    this.setState({country});
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
    <Dropdown
    data={[
        {value: 1, label: 'India'},
        {value: 2, label: 'USA'},
        {value: 3, label: 'UK'},
        {value: 4, label: 'Germany'},
        {value: 5, label: 'Russia'},
        {value: 5, label: 'Italy'},
    ]}
    styleClass='mt-3'
    // value={country}
    placeholder='Select Country'
    onChange={handleDropdown}
    />
    <UserDetails/>
    </React.Fragment>
  )
}

export default Test