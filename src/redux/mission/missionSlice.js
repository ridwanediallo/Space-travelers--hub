import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsData = createAsyncThunk(
  'missions/getMissionsData',
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');

      const data = await res.json();

    const missionsData = data.map((mission) => ({
      id:  mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      canceled: false,
    }))
    console.log(missionsData)

    return missionsData

  }
);

const missionSlice = createSlice({
  name: 'missions',
  initialState: { missions: [] },
  reducers: {
    joinMission: (state, action) =>
      state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, canceled: !mission.canceled };
        }
        return mission;
      }),
  },
  extraReducers: {
    [getMissionsData.pending]: (state, action) => {
      console.log('fetching');
    },
    [getMissionsData.fulfilled]: (state, action) => {
      console.log('success');
      state.missions = action.payload;
    },
  },
});

export const {joinMission} = missionSlice.actions;
export default missionSlice.reducer;
