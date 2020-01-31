import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    <ul>
        <li>
            <Link to="/"></Link>
        </li>
        <li>
            <Link to="/shoppingcart"></Link>
        </li>
        <li>
            <Link to="/login"></Link>
        </li>
    </ul>
}

export default Header;