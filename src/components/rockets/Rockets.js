import React from 'react'
import { Col, Row,Button, Container } from 'react-bootstrap';
import rocket1 from './rocket1.png';
import './rockets.css';

const Rockets = () => {
  const id = Date.now();
  return (
    <Container>
   <div className='rocket-container'>
   <div>
      <img src={rocket1} className="rockets-image" alt="rocket image" />
    </div>
    <div>
      <h2>Falcon 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Fusce ut placerat orci nulla pellentesque. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Mi bibendum neque egestas congue. 
        Viverra maecenas accumsan lacus vel facilisis volutpat est. Malesuada nunc vel risus commodo. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.
         At erat pellentesque adipiscing commodo elit. Imperdiet sed euismod nisi porta. Enim facilisis gravida neque convallis a cras semper auctor.</p>
         <Button variant="primary">Primary</Button>{' '}
    </div>
   </div>
  </Container>
  )
}

export default Rockets
