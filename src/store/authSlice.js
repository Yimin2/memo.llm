import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const login = createAsyncThunk("auth/login", async (data, {rejectWithValue}) => {
    try {
        const config = {
            url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`, method: "POST", data: {
                email: data.email, password: data.password
            }, headers: {
                "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY,
            },
        }
        const response = await axios(config)
        return response.data
    } catch (e) {
        console.log(e.response.data)
        return rejectWithValue(e.response.data)
    }
})

const signup = createAsyncThunk("auth.signup", async (data, {rejectWithValue}) => {
    try {
        const config = {
            url: `${SUPABASE_URL}/auth/v1/signup`, method: "POST", data: {
                email: data.email, password: data.password
            }, headers: {
                "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY,
            }
        }
        const response = await axios(config)
        return response.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

const logout = createAsyncThunk("auth/logout", async (_, {rejectWithValue, getState}) => {
    try {
        const config = {
            url: `${SUPABASE_URL}/auth/v1/logout`, method: "POST", headers: {
                "Content-type": "application/json",
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${getState().auth.token}`
            },
        };
        const response = await axios(config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const initialState = {
    token: null, error: null, loading: null, isSignupSuccess: false,
}

const authSlice = createSlice({
    name: "auth", initialState, reducers: {
        resetSignupSuccess: (state) => {
            state.isSignupSuccess = false
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state) => {
                state.isSignupSuccess = true;
                state.loading = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.access_token
                state.loading = false
            })
            .addCase(logout.fulfilled, (state) => {
                state.token = null
                state.loading = false
            })
            .addMatcher((action) => (action.type.endsWith("/pending")), (state) => {
                state.error = null
                state.loading = true
            })
            .addMatcher((action) => (action.type.endsWith("/rejected")), (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export const {resetSignupSuccess} = authSlice.actions
export {login, signup, logout}
export default authSlice.reducer
