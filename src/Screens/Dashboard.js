import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import Chart from 'react-apexcharts';
import { supabase } from '../configurations/supabase-config';
import { NavLink } from 'react-router-dom';


const Dashboard = () => {

  const [state, setState] = useState({
    options: {
      colors: ['#FEB800'],
      chart: {
        id: 'basic-bar'
      },

      xaxis: {
        categories: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8']
      }
    },
    series: [
      {
        name: "series-1",
        data: [90, 170, 195, 283, 169, 250, 260, 351]
      }
    ]
  })
  let [users, setUsers] = React.useState([])
  let [riders, setRider] = React.useState([])
  let [mealorders, setmealorders] = React.useState([])
  let [dispatchorders, setdispatchorders] = React.useState([])

  React.useEffect(() => {

    supabase
      .from("meal-orders")
      .select("*")
      .then(response => {
        console.log(response)
        setmealorders(response.data)
      })

    supabase
      .from("orders")
      .select("*")
      .then(response => {
        console.log(response)
        setdispatchorders(response.data)
      })

    supabase
      .from("userpublic")
      .select("*")
      .then(response => {
        console.log(response)
        setUsers(response.data)
      })

    supabase
      .from("Rider")
      .select("*")
      .then(response => {
        console.log(response)
        setRider(response.data)
      })
  }, [])

  return (
    <div>
      <section className='dashboard'>
        <Sidebar />

        <main>

          <Header />

          <div className="home">
            <div className="home-c">

              <h2>Welcome back, Ezekiel</h2>

              <div className="cards">

                <div className="card">

                  <div className='first'>
                    <span>Users</span>
                    <select name="" id="">
                      <option value="">All</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>{users.length}</h5>
                    <NavLink to='/all-users'>View all</NavLink>
                  </div>


                </div>


                <div className="card">

                  <div className='first'>
                    <span>Vendors</span>
                    <select name="" id="">
                      <option value="">Today</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>{users.filter(e => e.isVendor == true).length}</h5>
                    <NavLink to='/all-vendors'>View all</NavLink>
                  </div>


                </div>



                <div className="card">

                  <div className='first'>
                    <span>Riders</span>
                    <select name="" id="">
                      <option value="">All</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>{riders.length}</h5>
                    <NavLink to='/all-riders'>View all</NavLink>
                  </div>


                </div>




              </div>

              <div className="cards" style={{ marginTop: 18 }} >
                <div className="card">

                  <div className='first'>
                    <span>Meal orders</span>
                    <select name="" id="">
                      <option value="">All</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>{mealorders.length}</h5>
                    <a href=''>View All Users</a>
                  </div>


                </div>


                <div className="card">

                  <div className='first'>
                    <span>Dispatch orders</span>
                    <select name="" id="">
                      <option value="">Today</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>{dispatchorders.length}</h5>
                    <a href=''>View more</a>
                  </div>


                </div>



                <div className="card">

                  <div className='first'>
                    <span>Revenue</span>
                    <select name="" id="">
                      <option value="">All</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>146</h5>
                    <a href=''>View All Users</a>
                  </div>


                </div>




              </div>



              <div className="graph">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="100%"
                  height='300'



                />
              </div>


            </div>

          </div>

        </main>

      </section>
    </div>
  )
}

export default Dashboard