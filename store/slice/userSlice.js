import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import {set} from 'lodash'

const initialState = {
    list: null,
    isLoading: false,
    hasError: null
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
      console.log("_______________________");
      const response = await axios.get('https://randomuser.me/api/?page=3&results=10&seed=abc');
      console.log("=====");
      console.log(response.data.results);
      response.data.results[0].name.first = 'Вася' //проверим, что данные на странице отображаются из Redux
      response.data.results[0].name.last = 'Пупкин'
      return response.data.results
    },
  )

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            return [...state, payload]
        },
        updateUserName: (state, {payload}) => {
          const {name, uid} = payload;
          const updatedUsers = state.list.map(user => {
            if (user.login.uuid === uid) {
              user.name.first = name
            }
            return user
          })
        }
      },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.list = [...action.payload]
          })
      },
    }
)

export const { addUser, updateUserName } = userSlice.actions
export const selectUsers = (state) => state.users.list
export default userSlice.reducer