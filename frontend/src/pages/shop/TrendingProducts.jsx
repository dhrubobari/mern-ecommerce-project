import React, { useState } from "react";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">
        Discover the Hottest Picks: Elevate Your Style with Our Curated
        Collection of Trending Women's Fashion Products.
      </p>
      {/* Products card */}
      <section className="section__container product_container">
        <h2 className="section_header">Trending Products</h2>
        <p className="section_subheader mb-12">
          Discover the Hottest Picks: Elevate Your Style with Our Curated
          Collection of Trending Women's Fashion Products.
        </p>

        {/* products card */}
        <div className="mt-12">
          <ProductCards products={products.slice(0, visibleProducts)} />
        </div>

        {/* load more products btn */}
        <div className="product_btn">
          {visibleProducts < products.length && (
            <button className="btn" onClick={loadMoreProducts}>
              Load More
            </button>
          )}
        </div>
      </section>
    </section>
  );
};

export default TrendingProducts;
