import './Login.scss';
import images from '../../images';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div className="log-btn" id="btn"></div>
            <Link
              to="/register"
              type="button"
              className="toggle-btn"
              id="login-btn"
            >
              Login
            </Link>
            <Link
              to="/register"
              type="button"
              className="toggle-btn"
              id="register-btn"
            >
              Register
            </Link>
          </div>

          {/* <!-- ----------------------Login Form---------------------- --> */}

          <form action="" id="login" className="input-group">
            <div className="social-icons">
              <img src={images.google} alt="" />
              <img src={images.twitter} alt="" />
              <img src={images.facebook} alt="" />
            </div>

            <div className="lines">
              <div className="gray-line"></div>
              <p className="login-text">or</p>
              <div className="gray-line"></div>
            </div>
            {/* <!-- ----------------------Email Login---------------------- --> */}

            <div className="email-btn">
              <label htmlFor="" className="input-label">
                Email
                <span>
                  <i className="uil uil-envelope-alt login-icon"></i>
                </span>
                <input
                  type="text"
                  className="input-field"
                  id="input-field"
                  placeholder=""
                />
              </label>
            </div>

            {/* <!-- ----------------------Password Login---------------------- --> */}

            <div className="password-btn">
              <label htmlFor="" className="input-label">
                Password
                <span>
                  <i className="uil uil-eye-slash login-icon"></i>
                </span>
                <input type="password" className="input-field" placeholder="" />
              </label>
            </div>

            {/* <!-- ----------------------Submit---------------------- --> */}

            <div className="forget">Forger Password?</div>
            <button type="submit" className="submit-btn">
              Sign In{' '}
            </button>
            <div className="account">
              Don’t have an account?
              <Link to="/register">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
