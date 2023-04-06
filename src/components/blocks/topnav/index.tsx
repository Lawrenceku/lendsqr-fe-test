import React from 'react';
import { FaCaretDown, FaSearch } from 'react-icons/fa';
import { TfiBell } from 'react-icons/tfi';
import Logo from '../../../assets/images/logo.svg';
import Avatar from '../../../assets/images/avatar.png';
import { Link } from 'react-router-dom';

type Props = {};

const TopNav = (props: Props) => (
  <div className='fixed top-0 z-30 w-full'>
    <nav className='nav'>
      <div>
        <img src={Logo} alt='logo' />
      </div>
      <form className='search'>
        <input
          type='search'
          className='w-full'
          placeholder='Search for anything'
        />
        <div>
          <FaSearch />
        </div>
      </form>
      <div className='actions'>
        <Link to='/'>Docs</Link>
        <TfiBell size={24} />
        <img src={Avatar} alt='user_avatar' />
        <div className='flex items-center gap-x-1'>
          <h4>Adedeji</h4>
          <FaCaretDown />
        </div>
      </div>
    </nav>
  </div>
);

export default TopNav;
