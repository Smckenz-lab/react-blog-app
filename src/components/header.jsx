import React, {useContext} from 'react';
import {Link} from 'react-router'
import { ThemeContext } from '../Pages/Theme';
import logo from '../assets/Logo.png';
import darkLogo from '../assets/darkLogo.png';

//Added Theme and updated nav//
export default function Header() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    {/*Updated logo to hopefully work with theme toggle*/}

    return (
        <header className="blog-header">
            <div className="nav-container">
                <div className="Img">
                    <img src={theme == 'dark' ? darkLogo : logo} 
                    alt="page logo"
                    className="logo"
                    />
                </div>

                {/*Updated the nav bar*/}
                <nav>
                    <ul className="nav">
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/post/1">Post</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <button onClick={toggleTheme} className="theme-toggle"> {theme === 'light' ? '🌘Dark': '☀️Light'}</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="sub-header">
            <h1>Best Animes To Watch Before You Pull The Plug</h1>
            <p>Anime has been a beloved form of entertainment for decades, captivating audiences with amazing storytelling and stunning animations!</p>
            </div>
        </header>
    );
}