import images from '../../images';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories-grid">
      <div className="category sm">
        <div className="category-overlay" />
        <img
          className="category-img"
          src={images.category1}
          alt={images.category1}
        />
        <h2 className="category-text">Men</h2>
      </div>
      <div className="category">
        <div className="category-overlay" />
        <img
          className="category-img"
          src={images.category2}
          alt={images.category2}
        />
        <h2 className="category-text">Women</h2>
      </div>
      <div className="category sm">
        <div className="category-overlay" />
        <img
          className="category-img"
          src={images.category3}
          alt={images.category3}
        />
        <h2 className="category-text">Kids</h2>
      </div>
    </div>
  );
};

export default Categories;
