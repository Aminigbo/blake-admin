import React from 'react';
import { CiSearch } from "react-icons/ci";
import dp from '../Assets/profile.png';
import { FaBell } from "react-icons/fa";



const Header = () => {
  return (
    <div className='header'>

        <div className='h-l'>
            <input type="search" name="" id="" placeholder='Search anything here'/>
            <CiSearch className='s-i'/>
        </div>

        <div className='h-r'>
            <FaBell className='notify'/>
            <img src={dp} alt="" />
            <div>
                <h4>Ezekiel</h4>
                <p>Admin</p>
            </div>
        </div>

    </div>
  )
}

export default Header