import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
    return (
      <div >

        {/*--------------------Grid Layout-------------------------*/}

        <h2>Grid Layout</h2>
        <Container className="Main-Container">
               
                <Row  className="Row-1" md= {4} >        
                    <Col className="Row-1-Col-1" xs={12} md={6}><h2>A </h2>  </Col>
                    <Col className="Row-1-Col-2" xs={12} md={6}> <h2>B </h2></Col>           
                </Row>
                <Row className="Row-2" md= {4}>        
                    <Col className="Row-2-Col-1" xs={12} md={4}> <h2>C </h2> </Col>
                    <Col className="Row-2-Col-2" xs={12} md={8}> <h2>D </h2></Col>           
                </Row>
                <Row className="Row-3" md= {4}>        
                    <Col className="Row-3-Col-1" xs={12} md={4}> <h2>E </h2> </Col>
                    <Col className="Row-3-Col-2" xs={6} md={4}> <h2>F </h2> </Col>
                    <Col className="Row-3-Col-3" xs={6} md={4}> <h2>G </h2></Col>             
                </Row>
           
               
            </Container>


      </div>
    );
  }
  
  export default Grid;