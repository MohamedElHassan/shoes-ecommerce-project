import { useState } from 'react';
import { useGlobalContext } from '../../context';
import './Login.scss';
import images from '../../images';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const { setAuthUser } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost/projectAPI/executelogin.php?email=${email}&password=${password}`
    )
      .then((res) => res.json())
      .then((authMessage) => {
        console.log(authMessage.message);
        setAuth(authMessage.message);
        if (authMessage.message === 'No clients Found') {
          setEmail('');
          setPassword('');
        }
        if (authMessage.message === 'good') {
          setAuthUser('good');
          setEmail('');
          setPassword('');
          navigate('/');
        }
      });
    console.log(auth);
  };

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

          <form onSubmit={handleSubmit} id="login" className="input-group">
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="input-field"
                  placeholder=""
                />
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
