import React, {useEffect} from 'react'
import { Col, Row,Button, Container } from 'react-bootstrap';
import './rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, updateRockets } from '../../redux/rockets/postSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.post);
  
  useEffect(() => {
      if(!allRockets) dispatch(getPosts());
  }, [dispatch, getPosts])

  const handleRocketsReservation = ({target}) => {
    const {id} = target;
    dispatch(updateRockets(Number(id)));
  }
  return (
    <Container>
      {allRockets.map((item) => (
         !item.canceled ? (
          <div key={item.id} className='rocket-container'>
          <div>
             <img src={item.rocket_image} className="rockets-image" alt="rocket image" />
           </div>
           <div className='grid-row'>
             <h2>{item.rocket_name}</h2>
             <p>{item.description}</p>
                <Button id={item.id} onClick={handleRocketsReservation} className='button' variant="primary">Reserve Rockets</Button>{' '}
           </div>
          </div>
         ) : (
          <div key={item.id} className='rocket-container'>
          <div>
             <img src={item.rocket_image} className="rockets-image" alt="rocket image" />
           </div>
           <div className='grid-row'>
             <h2>{item.rocket_name}</h2>
             <p><span className='reserve-span'>reserved</span>{item.description}</p>
                <Button id={item.id} onClick={handleRocketsReservation} className='button' variant="primary">Cancel Reservation</Button>{' '}
           </div>
          </div>
         )
      ))}
  </Container>
  )
}

export default Rockets
