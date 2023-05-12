import { Link } from "react-router-dom";

function Header()
{
    return(
    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <Link to="/about" class="navbar-brand">
            <img src="/images/logo.png" alt="logo" />
            <span>
              Brighton
            </span>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <Link class="nav-link" to="/home">
                    Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link"> About </Link>
                </li>
                <li class="nav-item">
                  <Link Link to="/program" class="nav-link"> Programs </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link"> Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    );    
}

export default Header;