import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light px-3 py-4">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle fw-bold mx-2" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/">Product 1</a></li>
                            <li><a className="dropdown-item" href="/">Product 2</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold mx-2" href="/">Collections</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold mx-2" href="/">Gifts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold mx-2" href="/">Our magazine</a>
                    </li>
                </ul>
                <FontAwesomeIcon classNameName="mx-2 search-icon" icon={faSearch} />
                <button type="button" className="btn btn-light mx-2 rounded-pill px-4">Log In</button>
                <button type="button" className="btn mx-2 gradient-btn rounded-pill text-white px-4">SIGN UP</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;