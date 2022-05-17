import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import rocket1 from './rocket1.png';

const Rockets = () => {
  const id = Date.now();
  return (
    <Container>
    <Row>
    <Col>
      <img src={rocket1} alt="Image" />
    </Col>
    <Col >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</Col>
    <Col>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</Col>
  </Row>
  </Container>
  )
}

export default Rockets
