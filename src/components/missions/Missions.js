import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsData, JoinMission } from '../../redux/mission/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  // const {missions} = useSelector((state) => state.mission);
  const missions = useSelector((state) => state.mission);
 console.log(missions)
  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch, getMissionsData]);

  const handleMisionReservation = ({target}) => {
    const {id} = target;
    console.log(id);
    dispatch(JoinMission(id))
  }

  return (
    <Table
      striped
      bordered
      // hover
      size="lg"
      className="container my-5"
      responsive="lg"
    >
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>
             {!mission.canceled ? (
                <div className="btns">
                <tr className="d-flex">
                  <button type="button" className="btn btn-secondary">
                    NOT A MEMBER
                  </button>
                  <button id={mission.id} onClick={handleMisionReservation}  type="button" className="btn btn-outline-dark ms-3">
                    Join Mission
                  </button>
                </tr>
              </div>
             ) : (
              <div className="btns">
              <tr className="d-flex">
                <button type="button" className="btn btn-info">
                  Active Member
                </button>
                <button id={mission.id} onClick={handleMisionReservation}  type="button" className="btn btn-outline-danger ms-3">
                  Join Mission
                </button>
              </tr>
            </div>
             )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
