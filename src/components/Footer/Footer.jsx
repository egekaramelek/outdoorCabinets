import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/living",
    display: "Outdoor Living",
  },
  {
    path: "/outdoorKitchen",
    display: "Outdoor Kitchen",
  },
  {
    path: "/products",
    display: "Products",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">

                  <span>
                    Dura Outdoor Furnitures and More
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Crafting Weather-Proof Elegance with an Eye for Detail 
            </p>
          </Col>



          <Col lg="4" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Contacts</h5>
              <p className="office__info">İstasyon Mahallesi, Yarış Çıkmazı Sokak, NO : 1, İÇ KAPI NO : 159 TUZLA / İSTANBUL</p>
              <p className="office__info">Telefon: 00 90 216 766 16 18</p>

              <p className="office__info">Email: info@duraoutdoorfurnituresandmore.com</p>


            </div>
          </Col>

          <Col lg="4" md="4" sm="12">
            <div className="quick__link">
              {quickLinks.map((link, index) => (
                <p key={index}>
                  <Link to={link.path}>{link.display}</Link>
                </p>
              ))}
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, duraoutdoorfurnituresandmore.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

