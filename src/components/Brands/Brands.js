import images from '../../images';
import './Brands.scss';
const Brands = () => {
  return (
    <>
      <div className="section-title">
        <h4>Brands</h4>
        <h2>Our Parteners</h2>
      </div>
      <div className="brands section__padding">
        <div className="brand"><img src={images.brand1} alt='brand1' /></div>
        <div className="brand"><img src={images.brand2} alt="brand2" /></div>
        <div className="brand"><img src={images.brand3} alt="brand3" /></div>
      </div>
    </>
  );
};

export default Brands;
