import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const KitchenItem = (props) => {
  const { imgUrl, product_name , description , depth, height, doors , drawers , shelves } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{product_name}</h4>
          <h5 className="">{description}</h5>
          <h5 className="">{depth}</h5>
          <h5 className="">{height}</h5>
          <h5 className="">{doors}</h5>
          <h5 className="">{drawers}</h5>
          <h5 className="">{shelves}</h5>
        </div>
      </div>
    </Col>
  );
};

export default KitchenItem;