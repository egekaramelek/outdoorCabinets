import React from "react";
import { Row,Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import livingpageData from "../../assets/data/livingpageData";
import img01 from "../../assets/images/colors/sapphire.png";
import img02 from "../../assets/images/colors/espresso.png";
import img03 from "../../assets/images/colors/brightWhite.png";
import img04 from "../../assets/images/colors/charcoal.png";
import img05 from "../../assets/images/colors/chocolate.png";
import img06 from "../../assets/images/colors/everglade.png";
import img07 from "../../assets/images/colors/glacierGrey.png";
import img08 from "../../assets/images/colors/graphite.png";
import img09 from "../../assets/images/colors/tan.png";


const colorImages = [
  { src: img01, title: "Sapphire" },
  { src: img02, title: "Espresso" },
  { src: img03, title: "Bright White" },
  { src: img04, title: "Charcoal" },
  { src: img05, title: "Chocolate" },
  { src: img06, title: "Everglade" },
  { src: img07, title: "Glacier Grey" },
  { src: img08, title: "Graphite" },
  { src: img09, title: "Tan" },
];

const LivingList = () => {

  return (
    <>
      {livingpageData.map((item, index) => (
        <BlogItem item={item} key={item.id} index={index} />
      ))}
      <h2 className="color-title">Color Options</h2>
      <Row className="color-container d-flex justify-content-center">
        {colorImages.map((color, index) => (
          <Col lg="3" md="4" sm="6" xs="6" key={index} className="d-flex justify-content-center">
            <div style={{ textAlign: 'center' }}>
              <img src={color.src} alt={color.title} className="color-image" style={{ margin: "10px" }} />
              <p style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{color.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>


  );
};

const BlogItem = ({ item, index }) => {
  const { imgUrl, title, description } = item;

  const getItemPath = (index) => {
    switch (index) {
      case 0:
        return "/test";
      case 1:
        return "/test1";
      case 2:
        return "/test2";
      case 3:
        return "/test3";
      default:
        return "/outdoorKitchen";  // or some default path
    }
  };

  return (
    <>
      <Col lg="6" md="8" sm="8" className="mb-5">
        <div className="blog__item">
          <img src={imgUrl} alt="" className="w-100" />
          <div className="blog__info p-3">
            <p to={getItemPath(index)} className="blog__title">
              {title}
            </p>
            <p className="section__description mt-3">
              {description.length > 200
                ? description.substr(0, 200)
                : description}
            </p>
          </div>
        </div>
      </Col>

    </>

  );
};

export default LivingList;
