import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/About" style={{ marginRight: "10px" }}>About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;