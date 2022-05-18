import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsData = createAsyncThunk('books/getMissionsData', async () => {
  const response = await fetch(`https://api.spacexdata.com/v3/missions`);

  const data = await response.json();
  console.log(data);
  return data;
});


export const missionSlice = {
  name: 'missions',
  initialState: [],
  [getMissionsData.pending]: (state, action) => {
    console.log('fetching');
  },
  [getMissionsData.fulfilled]: (state, action) => {
    console.log('success');
  },
};
