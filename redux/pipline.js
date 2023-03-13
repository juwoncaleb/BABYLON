import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'count',
    initialState: {
        count:0,
        selectCandidate: [
           
        ]
    },
    reducers: {
        addCandidate: (state, action) => {
            state.selectCandidate.push(action.payload)
        },
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

// exporting the actions out of the slice
export const { increment, decrement, incrementByAmount, addCandidate } = countSlice.actions
// export the reducer
export default countSlice.reducer

