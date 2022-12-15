import { Icon } from '@iconify/react';
import React from 'react';
import './Address.scss';
const Address = () => {
  return <><div className="address">
  {/* <!-- ----------------------Address start---------------------- --> */}
  <div className="pages">
      <div className="links">
          Cart <Icon icon="uil:angle-right"></Icon>
          Address <i icon="uil:angle-right"></i>
          Deliviry <i icon="uil:angle-right"></i>
          Billing 
      </div>
  </div>

  {/* <!-- ----------------------------Address Form----------------------------- --> */}

  <form action="" id="register" className="input-group2">
      {/* <!-- ----------------------FirstName Button---------------------- --> */}
      
      <div className="name">
          <div className="btn-icon">
                  <span>
                      <i className="uil uil-user icon"></i>
                  </span>
                  <input type="text" className="input-field2" placeholder="First Name"/>
          </div>
  {/* <!-- ----------------------LastName Button---------------------- --> */}
          <div className="btn-icon">
                  <span>
                      <i className="uil uil-user icon"></i>
                  </span>
                  <input type="text" className="input-field2" placeholder="Last Name"/>
              </div>
      </div>

  {/* <!-- ----------------------Address Button---------------------- --> */}
  <div className="btn-icon2">
          <span>
              <i className="uil uil-location-point"></i>
          </span>
          <input type="text" className="input-field" placeholder="Address"/>
  </div>

  {/* <!-- ----------------------Town Button---------------------- --> */}
  <div className="town">
      <div className="btn-icon3">
          <span>
              <i className="uil uil-angle-down"></i>
          </span>
          <input type="text" className="input-field2" placeholder="Town/City"/>
      </div>

  {/* <!-- ----------------------Zip Button---------------------- --> */}
      <div className="btn-icon3">
          <span>
              <i className="uil uil-telegram-alt"></i>
          </span>
          <input type="text" className="input-field2" placeholder="Zip"/>
      </div>
  </div>

  {/* <!-- ----------------------Submit---------------------- --> */}
      <div className="check-box">
          <input type="checkbox" name="" id="en"/>
          <label for="en">Save information for delivery</label>
      </div>

      <div className="submit">
          <div className="icon">
              <i className="uil uil-angle-left"></i>Return to Cart
          </div>
          <div className="button">
              <button type="submit" className="Delivery-button">Proceed to Delivery</button>
          </div>
      </div>
  </form>

  {/* <!-- ---------------------------Summary--------------------------- --> */}
  <div className="summary">
      <h2>
          Summary
      </h2>
      <p>Subtotal &nbsp; &nbsp; &nbsp; &nbsp; <span>$370.00</span> </p>
      <p>Shipping cost <span>$50.00</span> </p>
      <br/>
      <p>Total &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>$420.00</span> </p>
  </div>
</div>

</>;
};

export default Address;
