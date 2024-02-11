import React, { PureComponent } from 'react'
import Socialmedia from '../socialmedia/Socialmedia'

class Footer extends PureComponent {


    render() {
        return <>

            <footer className='bg-success px-3 py-5 my-5'>

                <div className='d-flex justify-content-between px-5'>
                    <div className='w-25 location'>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive </p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className='w-25 socialMedia text-center'>
                        <h3 >AROUND THE WEB</h3>
                        
                        <Socialmedia />

                    </div>
                    <div className='w-25 about'>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </footer>

        </>
    }
}

export default Footer