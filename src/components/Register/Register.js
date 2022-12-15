import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import './Register.scss';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('localhost/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      {/* هنا اكتبي كود ال HTML عادي جدا. */}
      {/* وملف الSass / CSS مربوط وامورك تمام  وموجود في نفس المجلد*/}
      {/* في بعض الحاجات متغير اسمها عشان هيا محجوزه لل Javascript زي مثلاً */}
      {/* class ---> className */}
      {/* for ---> htmlFor */}
      {/* onsubmit ---> onSubmit */}
      {/* عشان تكتبي كود JS بداخل ال JSX هتفتح قوسين كدا. زي مثلاً */}

      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div className="reg-btn" id="btn"></div>
            <Link
              to="/login"
              type="button"
              className="toggle-btn"
              id="login-btn"
            >
              Login
            </Link>
            <Link
              to="/login"
              type="button"
              className="toggle-btn"
              id="register-btn"
            >
              Register
            </Link>
          </div>
          {/* <!-- ----------------------------Regiater Form----------------------------- --> */}

          <form onSubmit={handleSubmit} id="register" className="input-group2">
            {/* <!-- ----------------------FirstName Register---------------------- --> */}

            <div className="name">
              <div className="btn-icon">
                <label htmlFor="" className="input-label2">
                  First Name
                  <span>
                    <Icon icon="uil-user" className="login-icon"></Icon>
                  </span>
                  <input
                    name="id"
                    type="text"
                    className="input-field2"
                    placeholder=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
              </div>

              {/* <!-- ----------------------LastName Register---------------------- --> */}
              <div className="btn-icon">
                <label htmlFor="" className="input-label2">
                  Last Name
                  <span>
                    <Icon icon="uil:user" className="login-icon"></Icon>
                  </span>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="input-field2"
                    placeholder=""
                  />
                </label>
              </div>
            </div>
            {/* <!-- ----------------------Email Register---------------------- --> */}
            <div className="btn-icon2">
              <label htmlFor="" className="input-label2">
                Email
                <span>
                  <Icon icon="uil:envelope-alt" className="login-icon"></Icon>
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="input-field"
                  placeholder=""
                />
              </label>
            </div>

            {/* <!-- ----------------------Password Register---------------------- --> */}
            <div className="name">
              <div className="btn-icon3">
                <label htmlFor="" className="input-label2">
                  Password
                  <span>
                    <Icon icon="uil-eye-slash" className="login-icon"></Icon>
                  </span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    className="input-field2"
                    placeholder=""
                  />
                </label>
              </div>
              {/* <!-- ----------------------ConformPassword Register---------------------- --> */}
              <div className="btn-icon3">
                <label htmlFor="" className="input-label2">
                  Confirm Password
                  <span>
                    <Icon icon="uil-eye-slash" className="login-icon"></Icon>
                  </span>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirm-password"
                    type="password"
                    className="input-field2"
                    placeholder=""
                  />
                </label>
              </div>
            </div>
            {/* <!-- ----------------------Submit Register---------------------- --> */}

            <button type="submit" className="submit-btn2">
              Sign Up{' '}
            </button>
            <div className="account">
              You have already account
              <Link to="/login">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
