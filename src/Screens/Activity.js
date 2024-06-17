import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import { ImMail4 } from "react-icons/im";


const Activity = () => {


  return (
    <div>
      <section className='dashboard'>
        <Sidebar/>

        <main>

          <Header/>

            <div className="home">
                <div className="home-c activity">
                    <h2>Activity Log</h2>

                    <section>

                        <div className="details">

                            <label htmlFor="firstName">
                                First Name:
                                <span>Ezekiel</span>
                            </label>

                            <label htmlFor="lastName">
                                Last Name:
                                <span>Emmanuel</span>
                            </label>

                            <select name="" id="">
                                <option value="">Select action</option>
                                <option value="">Ban</option>
                                <option value="">Reinstate</option>
                            </select>

                        </div>

                        <span className='sos'>
                            <ImMail4 className='a-i'/>
                            <span>ekonduemmanuelaudu@gmail.com</span>
                        </span>


                        <div className='num'>
                            <p>Number of actions: <span>25</span></p>

                            <p className='count'>(<span>9</span> Banned | <span>7</span> Reinstated | <span>7</span> Approved KYC)</p>
                        </div>
                        
                    </section>

                    <div className="home act">
                    <div className="home-c">
                        <h2>Overview </h2>

                        <table>
                            <tr className='heading' style={{paddingTop:'20px'}}>
                                <th className='sn'>S/N</th>
                                <th>Name</th>
                                <th>Email address</th>
                                <th>Action</th>
                            </tr>

                            <tr>
                                <td className='sn'>1</td>
                                <td>Zeke Allen</td>
                                <td>ekondu.........@gmail.com</td>
                                <td>
                                    <select name="" id="">
                                        <option value="">select action</option>
                                        <option value="">Ban</option>
                                        <option value="">Reinstate</option>
                                    </select>
                                </td>
                            </tr>

                            
                        </table>

                    </div>


                    
                </div>
                    
                </div>
            </div>

          </main>

      </section>

        


    </div>
  )
}

export default Activity