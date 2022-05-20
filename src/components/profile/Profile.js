import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const joinMissions = useSelector((state) => state.mission);
  const reserveRockets = useSelector((state) => state.post);
  const filteredMissions = joinMissions.filter(
    (mission) => mission.canceled === true
  );
  const reservedRockets = reserveRockets.filter(
    (rocket) => rocket.canceled === true
  );
  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2>My Missions</h2>
        <div className="card mission-card">
          <ul className="list-group list-group-flush">
            {filteredMissions.map((mission) => {
              const { id, name } = mission;
              return (
                <li key={id} className="list-group-item">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            {reservedRockets.length ? (
              reservedRockets.map((rocketName) => {
                const { rocket_name, id } = rocketName;
                return (
                  <li key={id} className="list-group-item">
                    {rocket_name}
                  </li>
                );
              })
            ) : (
              <p className="p-2 text-danger">Please reserve a rocket</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
