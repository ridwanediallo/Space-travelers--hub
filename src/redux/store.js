import { configureStore } from "@reduxjs/toolkit";
import missionSlice from "./mission/missionSlice";
import postSlice from "./rockets/postSlice";

export default configureStore({
    reducer: {
        post: postSlice,
        mission: missionSlice
    }
})
