import React, { PureComponent } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from './../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

class Layout extends PureComponent {


    render() {
        return <>

            <Navbar />

            <div className="container">

                <div className="row">

                    <div className="col-md-2">

                        <Sidebar />

                    </div>
                    <div className="col-md-10">

                        <Outlet />

                    </div>

                </div>

            </div>

            <Footer />


        </>
    }
}

export default Layout