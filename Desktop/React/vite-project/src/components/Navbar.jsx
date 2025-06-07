import reactImage from '../assets/react.svg';

export default function Navbar() {
    return(
        <header>
            <nav className="navbar">
                <img src={reactImage} alt="react-img" />
                <p className="nav-logo">ReactFacts</p>
            </nav>
        </header>
    );
}