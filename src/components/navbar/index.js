import { 
  Component 
} from 'preact';
import { 
  Link 
} from 'preact-router/match';
import halfmoon from 'halfmoon';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar">
        <Link 
        class="navbar-brand"
        href="/"
        >
          Newtox
        </Link>
        <ul class="navbar-nav d-none d-md-flex">
          <li class="nav-item">
            <Link 
            class="nav-link" 
            activeClassName="text-primary" 
            href="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link"
              activeClassName="text-primary"
              href="/statistics"
            >
              Statistics
            </Link>
          </li>    
        </ul>
        <div class="navbar-content ml-auto">
          <button
            class="btn btn-action mr-5"
            type="button"
            onClick={() => halfmoon.toggleDarkMode()}
            aria-label="Toggle dark mode"
          >
            <i class="far fa-moon" aria-hidden="true"></i>
          </button>
          <a
            class="btn btn-primary mr-5 d-none d-md-inline-block"
            role="button"
            href="https://github.com/Newtox"
            target="_blank"
          >
            <i class="fab fa-github mr-5" aria-hidden="true"></i>
            Follow on GitHub
          </a>
          <div class="dropdown with-arrow d-md-none">
            <button
              class="btn btn-action"
              data-toggle="dropdown"
              type="button"
              id="navbar-dropdown-toggle-btn-1"
            >
              <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
            <div
              class="dropdown-menu dropdown-menu-right w-200"
              aria-labelledby="navbar-dropdown-toggle-btn-1"
            >
              <Link 
              class="dropdown-item" 
              href="/about"
              >
                About
              </Link>
              <Link 
              class="dropdown-item" 
              href="/statistics"
              >
                Statistics
              </Link>
              <div class="dropdown-divider"></div>
              <div class="dropdown-content">
                <a
                  class="btn btn-block btn-primary"
                  role="button"
                  href="https://github.com/Newtox"
                  target="_blank"
                >
                  <i class="fab fa-github mr-5" aria-hidden="true"></i>
                  Follow on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
