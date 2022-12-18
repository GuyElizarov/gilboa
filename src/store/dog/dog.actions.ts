import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { Dog } from "../../interface/dog.interface";
import { dogService } from '../../services/dog.service'

export const fetchDogs = createAsyncThunk('dog/fetchDogs',
    async (_, thunkApi) => {
        try {
            const dogs: Dog[] = await dogService.query()
            return dogs
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    })