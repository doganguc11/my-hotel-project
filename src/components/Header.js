import React from 'react';
import resource from '../utils/resource';
import '../styles/styles.scss';

function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={`${process.env.PUBLIC_URL} ${resource.header.imageUrl}`} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-nav-collapse collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto"> 
                        {resource.header.menus.map((menu) => (
                                <li className="nav-item">
                                    <a className="nav-link" href={menu.url}> {menu.name} </a>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
