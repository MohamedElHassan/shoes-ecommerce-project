import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import './ProductsFilter.scss'

const ProductsFilter = () => {
  const { handlePriceRange, handleCategorySelect } = useGlobalContext()
  const [category, setCategory] = useState('All')
  const [priceRange, setPriceRange] = useState(1000)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="product-filter">
        <div className="category-select">
          <div
            className={`${category === 'All' ? 'active' : ''} category-btn`}
            onClick={() => {
              handleCategorySelect('All')
              setCategory('All')
            }}
          >
            <p>All</p>
            <div className="icon">
              <FaChevronRight />
            </div>
          </div>
          <div
            className={`${category === 'Men' ? 'active' : ''} category-btn`}
            onClick={() => {
              handleCategorySelect('Men')
              setCategory('Men')
            }}
          >
            <p>Men</p>
            <div className="icon">
              <FaChevronRight />
            </div>
          </div>
          <div
            className={`${category === 'Women' ? 'active' : ''} category-btn`}
            onClick={() => {
              handleCategorySelect('Women')
              setCategory('Women')
            }}
          >
            <p>Women</p>
            <div className="icon">
              <FaChevronRight />
            </div>
          </div>
          <div
            className={`${category === 'Kids' ? 'active' : ''} category-btn`}
            onClick={() => {
              handleCategorySelect('Kids')
              setCategory('Kids')
            }}
          >
            <p>Kids</p>
            <div className="icon">
              <FaChevronRight />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="price-range">Price Range</label>
          <input
            id="price-range"
            type="range"
            min={50}
            max={1000}
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value)
              handlePriceRange(priceRange)
            }}
          />
        </form>
      </div>
    </>
  )
}

export default ProductsFilter
