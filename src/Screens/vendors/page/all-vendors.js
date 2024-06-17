import React, { useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import Header from '../../../Components/Header';
import Chart from 'react-apexcharts';
import { supabase } from '../../../configurations/supabase-config';
import Table from '../components/table';


const Allvendors = () => {

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
 
              <Table  users={users} />


            </div>

          </div>

        </main>

      </section>
    </div>
  )
}

export default Allvendors