import reactIcon from '../assets/icons/React-icon.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={reactIcon} alt="React logo" className="image" />
        <p className="name">ReactFacts</p>
      </div>
      <div className="info">React Course - Project 1</div>
    </nav>
  );
}
