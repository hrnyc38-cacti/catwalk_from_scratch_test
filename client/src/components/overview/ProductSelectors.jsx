import React from 'react';

function ProductSelectors(props) {
  return (
    <div className="product-selectors">
      <h1>This section for Product Selection</h1>
      <form>
        <select className="size-selector">
          <option selected disabled>SELECT SIZE</option>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
          <option>x large</option>
          <option>xx large</option>
        </select><br></br>
        <select className="quantity-selector">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select><br></br>
        <button className="add-to-bag-button">ADD TO BAG</button>
        <input type="checkbox" className="star-checkbox"></input>
      </form>
    </div>

  )
}

export default ProductSelectors;