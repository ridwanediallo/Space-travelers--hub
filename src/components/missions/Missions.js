import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsData } from '../../redux/mission/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const {missions} = useSelector((state) => state.mission);
  console.log(missions);

  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch, getMissionsData]);

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
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              <div className="btns">
                <tr className="d-flex">
                  <button type="button" className="btn btn-secondary ms-3">
                    NOT A MEMBER
                  </button>
                  <button type="button" className="btn btn-outline-dark ms-3">
                    Join Mission
                  </button>
                </tr>
              </div>
            </td>
          </tr>
        ))}

        {/* <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <div className="btns">
            <tr>
              <button type="button" className="btn btn-info ms-3">
                NOT A MEMBER
              </button>
              <button type="button" className="btn btn-outline-danger ms-3">
                Join Mission
              </button>
            </tr>
          </div>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default Missions;
