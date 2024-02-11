import React, { PureComponent } from 'react'

class About extends PureComponent {


    render() {
        return <>

            <div className='text-center '>
                <h1 className='m-5 fw-bold w-50 text-center mx-auto fa-3x'>ABOUT COMPONENT</h1>
                <div className='d-flex justify-content-center'>
                    <p className='m-3 me-5 fs-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='m-3  fs-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>

        </>
    }
}

export default About