import { Outlet, Link } from "react-router-dom";
import "./Nav.css"
import "./fonts.css"
function Nav() {
  return (
    <>
      <nav className="container">
        <div id="logo" className="flex container">
          <Link className="link" to="/"><img src="Logo.png" /></Link>
        </div>
        <div className="flex container navElement">
          <Link className="link" to="/courses"> <h1 className="khula-regular">Courses</h1></Link>
        </div>
        <div className="flex container navElement">
          <Link className="link" to="/leaderboard"><h1 className="khula-regular">Leaderboard</h1></Link>
        </div>
        <div className="flex container navElement">
          <Link className="link" to="/profile"> <h1 className="khula-regular">Profile</h1></Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
