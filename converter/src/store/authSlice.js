import { createSlice } from "@reduxjs/toolkit";


try {
    var access_token = document.cookie.split(" ")[0].split("=")[1].split(";")[0]
    var refresh_token = document.cookie.split(" ")[1].split("=")[1].split(";")[0]
} catch {
    access_token = false;
    refresh_token = false;
}

const sliceAuthData = createSlice({
    name: "Tokens",
    initialState: {
        "Access-Token": access_token,
        "Refresh-Token": refresh_token
    },
    reducers: {
        setAccessToken(state, accessToken) {
            state["Access-Token"] = accessToken.payload
        },
        getAccessToken(state) {
            return state["Access-Token"];
        },
        setRefreshToken(state, refreshToken) {
            state["Refresh-Token"] = refreshToken.payload
        },
        getRefreshToken(state) {
            return state["Refresh-Token"];
        }
    }
});


export const {setAccessToken, getAccessToken, setRefreshToken, getRefreshToken} = sliceAuthData.actions;
export default sliceAuthData.reducer;