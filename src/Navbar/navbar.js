import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar-title">PSYCH 202: Feature Project 1</p>
      <nav className="navbar-links">
        <a
          className="navbar-link"
          href={process.env.PUBLIC_URL + "/data/Reflection.pdf"}
          target="_blank"
        >
          Reflection
        </a>
        <a
          className="navbar-link"
          href={process.env.PUBLIC_URL + "/data/References.pdf"}
          target="_blank"
        >
          References
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
