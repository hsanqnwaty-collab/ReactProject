import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <ul className="nav-links">
       <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </ul>
    </nav>
  );
}

export default Navbar;