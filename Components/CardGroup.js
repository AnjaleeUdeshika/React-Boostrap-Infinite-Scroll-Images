import React from "react";
import ACard from "../Components/ACard";
import "../Styles/CardGroup.css";

import { Container, Row, Col } from "react-bootstrap";

function CardGroup(props) {
  return (
    <>
      <div className="Header">
        <h2>Card Group</h2>
      </div>

      <Container className="Main-Card-Container">

      {/*------------Row 1-------------- */}
        <Row className="Row1" xs={1} md={4}>

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
              image={require("../Asset/machine-learning-with-python.png")}
              style={{ width: '18rem' }}
            />
          </Col>


          {/*------------Row 1 Col 3-------------- */}
          <Col className="Col3" xs={12} md={3}>
            <ACard
              title={"Full Stack WebApplication Development"}
              text={"Learn concepts to build modern full stack web applications." }
              image={require("../Asset/fullstack.png")}
              style={{ width: '18rem' }}
            />
          </Col>


          {/*------------Row 1 Col 4-------------- */}
          <Col className="Col4" xs={12} md={3}>
            <ACard
              title={"Modern Cloud-Based Application Deveopment"}
              text={"Start building of modern applications in the cloud."}
              image={require("../Asset/cloud.png")}  
            />
          </Col> 

        </Row>
      </Container>
    </>
  );
}

export default CardGroup;
