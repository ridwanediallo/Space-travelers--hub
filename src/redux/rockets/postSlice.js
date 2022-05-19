import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
   const response = await fetch('https://api.spacexdata.com/v3/rockets');
   const rocketsData = await response.json();
   const fetchedRockets = rocketsData.map((rocket) => ({
       id: rocket.id,
       rocketName: rocket.rocket_name,
       description: rocket.description,
       rocketImage: rocket.flickr_image[0],
       canceled: false,
   }));
   return fetchedRockets;
});

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
    },
    reducers: {
        updateRockets: (state, action) => state.map((rocket) => {
            if(rocket.id === action.payload) {
                return {...rocket, canceled: !rocket.canceled};
            }
            return rocket;
        })
    },

    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
      
    },
});

export const {updateRockets} = postSlice.actions;
export default postSlice.reducer