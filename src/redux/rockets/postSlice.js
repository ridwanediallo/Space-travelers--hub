import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
   const response = await fetch('https://api.spacexdata.com/v3/rockets');
   const rocketsData = await response.json();
   const fetchedRockets = rocketsData.map((rocket) => ({
       id: rocket.id,
       rocket_name: rocket.rocket_name,
       description: rocket.description,
       rocket_image: rocket.flickr_images[0],
       canceled: false,
   }));
   return fetchedRockets;
});

const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        updateRockets: (state, action) => state.map((rocket) => {
            if(rocket.id === action.payload) {
                return {...rocket, canceled: !rocket.canceled};
            }
            return rocket;
        })
    },

    extraReducers: {
        [getPosts.fulfilled]: (state, action) => action.payload
      
    },
});

export const {updateRockets} = postSlice.actions;
export default postSlice.reducer