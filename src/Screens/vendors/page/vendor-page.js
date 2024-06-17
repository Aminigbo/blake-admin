import React, { useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import Header from '../../../Components/Header';
import Chart from 'react-apexcharts';
import { supabase } from '../../../configurations/supabase-config';
import Table from '../components/table';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import '../style/vendorpage.css';

const Allvendors = () => {

    React.useEffect(() => {

    }, [])

    return (
        <div>
            <section className='dashboard'>
                <Sidebar />

                <main>

                    <Header />

                    <div className="home" style={{
                        backgroundColor: "#fff"
                    }}>
                        <div className="home-c" >

                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                // backgroundColor: "red",
                                height: 270
                            }} >
                                <div style={{
                                    height: 215,
                                    backgroundColor: "#F6F6F6",
                                    flex: 1.3
                                }} ></div>

                                <div style={{
                                    // backgroundColor: "red",
                                    flex: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    // padding: 10
                                }} >
                                    <div style={{
                                        // height: 200,
                                        // backgroundColor: "black",
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between"
                                    }} >
                                        <div style={{
                                            backgroundColor: "#F6F6F6",
                                            height: 45,
                                            width: 200,
                                            padding: "10px 15px",
                                            margin: 10
                                        }} >
                                            <small> Name </small>
                                            <h5>Aminigbo Paul</h5>
                                        </div>
                                        <div style={{
                                            backgroundColor: "#F6F6F6",
                                            height: 45,
                                            width: 200,
                                            padding: "10px 15px",
                                            margin: 10
                                        }} >
                                            <small> Email </small>
                                            <h5>aminigbopaul@gmail.com</h5>
                                        </div>
                                        <div style={{
                                            backgroundColor: "#F6F6F6",
                                            height: 45,
                                            width: 200,
                                            padding: "10px 15px",
                                            margin: 10
                                        }} >
                                            <small> Name </small>
                                            <h5>Aminigbo Paul</h5>
                                        </div>
                                        <div style={{
                                            backgroundColor: "#F6F6F6",
                                            height: 45,
                                            width: 200,
                                            padding: "10px 15px",
                                            margin: 10
                                        }} >
                                            <small> Name </small>
                                            <h5>Aminigbo Paul</h5>
                                        </div>
                                    </div>
                                    <div style={{
                                        height: 200,
                                        // backgroundColor: "grey",
                                    }} >
                                        <div style={{
                                            backgroundColor: "#F6F6F6",
                                            height: 45,
                                            // width: 200,
                                            padding: 5,
                                            margin: 10
                                        }} >
                                            <small> Wallet Balance </small>
                                            <h4>₦70,000</h4>
                                        </div>

                                    </div>
                                </div>


                            </div>

                            {/* <b>Kitchen Profile</b> */}

                            <div style={{
                                // backgroundColor: "red",
                                // flex: 3,
                                // display: "flex",
                                flexDirection: "column",
                                // padding: 10,
                                height: 280
                            }} >
                                <div style={{
                                    // height: 200,
                                    // backgroundColor: "black",
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between"
                                }} >
                                    <div style={{
                                        backgroundColor: "#F6F6F6",
                                        // height: 45,
                                        width: 200,
                                        padding: "10px 15px",
                                        margin: 10,
                                        borderRadius: 6
                                    }} >
                                        <small> Total Orders </small>
                                        <h5>103</h5>
                                    </div>
                                    <div style={{
                                        backgroundColor: "#F6F6F6",
                                        // height: 45,
                                        width: 200,
                                        padding: "10px 15px",
                                        margin: 10,
                                        borderRadius: 6
                                    }} >
                                        <small> Meal Ordered </small>
                                        <h5>19</h5>
                                    </div>
                                    <div style={{
                                        backgroundColor: "#F6F6F6",
                                        // height: 45,
                                        width: 200,
                                        padding: "10px 15px",
                                        margin: 10,
                                        borderRadius: 6
                                    }} >
                                        <small> Amount generated </small>
                                        <h5>₦90,000</h5>
                                    </div>
                                    <div style={{
                                        backgroundColor: "#F6F6F6",
                                        // height: 45,
                                        width: 200,
                                        padding: "10px 15px",
                                        margin: 10,
                                        borderRadius: 6
                                    }} >
                                        <small> Total Reviews </small>
                                        <h5>4</h5>
                                    </div>
                                    <div style={{
                                        backgroundColor: "#F6F6F6",
                                        // height: 45,
                                        width: 200,
                                        padding: "10px 15px",
                                        margin: 10,
                                        borderRadius: 6
                                    }} >
                                        <small> Total Customers </small>
                                        <h5>40</h5>
                                    </div>
                                    <div style={{
                                        backgroundColor: "#F6F6F6",
                                        // height: 45,
                                        width: 200,
                                        padding: "10px 15px",
                                        margin: 10,
                                        borderRadius: 6
                                    }} >
                                        <small> Menu Items </small>
                                        <h5>4</h5>
                                    </div>

                                </div>
                                <div style={{
                                    height: 200,
                                    // backgroundColor: "grey",
                                }} >
                                    <div style={{
                                        backgroundColor: "#F6F6F6",
                                        // height: 45,
                                        // width: 200,
                                        padding: "10px 15px",
                                        margin: 10
                                    }} >
                                        <span> Full name </span>
                                        <h4>Aminigbo Paul</h4>
                                    </div>

                                </div>
                            </div>

                            <b>Action</b>

                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                // backgroundColor: "red",
                                // height: 270
                            }} >
                                <div style={{
                                    // height: 205,
                                    // backgroundColor: "green",
                                    flex: 2,
                                    margin: 10,
                                }} >
                                    <textarea

                                        placeholder="Send a message to this vendor's phone and email"
                                        style={{
                                            width: "90%",
                                            height: 100,
                                            padding: 10
                                        }}
                                    ></textarea>

                                    <button className='button' type="submit" onClick={() => {

                                    }}>Send push notification</button>

                                </div>

                                <div style={{
                                    // height: 215,
                                    // backgroundColor: "green",
                                    flex: 2,
                                    margin: 10,
                                }} >
                                    <textarea
                                        placeholder='Send a push notification to this vendor.'
                                        style={{
                                            width: "90%",
                                            height: 100,
                                            padding: 10
                                        }}
                                    ></textarea>

                                    <button className='button' type="submit" onClick={() => {

                                    }}>Send push notification</button>

                                </div>


                                <div style={{
                                    // backgroundColor: "red",
                                    flex: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    margin: 10,
                                }} >
                                    <div style={{
                                        // height: 200,
                                        // backgroundColor: "black",
                                        // display: "flex",
                                        // flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between"
                                    }} >
                                        {
                                            [1, 1, 1, 2].map(item => {
                                                return <>
                                                    <div style={{
                                                        // backgroundColor: "#F6F6F6", 
                                                        // width: 200,
                                                        // padding: 5,
                                                        // margin: 2,
                                                        flexDirection: "row",
                                                        display: "flex"
                                                    }} >
                                                        <FormGroup>
                                                            <FormControlLabel control={<Switch defaultChecked />} label="Vendor can accept payment" />
                                                        </FormGroup>
                                                    </div>
                                                </>
                                            })
                                        }

                                    </div>

                                </div>

                            </div>

                            <br /><br /><br />
                            <span> Menu Items </span>
                            <Table users={[]} />

                        </div>

                    </div>

                </main>

            </section>
        </div>
    )
}

export default Allvendors