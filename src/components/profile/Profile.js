import React from 'react';
import { useSelector } from 'react-redux';


const Profile = () => {
  const joinMissions = useSelector((state) => state.mission);
  const filteredMissions = joinMissions.filter((mission) => mission.canceled === true);
  console.log(filteredMissions);
  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2>My Missions</h2>
        <div className="card mission-card">
          <ul className="list-group list-group-flush">
           {filteredMissions.map((mission) => {
        
             const {id, name} = mission;
             console.log(id);
             console.log(name);
              return (
                <li key={id} className="list-group-item">{name}</li>
              )
           })}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
