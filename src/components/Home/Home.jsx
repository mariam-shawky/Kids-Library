import React, { PureComponent } from 'react'
import myImage from '../../images/11640.png'

class Home extends PureComponent {


    render() {
        return <>


            <h1 className='fw-bold my-5 text-center fa-4x '>Welcome to Kids Library</h1>
            <figure className='text-center mt-5 pt-5 '>
                <img className='w-50' src={myImage} alt="reading kids" />
            </figure>


        </>
    }
}

export default Home