import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCartArrowDown, FaSearch, FaUser } from 'react-icons/fa'
import './Navbar.scss'

const Navbar = () => {
  const { pathname } = useLocation()
  const [activePage, setActivePage] = useState(pathname)
  useEffect(() => {
    // runs on location, i.e. route, change
    setActivePage(pathname)
  }, [pathname])

  return (
    <>
      <nav className="navbar section__padding">
        <div className="img-logo">
          {/* <img src={logo} alt="logo" /> */}
          <h2>Logo</h2>
        </div>
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
        </div>
        <div className="navbar-right">
          <div className="search-section">
            <a className="search-btn" href="#">
              <FaSearch />
            </a>
          </div>
          <Link className="cart-btn" to={'/cart'}>
            <FaCartArrowDown />
          </Link>
          <Link className="user-btn" to={'/register'}>
            <FaUser />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar