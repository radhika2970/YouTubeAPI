import React from 'react';
import './Header.scss';
import {FaBars} from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import {MdNotifications, MdApps} from 'react-icons/md';


  const Header = () => {
  return (
    <div className='border border-dark header'>
      <FaBars
      className='header_menu' 
      size={26}
      />
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/180px-YouTube_full-color_icon_%282017%29.svg.png"
      alt=''
      className='header_logo'
      />
      <form>
        <input type="text" placeholder='Search' />
        <button type='submit' >
          <AiOutlineSearch size={22}/>
        </button>
      </form>
      <div className='header_icons'>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img 
        src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
        alt=''
        />
      </div>
    </div>
  )
  }

export default Header