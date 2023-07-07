import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import productData from "../../assets/data/productData";

const ProductList = () => {
  return (
    <>
      {productData.map((item, index) => (
        <BlogItem item={item} key={item.id} index={index} />
      ))}
    </>
  );
};

const BlogItem = ({ item, index }) => {
  const { imgUrl, title } = item;

  const getItemPath = (index) => {
    switch(index) {
      case 0:
        return "/living";
      case 1:
        return "/outdoorKitchen";
      default:
        return "/outdoorKitchen";  // or some default path
    }
  };

  return (
    <Col lg="6" md="8" sm="8" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          <Link to={getItemPath(index)} className="blog__title">
            {title}
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ProductList;
