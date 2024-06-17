import React from 'react';
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const Transaction = () => {
  return (
    <div>
      <section className='dashboard'>
        <Sidebar/>

        <main>

          <Header/>

            <div className="home">
            <div className="home-c">
                    <h2>Transaction History</h2>

                    <table>
                        <tr className='heading' style={{paddingTop:'20px'}}>
                            <th className='sn'>S/N</th>
                            <th>User's Name</th>
                            <th>Merchant's name</th>
                            <th>Time/Date</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>

                        <tr>
                            <td className='sn'>1</td>
                            <td>Zeke Allen</td>
                            <td>Ezekiel Emmanuelaudu</td>
                            <td>22:12 // April 2, 2024</td>
                            <td>20 USDT</td>
                            <td>
                                <Link to='/'>View chat log</Link>
                            </td>
                        </tr>

                        <tr>
                            <td className='sn'>2</td>
                            <td>Joseph Kemi</td>
                            <td>Daniel Agape </td>
                            <td>22:12 // April 2, 2024</td>
                            <td>250 ALGO</td>
                            <td>
                                <Link to='/'>View chat log</Link>
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

export default Transaction