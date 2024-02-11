import React, { PureComponent } from 'react'
import myImage from '../../images/11640.jpg'
import myImage2 from '../../images/1emq_tyg6_230601.jpg'

class Stories extends PureComponent {




    render() {
        return <>

            <div className='text-center'>
                <h1 className='m-5 fw-bold w-50 text-center mx-auto fa-3x'>STORIES COMPONENT</h1>
                <div className="container">

                    <div className="row m-5 g-5">

                        <div className="col-md-4  h-25">

                            <div className="innerImage position-relative">

                                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded bg-success ">

                                    <i className='fa-solid fa-plus fa-4x text-white'></i>

                                </div>

                                <img className='w-100' src={myImage2} alt="first image" />

                            </div>

                        </div>

                        <div className="col-md-4  h-25">

                            <div className="innerImage position-relative">

                                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded bg-success ">

                                    <i className='fa-solid fa-plus fa-4x text-white'></i>

                                </div>

                                <img className='w-100' src={myImage2} alt="first image" />

                            </div>

                        </div>

                        <div className="col-md-4  h-25">

                            <div className="innerImage position-relative">

                                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded bg-success ">

                                    <i className='fa-solid fa-plus fa-4x text-white'></i>

                                </div>

                                <img className='w-100' src={myImage2} alt="first image" />

                            </div>

                        </div>

                        <div className="col-md-4  h-25">

                            <div className="innerImage position-relative">

                                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded bg-success ">

                                    <i className='fa-solid fa-plus fa-4x text-white'></i>

                                </div>

                                <img className='w-100' src={myImage2} alt="first image" />

                            </div>

                        </div>

                        <div className="col-md-4  h-25">

                            <div className="innerImage position-relative">

                                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded bg-success ">

                                    <i className='fa-solid fa-plus fa-4x text-white'></i>

                                </div>

                                <img className='w-100' src={myImage2} alt="first image" />

                            </div>

                        </div>

                        <div className="col-md-4  h-25">

                            <div className="innerImage position-relative">

                                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded bg-success ">

                                    <i className='fa-solid fa-plus fa-4x text-white'></i>

                                </div>

                                <img className='w-100' src={myImage2} alt="first image" />

                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </>
    }
}

export default Stories