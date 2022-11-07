import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import images from '../../images'
import './Header.scss'
const Header = () => {
  return (
    <>
      <div className="header section__padding">
        <div className="header-content">
          <h1>
            Life is better in Running <span>shoes</span>
          </h1>
          <p>
            Find your shoes from our various colllections. Here shoes are
            endless and profit it also endless.
          </p>
          <Link className="primary-btn" to="/products">
            Shop Now <FaChevronRight />
          </Link>
        </div>
        <div className="header-img">
          <img src={images.headerImage} alt="header-img" />
        </div>
      </div>
    </>
  )
}

export default Header
