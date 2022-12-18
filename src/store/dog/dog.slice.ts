import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

import { UserState } from "../../interface/state/user.state";
import { fetchDogs } from "./dog.actions";
import { User } from "../../interface/user.interface";
import { Dog } from "../../interface/dog.interface";


interface DogState {
    value: {
        dogs: Dog[]
    }
    status: 'idle' | 'loading' | 'failed';
}


const initialState: DogState = {
    value: {
        dogs: []
    }
    ,
    status: 'idle'
}

export const dogSlice = createSlice({
    name: 'dog',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDogs.fulfilled, (state, action: PayloadAction<Dog[]>) => {
                state.status = 'idle'
                state.value = { dogs: action.payload }
            })
            .addCase(fetchDogs.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot signup')
            })
        // .addCase(logout.fulfilled, (state) => {
        //     state.status = 'idle'
        //     state.value = { ...state.value, user: null }
        // })
        // .addCase(logout.rejected, (state) => {
        //     state.status = 'failed'
        //     console.log('Cannot logout')
        // })
        // .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        //     state.status = 'idle'
        //     state.value = { ...state.value, user: action.payload }
        // })
        // .addCase(login.rejected, (state) => {
        //     state.status = 'failed'
        //     console.log('Cannot login')
        // })
        // .addCase(removeUser.fulfilled, (state, action: PayloadAction<string>) => {
        //     state.status = 'idle'
        //     state.value = { users: state.value.users.filter(user => user._id !== action.payload), user: null }
        // })
        // .addCase(removeUser.rejected, (state) => {
        //     state.status = 'failed'
        //     console.log('Cannot remove user')
        // })
        // .addCase(loadUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        //     state.status = 'idle'
        //     state.value = { ...state.value, users: action.payload }
        // })
        // .addCase(loadUsers.rejected, (state) => {
        //     state.status = 'failed'
        //     console.log('Cannot load users')
        // })
        // .addCase(setLoggedinUser.fulfilled, (state, action: PayloadAction<User>) => {
        //     state.status = 'idle'
        //     state.value = { ...state.value, user: action.payload }
        // })
        // .addCase(setLoggedinUser.rejected, (state) => {
        //     state.status = 'failed'
        //     console.log('Cannot get logged in user')
        // })

    }
})

export const selectDogs = (state: RootState) => state.dog.value.dogs

export default dogSlice.reducer