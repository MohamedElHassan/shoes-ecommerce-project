import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import './Register.scss';
const Register = () => {
  // هنا لو عاوزه تكتبي اي دالة او كود
  {fetch()}
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

          <form  action="" id="register" className="input-group2">
            {/* <!-- ----------------------FirstName Register---------------------- --> */}

            <div className="name">
              <div className="btn-icon">
                <label htmlFor="" className="input-label2">
                  First Name
                  <span>
                    <Icon icon="uil-user" className="login-icon"></Icon>
                  </span>
                  <input name='id' type="text" className="input-field2" placeholder="" />
                </label>
              </div>

              {/* <!-- ----------------------LastName Register---------------------- --> */}
              <div className="btn-icon">
                <label htmlFor="" className="input-label2">
                  Last Name
                  <span>
                    <Icon icon="uil:user" className="login-icon"></Icon>
                  </span>
                  <input type="text" className="input-field2" placeholder="" />
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
                <input type="text" className="input-field" placeholder="" />
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
              <Link to='/login'>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
