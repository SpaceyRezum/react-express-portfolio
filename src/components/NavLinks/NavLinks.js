import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './NavLinks.css';

const NavLinks = (props) => (
    <div className={styles.NavLinkContainer}>
        {props.links.map( (navLink, index) => <Link key={`nav-link-${index}`} to={navLink.url}>{navLink.text}</Link>)}
    </div>
);

export default CSSModules(NavLinks);