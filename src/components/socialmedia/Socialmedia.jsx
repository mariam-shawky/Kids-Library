import React, { PureComponent } from 'react'

class Socialmedia extends PureComponent {



    render() {
        return <>


            <div className='d-flex justify-content-center align-items-center'>
                <div className='icon d-flex justify-content-center align-items-center'><i className='fa-brands fa-facebook '></i></div>
                <div className='icon d-flex justify-content-center align-items-center'><i className='fa-brands fa-twitter '></i></div>
                <div className='icon d-flex justify-content-center align-items-center'><i className='fa-brands fa-instagram '></i></div>
                <div className='icon d-flex justify-content-center align-items-center'><i className='fa-brands fa-youtube '></i></div>
            </div>

        </>

    }
}

export default Socialmedia