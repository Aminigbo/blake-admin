import React from 'react';
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import { IoIosArrowForward } from "react-icons/io";


const OverviewM = () => {
  return (
    <div>
      <section className='dashboard'>
        <Sidebar/>

        <main>

          <Header/>

            <div className="home">
            <div className="home-c">
                    <h2>Overview <IoIosArrowForward className='arr'/> <span>User</span></h2>

                    <table>
                        <tr className='heading' style={{paddingTop:'20px'}}>
                            <th className='sn'>S/N</th>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>Email address</th>
                            <th>Transaction Volume</th>
                            <th>Action</th>
                        </tr>

                        <tr>
                            <td className='sn'>1</td>
                            <td>Zeke Allen</td>
                            <td>+2347038570548</td>
                            <td>ekondu.........@gmail.com</td>
                            <td>--</td>
                            <td>
                                <select name="" id="">
                                    <option value="">select action</option>
                                    <option value="">Ban</option>
                                    <option value="">Reinstate</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className='sn'>2</td>
                            <td>Zeke Allen</td>
                            <td>+2347038570548</td>
                            <td>ekondu.........@gmail.com</td>
                            <td>--</td>
                            <td>
                                <select name="" id="">
                                    <option value="">select action</option>
                                    <option value="">Confirm</option>
                                    <option value="">Delete</option>
                                </select>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>

          </main>

      </section>
    </div>
  )
}

export default OverviewM