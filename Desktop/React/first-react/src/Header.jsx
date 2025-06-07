import markPhoto from './assets/mark.png'

export default function Header() {
  return (
    <header className="heading">
      <img className="img" src={markPhoto} alt="invincible"/>
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}