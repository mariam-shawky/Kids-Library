import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends PureComponent {

    render() {
        return <>

            <nav class="navbar navbar-expand-lg bg-danger text-white-50">
                <div class="container-fluid">
                    <Link class="navbar-brand ps-4 fa-2x fw-bold" to="/">
                        
                        <i className='fa-solid fa-home'></i>
                        
                        Kids Library</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse px-4 py-3" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link fw-bold fa-lg  active" aria-current="page" to="/about">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold fa-lg " to="/stories">STORIES</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold fa-lg " to="/contact">CONTACT</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    }
}

export default Navbar