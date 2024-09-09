import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const List = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='navbar'>
                <div className='hamburger' onClick={toggleMenu}>
                    <FaBars />
                </div>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link className="list-blocks" to={"/"} style={{ color: "#e6007e" }}>Summer End Sale</Link></li>
                    <li><Link className='list-blocks' to={"/new"}>New In</Link></li>
                    <li><Link className='list-blocks' to={"/womenshoes"}>Women Shoes</Link></li>
                    <li><Link className='list-blocks' to={"/womenappearls"}>Women Apparels</Link></li>
                    <li><Link className='list-blocks' to={"/bags"}>Bags</Link></li>
                    <li><Link className='list-blocks' to={"/kids"}>Kids</Link></li>
                    <li><Link className='list-blocks' to={"/acessories"}>Accessories</Link></li>
                    <li><Link className='list-blocks' to={"/fragrances"}>Fragrances</Link></li>
                </ul>
                <ul className='list'>
                    <li><Link className="list-blocks" to={"/"} style={{ color: "#e6007e" }}>Summer End Sale</Link></li>
                    <li><Link className='list-blocks' to={"/new"}>New In</Link></li>
                    <li><Link className='list-blocks' to={"/womenshoes"}>Women Shoes</Link></li>
                    <li><Link className='list-blocks' to={"/womenappearls"}>Women Apparels</Link></li>
                    <li><Link className='list-blocks' to={"/bags"}>Bags</Link></li>
                    <li><Link className='list-blocks' to={"/kids"}>Kids</Link></li>
                    <li><Link className='list-blocks' to={"/acessories"}>Accessories</Link></li>
                    <li><Link className='list-blocks' to={"/fragrances"}>Fragrances</Link></li>
                </ul>
            </div>
        </>
    );
};

export default List;
