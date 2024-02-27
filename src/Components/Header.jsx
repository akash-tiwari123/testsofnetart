import React from 'react';
import logo from './asserts/logo.png';

const Header = () => {
  return (
    <div className='flex items-center justify-center'>
      <img className='w-full max-w-xs' src={logo} alt="logo" />
    </div>
  );
}

export default Header;
