import './Header.css';
import title from "../../image/Harry-Potter-Logo.png"

function Header() {
  return (
    <header className="header">
      <img
        src={ title }
        alt="Harry Potter Title"
        className='hp-title'
      />
    </header>
  );
}

export default Header;