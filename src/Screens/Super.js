import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import Modal from "react-modal";
import congrat from '../Assets/congrat.png'

const Super = () => {

    // Modal SignUp MODAL

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };

    

  return (
    <div>
    <section className='dashboard'>
      <Sidebar/>

      <main>

        <Header/>

          <div className="home">
          <div className="home-c">

                  <table>
                      <tr className='heading' style={{paddingTop:'20px'}}>
                          <th className='sn'>S/N</th>
                          <th>Sub admin</th>
                          <th>Phone number</th>
                          <th>Email address</th>
                          <th>Action</th>
                      </tr>

                      <tr>
                          <td className='sn'>1</td>
                          <td>Zeke Allen</td>
                          <td>+2347038570548</td>
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


                  <div className='create'>
                    <button onClick={() => {setIsModalOpen(true)}}>Create Admin</button>
                  </div>

              </div>
          </div>

        </main>

    </section>

    {/* FIRST MODAL */}

    <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <h2>Input Details</h2>

                <form className='form'>

                  <input type="text" placeholder='First Name' />
                  <input type="text" placeholder='Last Name' />
                  <input type="email" placeholder='Email Address'/>
                  <input type="password" placeholder='Password'/>
                  <button type="button"  onClick={() => {
                    setIsModalOpen1(true)
                    setIsModalOpen(false)
                  
                  }}
                    
                    
                    >Create Admin</button>
                  
                
                </form>
                

              </div>

            </div>
            
        </Modal>


        {/* SECOND MODAL */}

        <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                
                <div className='congrat'>
                  <img src={congrat} alt="" />
                  <h4>Congratulations</h4>
                  <h4>Ifeoluwa Micheal has been successfully made an admin</h4>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>Close</button>
                </div>
                

              </div>

            </div>
            
        </Modal>



  </div>
  )
}

export default Super