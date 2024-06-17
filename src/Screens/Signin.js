import React from 'react'
import img from '../Assets/Mask group (3).png'
import logo from '../Assets/logo1.png'
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const Signin = () => {

  const navigate = useNavigate();

    const saveItem = () => {
        navigate('/dashboard')
      }

  return (
    <div className='s-f'>
      <section className='signin'>

        <div className='signin-l'>
          <img src={img} alt="" />
        </div>

        <div className='signin-r'>
          <img src={logo} alt="" />
          <h3>SmartChange Admin Dashbord</h3>

          <form className='sign'>
            <label htmlFor="email">
              <input type="email" placeholder='Email Address'/>
            </label>

            <label htmlFor="password" className='pass'>
              <input type="password" placeholder='Password'/>
              <FaEyeSlash className='s-i'/>
            </label>

            <div className="rem">
              <span>
                <input type="checkbox" name="" id="" />
                Remember me 
              </span>

              <span className='forgot'>
                Forgot Password
              </span>

            </div>

            <button type="submit" onClick={saveItem}>Log In</button>

          </form>

        </div>

      </section>
    </div>
  )
}

export default Signin