import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg1 from "../../assets/images/taco-starboard-1-2-x-12-x-27-white.jpg";
import aboutImg2 from "../../assets/images/16870159285481110759843746482699.jpg";


const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "80px" }
      }
    >
      <Container>
        <Row>
          <Col lg="8" md="8">
            <div className="about__section-content">
              <h2 className="section__title">Welcome to Dura Outdoor Furnitures and More</h2>
              <p className="section__description">
                We have been operating for 20 years with the aim of producing sustainable stylish outdoor living products with our environmentally friendly materials that will replace wood, perform better, are durable, and require less maintenance.
                <h3 className="section__title2">Our Mission</h3>
                Our aim is to revolutionize outdoor living to create a more sustainable future.</p>
              <h2 className="section__title">Seaboard®
                HDPE Marine Board
                &amp; Outdoor Building Materials</h2>
              <p className="section__description">
                HDPE (High-density polyethylene) is a thermoplastic derived from
                petroleum. It is a versatile product that is extremely strong, impact
                resistant, and exhibits a low coefficient of friction. HDPE offers great
                strength, affordability, and environmental friendliness, all of which make
                it the preferred plastic material for many manufacturers</p>
              <p className="section__description">
                Imagine all the very best qualities of building with wood without any of
                the maintenance and hassle that comes with the corrosion due to
                outdoor elements. There is no need to imagine anymore: meet the
                Seaboard ®  family of hdpe marine board and outdoor building materials.</p>
                <p className="section__description">Characteristics</p>
                <p className="section__description"> • UV-stabilized and colourfast</p>
                <p className="section__description"> • Seawater resistant</p>
                <p className="section__description">• Resistant against scratches</p>
                <p className="section__description">• Does not decay</p>
                <p className="section__description">• Does not form mould or fungi</p>
                <p className="section__description">• Easy-care</p>
                <p className="section__description">• Easy to machine and process</p>
                <p className="section__description"> • UV-resistant</p>
              <p className="section__description">
                As a consequence, Seaboard HDPE Marine Board are maintenance-
                free, and resist to stains and extreme weather conditions, including the
                cold in Alaska, the heat in desert or the hurricanes in the South. It can’t
                be painted, but the color won’t fail.</p>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="about__img">
              <img src={aboutImg1} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;