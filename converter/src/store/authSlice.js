import { createSlice } from "@reduxjs/toolkit";


const sliceAuthData = createSlice({
    name: "Tokens",
    initialState: {
        "Access-Token": document.cookie.split(" ")[0].split("=")[1],
        "Refresh-Token": document.cookie.split(" ")[1].split("=")[1]
    },
    reducers: {
        setAccessToken(state, accessToken) {
            state["Access-Token"] = accessToken;
        },
        getAccessToken(state) {
            return state["Access-Token"];
        },
        setRefreshToken(state, refreshToken) {
            state["Refresh-Token"] = refreshToken;
        },
        getRefreshToken(state) {
            return state["Refresh-Token"];
        }
    }
});


export const {setAccessToken, getAccessToken, setRefreshToken, getRefreshToken} = sliceAuthData.actions;
export default sliceAuthData.reducer;