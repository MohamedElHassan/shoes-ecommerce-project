import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCartArrowDown, FaSearch, FaUser } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import { useGlobalContext } from '../../context';
import './Navbar.scss';

const Navbar = () => {
  const { amount } = useGlobalContext();
  const { pathname } = useLocation();
  const [activePage, setActivePage] = useState(pathname);
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    // runs on location, i.e. route, change
    setActivePage(pathname);
  }, [pathname]);

  return (
    <>
      <nav className="navbar section__padding">
        <Link to="/" className="img-logo">
          {/* <img src={logo} alt="logo" /> */}
          <h2>Logo</h2>
        </Link>
        <div className="navbar-links">
          <Link className={activePage === '/' ? 'active' : ''} to={'/'}>
            Home
          </Link>
          <Link
            className={activePage === '/products' ? 'active' : ''}
            to={'/products'}
          >
            Products
          </Link>
          <Link
            className={activePage === '/about' ? 'active' : ''}
            to={'/about'}
          >
            About
          </Link>
          <Link
            className={activePage === '/dashboard' ? 'active' : ''}
            to={'/dashboard'}
          >
            Dashboard
          </Link>
        </div>
        <div className="navbar-right">
          <Link className="cart-btn" to={'/cart'}>
            <FaCartArrowDown
              className={activePage === '/cart' ? 'active' : null}
            />
            {amount !== 0 ? <span>{amount}</span> : null}
          </Link>
          <Link className="user-btn" to={'/register'}>
            <FaUser
              className={
                activePage === '/register' || activePage === '/login'
                  ? 'active'
                  : null
              }
            />
          </Link>
        </div>
      </nav>
      <div className="menu-btn" onClick={() => setToggleMenu(!toggleMenu)}>
        {/* <span></span>
        <span></span>
        <span></span> */}
        <FiMenu />
        {amount !== 0 ? <span>{amount}</span> : null}
      </div>
      <menu className={`mobile-menu ${toggleMenu ? 'active' : ''}`}>
        <div className="menu-items">
          <Link
            className={activePage === '/' ? 'active' : ''}
            to={'/'}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            Home
          </Link>
          <Link
            className={activePage === '/products' ? 'active' : ''}
            to={'/products'}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            Products
          </Link>
          <Link
            className={activePage === '/about' ? 'active' : ''}
            to={'/about'}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            About
          </Link>
          <div className="menu-icons">
            <Link
              className="cart-btn"
              to={'/cart'}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <FaCartArrowDown
                className={activePage === '/cart' ? 'active' : null}
              />
              {amount !== 0 ? <span>{amount}</span> : null}
            </Link>
            <Link
              className="user-btn"
              to={'/register'}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <FaUser
                className={
                  activePage === '/register' || activePage === '/login'
                    ? 'active'
                    : null
                }
              />
            </Link>
          </div>
        </div>
      </menu>
    </>
  );
};

export default Navbar;
