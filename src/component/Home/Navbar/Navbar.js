
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { UserContext } from '../../../App';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {

    
    const [loggedInUser, setLoggedIn] = useContext(UserContext)


    return (

        <nav class="navbar navbar-expand-lg navbar-light sticky bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                   
                    <span className='customize'>CYcle Life</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav navbar-customize navItem">
                        <li>
                            <HashLink to='/home#home'>Home</HashLink>
                        </li>
                        <li>
                            <Link to='/allproduct'>Products</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <HashLink to="/home#footer">About us</HashLink>
                        </li>
                        <li>
                            <Link to='/login'>{loggedInUser.email ? <Link to='/home' className='position' onClick={() => setLoggedIn('')}>Sign Out</Link> : 'Sign In'}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;