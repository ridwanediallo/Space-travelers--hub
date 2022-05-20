import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsData, joinMission } from '../../redux/mission/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const {missions} = useSelector((state) => state.mission);
//  console.log(missions)
  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch, getMissionsData]);


  const joinMissionHandler = ({target}) => {
    console.log(target)
    const {id} = target;
    console.log(id)
    dispatch(joinMission(id))
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
        {missions.map((mission) =>
          !mission.canceled ? (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>

                  <tr className="d-flex">
                    <button type="button" className="btn btn-secondary">
                      NOT A MEMBER
                    </button>
                    <button
                      id={mission.id}
                      type="button"
                      className="btn btn-outline-dark ms-3"
                      onClick={joinMissionHandler}
                    >
                      Join Mission
                    </button>
                  </tr>

              </td>
            </tr>
          ) : (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>

                  <tr className="d-flex">
                    <button type="button" className="btn btn-info">
                      Active Member
                    </button>
                    <button
                      id={mission.id}
                      type="button"
                      className="btn btn-outline-danger ms-3"
                      onClick={joinMissionHandler}
                    >
                      Join Mission
                    </button>
                  </tr>

              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default Missions;
