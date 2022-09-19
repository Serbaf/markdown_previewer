import { createSlice } from '@reduxjs/toolkit'

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        value: {
            text: "VODKA"
        }
    },
    reducers: {
        setText: (state, action) => {
            state.value.text = action.payload
        },
    },

});

export const { setText } = markdownSlice.actions
export default markdownSlice.reducer;