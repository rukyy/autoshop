import { Link } from "react-router-dom";

const NavBar = () => {
    return ( <div className="navbar">
        {/* <div className="name">AutoShop</div>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Careers</li>
        </ul>
        <div>signin/resgister</div> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link to={'/'} className="navbar-brand"><h3>AutoShop</h3></Link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to={'/'} className="nav-link">Notification <i className="fa fa-bell" aria-hidden="true"></i></Link>
                </li>
                <li class="nav-item">
                  <Link to={'/'} className="nav-link " aria-current="page"><i className="fa fa-user" aria-hidden="true"></i> Profile</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/'} className="nav-link"><i className="fa fa-question-circle" aria-hidden="true"></i> Help</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/'} className="nav-link"><i className="fa fa-question-circle" aria-hidden="true"></i> signin/register</Link>
                </li>
              </ul>
              <form class="d-flex">

              </form>
            </div>
          </div>
        </nav>
    </div> );
}
 
export default NavBar;