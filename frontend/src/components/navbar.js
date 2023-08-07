import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const NavBar = () => {
  const {logout} = useLogout
  const handleClick=()=>{
    logout()
  }


  return (<div className="navbar">
    {/* <div className="name">AutoShop</div>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Careers</li>
        </ul>
        <div>signin/resgister</div> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand"><h3>AutoShop</h3></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          Name     </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="navigate nav-item">
              <Link to="/" className="nav-link"><i className="fa fa-bell" aria-hidden="true"></i>Notification </Link>
            </li>
            <li className="navigate nav-item">
              <Link to="/" className="nav-link " aria-current="page"><i className="fa fa-user" aria-hidden="true"></i> Profile</Link>
            </li>
            <li className="navigate nav-item">
              <Link to="/" className="nav-link"><i className="fa fa-question-circle" aria-hidden="true"></i> Help</Link>
            </li>
            <li className="navigate nav-item">
              <Link to="/login" className="nav-link"><i className="fa fa-question-circle" aria-hidden="true"></i>signin/register </Link>
            </li>
            <li className="navigate nav-item" onClick={handleClick}>
              <Link to="/" className="nav-link"><i className="fa fa-question-circle" aria-hidden="true"></i>Logout </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>);
}

export default NavBar;