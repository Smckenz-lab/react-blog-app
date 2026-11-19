import {Link} from 'react-router'
import { useAuth} from './AuthUser';
import Hero from '../assets/hero.png'

export default function HomePage() {
    const {user} = useAuth();

    return (
        <div className="home-container">
            <div>
                {user && (
                <div className="login-hero">
                    <img src={Hero} alt='Community updates'className="login-img"/>
                </div>   
            )}
            </div>
            <h1 className= "hpage-title">☆*:.｡. Welcome to The Anime Post! .｡.:*☆</h1>
            <p className="hpage-description">Talk about you favorite anime, discover new series, and connect with fellow fans!</p>

            <div className="hpage-buttons">
                <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>
                <Link to="/posts">
                    <button className="post-btn">Post</button>
                </Link>
            </div>
        </div>
    );
}
