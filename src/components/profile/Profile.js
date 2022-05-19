import React from 'react';
import { useSelector } from 'react-redux';
const Profile = () => {
  const rockets = useSelector(state => state.post);
 const reservedRockets = rockets.filter((rocket) => rocket.canceled === true);

  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2>My Missions</h2>
        <div className="card mission-card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">  
          {reservedRockets.map((rocketName) => {  
            <li className="list-group-item">{rocketName.rocket_name}</li>
            })} 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
