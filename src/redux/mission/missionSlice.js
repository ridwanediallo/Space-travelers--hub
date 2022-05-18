import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsData = createAsyncThunk(
  'missions/getMissionsData',
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');

    if (res.ok) {
      const data = await res.json();
      console.log(data)
      return data;
    }
  }
);

const missionSlice = createSlice({
  name: 'missions',
  initialState: {missions: []},
  extraReducers: {
    [getMissionsData.pending]: (state, action) => {
      console.log('fetching');

    },
    [getMissionsData.fulfilled]: (state, action) => {
      console.log('success');
      state.missions.push(action.payload);
    },
  },
});

export default missionSlice.reducer;
