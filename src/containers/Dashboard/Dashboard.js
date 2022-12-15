import './Dashboard.scss';
import { Icon } from '@iconify/react';
const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon">
                  <Icon icon="ion:logo-google-playstore" />
                </span>
                <span className="title">Ecommerce</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <Icon icon="ion:stats-chart-outline"></Icon>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <Icon icon="ion:cart-outline"></Icon>
                </span>
                <span className="title">Orders</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <Icon icon="ion:bag-outline"></Icon>
                </span>
                <span className="title">Products</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <Icon icon="ion:bicycle-outline"></Icon>
                </span>
                <span className="title">Shipping</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <Icon icon="ion:cash-outline"></Icon>
                </span>
                <span className="title">Payments</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <Icon icon="ion:settings-outline"></Icon>
                </span>
                <span className="title">Settings</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="topbar">
            <div className="toggle">
              <Icon icon="ion:menu-outline"></Icon>
            </div>
            <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
                <Icon icon="ion:search-outline"></Icon>
              </label>
            </div>
          </div>
          <div className="cardbox">
            <div className="card">
              <div>
                <div className="numbers">2500</div>
                <div className="cardname">Shipped Orders</div>
              </div>
              <div className="iconBx">
                <Icon icon="ion:bicycle-outline"></Icon>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">80</div>
                <div className="cardname">Pending Orders</div>
              </div>
              <div className="iconBx">
                <Icon icon="ion:cart-outline"></Icon>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">09</div>
                <div className="cardname">New Orders</div>
              </div>
              <div className="iconBx">
                <Icon icon="ion:bag-outline"></Icon>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">163</div>
                <div className="cardname">Comments</div>
              </div>
              <div className="iconBx">
                <Icon icon="ion:chatbubbles-outline"></Icon>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" className="btn">
                  View All
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Star Rifergator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Casual Shoes</td>
                    <td>$1900</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>{' '}
                  <tr>
                    <td>T-shirt</td>
                    <td>$1300</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>{' '}
                  <tr>
                    <td>Shirt</td>
                    <td>$1500</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>{' '}
                  <tr>
                    <td>Wall Fun</td>
                    <td>$5000</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>{' '}
                  <tr>
                    <td>Smart Watch</td>
                    <td>$3000</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>{' '}
                  <tr>
                    <td>Samsung Phone</td>
                    <td>$12000</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Huwawie Phone</td>
                    <td>$7000</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>{' '}
                  <tr>
                    <td>HTC Phone</td>
                    <td>$8000</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>{' '}
                  <tr>
                    <td>HTC Phone</td>
                    <td>$8000</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="recentCustomers">
              <div className="CardHeader">
                <h2>Recent Customers</h2>
              </div>
              <table>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Ahmed
                      <br />
                      <span>Nour</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David
                      <br />
                      <span>Ita</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Ammar
                      <br />
                      <span>Ibrahiem</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Moaz
                      <br />
                      <span>Hassan</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Joker
                      <br />
                      <span>Albasti</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Mariem
                      <br />
                      <span>Yorka</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Hassan
                      <br />
                      <span>Osman</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Erling
                      <br />
                      <span>Halland</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Antoniela
                      <br />
                      <span>Dimer</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Antoniela
                      <br />
                      <span>Dimer</span>
                    </h4>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script>
    let toggle = document.querySelector('.toggle');
    let navigation =document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.onclick=function(){
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    }
    let list=document.querySelectorAll('.navigation li');
    function activeLink(){
        list.forEach((item)=>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item)=>
    item.addEventListener('mouseover',activeLink));
</script> */}
    </>
  );
};

export default Dashboard;
