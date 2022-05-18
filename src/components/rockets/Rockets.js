import React, {useEffect} from 'react'
import { Col, Row,Button, Container } from 'react-bootstrap';
import './rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/rockets/postSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const {posts, loading} = useSelector(state => state.post)
  useEffect(() => {
      dispatch(getPosts());
  }, [dispatch, getPosts])

  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <Container>
      {posts.map((item) => (
         <div key={item.id} className='rocket-container'>
         <div>
            <img src={item.flickr_images[0]} className="rockets-image" alt="rocket image" />
          </div>
          <div className='grid-row'>
            <h2>{item.rocket_name}</h2>
            <p>{item.description}</p>
               <Button className='button' variant="primary">Primary</Button>{' '}
          </div>
         </div>
      ))}
  </Container>
  )
}

export default Rockets
