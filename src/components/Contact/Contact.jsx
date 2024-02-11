import React, { PureComponent } from 'react'

class Contact extends PureComponent {
    

    render() {
        return <>
        
        <div className='text-center'>
        <h1 className='m-5 fw-bold w-50 text-center mx-auto fa-3x'>CONTACT COMPONENT</h1>
        <input type="text" placeholder='User Name' className='form-control p-2 m-4 w-75 border-bottom border-top-0 border-start-0' />
        <input type="number" placeholder='User Age' className='form-control p-2 m-4 w-75 border-bottom border-top-0 border-start-0' />
        <input type="email" placeholder='User Email' className='form-control p-2 m-4 w-75 border-bottom border-top-0 border-start-0' />
        <input type="text" placeholder='User Password' className='form-control p-2 m-4 w-75 border-bottom border-top-0 border-start-0' />
        <button className='btn btn-outline-dark btn-lg fw-bold'>SUBMIT</button>
        </div>
        
        
        </>
    }
}

export default Contact