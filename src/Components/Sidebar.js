import React,{useState} from 'react';
import '../App.css';
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineReceipt } from "react-icons/md";
import {CgMenuGridO } from "react-icons/cg";
import {BiSolidDownArrow} from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import logo from '../Assets/logo1.png';
import logo2 from '../Assets/logo2.png'
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";






const Sidebar = () => {
    const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const [open1, setOpen1] = useState(false);


  return (
    <div>
      
    
      
      <FaBars className='media-bar'  onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/>
      

      <div className='side' style={{width:isOpen ? "70px" : "250px",}}>

        <section className='sidebar' style={{width:isOpen ? "70px" : "250px", backgroundColor:"#fff"}}>

            <section>
        

                <div className='bar'  >
                    
                    <div className='logo-div' style={{display:isOpen ? "none" : "flex", justifyContent:"center", marginBottom:20}}>
                        <img src={logo} style={{width:70}} onClick={toggle}/>
                    </div>

                    <div className='logo-div' style={{display:isOpen ? "block" : "none"}}>
                        <img src={logo2} onClick={toggle}/>
                    </div>
                    
                
                </div>


            
                
                <NavLink to='/Dashboard' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <MdOutlineDashboard className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

                    </div>
                
                </NavLink>

                <div className='name link' style={{display:isOpen ? "none" : "flex"}}>
                    <div onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}>
                        <MdOutlineReceipt className='icon icon-a'/>
                        
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h4>Overview</h4>
                            <h3 className={`accts ${open ? 'active' : 'inactive'}`}><NavLink to='/all-users' className='link' activeclassName = 'active' style={{textDecoration:'none'}}>User</NavLink></h3>
                            <h3 className={`accts ${open ? 'active' : 'inactive'}`}><NavLink to='/all-vendors' className='link' activeclassName = 'active' style={{textDecoration:'none'}}>Merchant</NavLink></h3>
                        </div>
                        
                        <BiSolidDownArrow className='icons icon-a'/>
                    </div>                     

                </div>

                <NavLink to='/transaction' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <FaClockRotateLeft className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>Transaction History</h4>

                    </div>
                
                </NavLink>

                <NavLink to='/superadmin' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <FaUserTie className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>Super Admin</h4>

                    </div>
                
                </NavLink>


                <NavLink to='/activity' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <MdLibraryBooks className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>Activity Log</h4>

                    </div>
                
                </NavLink>


        
            </section>



            <NavLink to='/' className='link logout' activeclassName = 'active'>
            
                <div className='one'>
                
                    < RiLogoutBoxRLine className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>Log Out</h4>

                </div>
            
            </NavLink>


        </section>
            
    </div>




    {/* small screen */}


    <div className={`side side2 ${open1 ? ' active' : 'inactive'}`}>

        <section className='sidebar'>

            <section>
        

                <div className='bar' >

                

                    <div className='logo-div' style={{display:isOpen ? "none" : "block"}}>
                        <div className='closes'>
                            <IoMdClose onClick={() =>{setOpen1(!open1)}}/>
                        </div>
                        
                        
                        <img src={logo} onClick={toggle}/>
                    </div>

                    <div className='logo-div' style={{display:isOpen ? "block" : "none"}}>
                        <img src={logo2} onClick={toggle}/>
                    </div>
                    
                
                </div>


            
                
                <NavLink to='/Dashboard' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <MdOutlineDashboard className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

                    </div>
                
                </NavLink>

                <div className='name link' style={{display:isOpen ? "none" : "flex"}}>
                    <div onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}>
                        <MdOutlineReceipt className='icon icon-a'/>
                        
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h4>Overview</h4>
                            <h3 className={`accts ${open ? 'active' : 'inactive'}`}><NavLink to='/useroverview' className='link' activeclassName = 'active' style={{textDecoration:'none'}}>User</NavLink></h3>
                            <h3 className={`accts ${open ? 'active' : 'inactive'}`}><NavLink to='/merchantoverview' className='link' activeclassName = 'active' style={{textDecoration:'none'}}>Merchant</NavLink></h3>
                        </div>
                        
                        <BiSolidDownArrow className='icons icon-a'/>
                    </div>                     

                </div>

                <NavLink to='/transaction' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <FaClockRotateLeft className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>Transaction History</h4>

                    </div>
                
                </NavLink>

                <NavLink to='/superadmin' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <FaUserTie className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>Super Admin</h4>

                    </div>
                
                </NavLink>


                <NavLink to='/activity' className='link' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <MdLibraryBooks className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>Activity Log</h4>

                    </div>
                
                </NavLink>


        
            </section>



            <NavLink to='/' className='link logout' activeclassName = 'active'>
            
                <div className='one'>
                
                    < RiLogoutBoxRLine className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>Log Out</h4>

                </div>
            
            </NavLink>


        </section>
            
    </div>
       
       
            
</div>
         
  )
}

export default Sidebar