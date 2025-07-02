import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '@reduxjs/toolkit/query'
// Define RootState based on your store setup, for example:
import type { RootState } from '../../store'

// Define a type for the slice state
export interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
   
  }
})

export const { increment, decrement } = counterSlice.actions


export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer