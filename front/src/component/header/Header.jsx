import title from "../../image/Harry-Potter-Logo.png"
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={ title } alt="Harry Potter Title" className='hp-title' />
    </header>
  );
}

export default Header;