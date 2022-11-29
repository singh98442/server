import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    isLoggin : false
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        login: (state)=>{
            state.isLoggin = true
        },
        logout: (state)=>{
            state.isLoggin = false
        }
    }
})

export const {login, logout} = authSlice.actions


export default authSlice.reducer;