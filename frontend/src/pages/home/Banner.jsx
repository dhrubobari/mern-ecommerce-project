import React from "react";
import bannerImg from "../../assets/header.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 20% Discount on</h4>
        <h1>Winter Fashion</h1>
        <p>
          Discover the latest trends and express your unique style with our
          Women's Fashion website. Explore curated collection of clothing,
          accessories, and footwear that caters to every taste and occasion.
        </p>
        <Link to="/shop" className="btn">
          EXPLORE NOW
        </Link>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
