import React from "react";

import ACard from "../Components/ACard";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "../Styles/CarouselCardGroupS.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1999, min: 992 },
    items: 2,
  },
  tablet1: {
    breakpoint: { max: 991, min: 768 },
    items: 1,
  },
  tablet2: {
    breakpoint: { max: 767, min: 463 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselCardGroup(props) {
  return (
    <>
      <div className="Header">
        <h2>Carousel Card Group</h2>
      </div>

      <Container className="Main-Card-Container">

      {/*------------Row 1-------------- */}
        <Row className="Row1" xs={1} md={4}>

            
             {/*------Carousel Container----- */}    
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                showDots={false}
                ssr={true}
                infinite={true}
                autoPlaySpeed={4000}
                removeArrowOnDeviceType={["mobile"]}
                centerMode={props.deviceType === "tablet2" ? false : true}
                containerClass="carousel-container"
            >

                {/*------------Row 1 Col 1-------------- */}
                <Col className="Col1" xs={12} md={3}>
                    <ACard 
                    title={"Introduction to Python Programming"}
                    text={"Introduction to programming with the Python language." }
                    image={require("../Asset/python.jpg")}
                    style={{ width: '18rem' }}
                    />
                </Col>

            {/*------------Row 1 Col 2-------------- */}
                <Col className="Col2" xs={12} md={3}>
                    <ACard
                    title={"Practical Machine Lerning with Python"}
                    text={ "Learn basics of machine learning concepts with Python."}
                    image={require("../Asset/ml-with-python.png")}
                    style={{ width: '18rem' }}
                    />
                </Col>


                {/*------------Row 1 Col 3-------------- */}
                <Col className="Col3" xs={12} md={3}>
                    <ACard className="Card3"
                    title={"Full Stack Web Application Development"}
                    text={"Learn concepts to build modern full stack web applications." }
                    image={require("../Asset/fullstack.png")}
                    style={{ width: '18rem' }}
                    />
                </Col>


                {/*------------Row 1 Col 4-------------- */}
                <Col className="Col4" xs={12} md={3}>
                    <ACard
                    title={"Modern Cloud Based Application Deveopment"}
                    text={"Start building of modern applications in the cloud."}
                    image={require("../Asset/cloud.png")}  
                    />
                </Col> 

                  {/*------------Row 1 Col 1-------------- */}
                  <Col className="Col1" xs={12} md={3}>
                    <ACard 
                    title={"Introduction to Python Programming"}
                    text={"Introduction to programming with the Python language." }
                    image={require("../Asset/python.jpg")}
                    style={{ width: '18rem' }}
                    />
                </Col>

            {/*------------Row 1 Col 2-------------- */}
                <Col className="Col2" xs={12} md={3}>
                    <ACard
                    title={"Practical Machine Lerning with Python"}
                    text={ "Learn basics of machine learning concepts with Python."}
                    image={require("../Asset/ml-with-python.png")}
                    style={{ width: '18rem' }}
                    />
                </Col>


                {/*------------Row 1 Col 3-------------- */}
                <Col className="Col3" xs={12} md={3}>
                    <ACard className="Card3"
                    title={"Full Stack Web Application Development"}
                    text={"Learn concepts to build modern full stack web applications." }
                    image={require("../Asset/fullstack.png")}
                    style={{ width: '18rem' }}
                    />
                </Col>


                {/*------------Row 1 Col 4-------------- */}
                <Col className="Col4" xs={12} md={3}>
                    <ACard
                    title={"Modern Cloud Based Application Deveopment"}
                    text={"Start building of modern applications in the cloud."}
                    image={require("../Asset/cloud.png")}  
                    />
                </Col> 
                
            </Carousel>
        </Row>
      </Container>
    </>
  );
}

export default CarouselCardGroup;
