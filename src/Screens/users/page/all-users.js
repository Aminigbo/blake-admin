import React, { useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import Header from '../../../Components/Header'; 
import { supabase } from '../../../configurations/supabase-config'; 
import UserTable from '../components/table';


const AllUsers = () => {

 
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
 
              <UserTable  users={users} />


            </div>

          </div>

        </main>

      </section>
    </div>
  )
}

export default AllUsers