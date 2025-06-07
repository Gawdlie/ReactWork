import ReactLogo from './assets/react.svg';

export default function Header() {
    return(
        <>
            <div className="header">
                <img className="globe" src={ReactLogo} alt="react logo" />
                <header className="heading">my travel journal.</header>
            </div>
        </>
    );
}