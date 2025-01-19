import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/userSchema'

const initialState: UserSchema = {
    authData: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const { actions: userActions, reducer: userReducer } = userSlice