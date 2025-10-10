import { buildCreateSlice, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const handleLoginAuthecition = createAsyncThunk(
    "loginfrom/authecition",
    async ({ userName, password }) => {
        const respones = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
            "email": userName,
            "password": password,
        });
        return respones.data;

    }

);

export const LoginSlice = createSlice({
    name: 'loginFrom',
    initialState: {

        userName: "",
        password: "",
        loading: false,
        error: null,
        responesData: null,
        isAuthenticated: false

    },

    

    reducers: {

        handleUserName1: (state, action) => {

            state.userName = action.payload


        },
        handlepassword1: (state, action) => {
            state.password = action.payload

        },
        logout:(state) =>{
            state.responesData=null;
            state.userName = "";
            state.password = "";
            state.isAuthenticated = false;
        }



    },
    extraReducers: (builder) => {
        builder.addCase(
            handleLoginAuthecition.pending, (state) => {
                state.loading = true;
                state.error = null;
            }
        )
        .addCase(handleLoginAuthecition.fulfilled,(state,action) =>{
            state.loading=false;
            state.responesData=action.payload;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase(handleLoginAuthecition.rejected,(state,action) =>{
            state.loading=true;
            state.error=action.error.message;
            state.isAuthenticated = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { handleUserName1, handlepassword1 ,logout } = LoginSlice.actions

export default LoginSlice.reducer