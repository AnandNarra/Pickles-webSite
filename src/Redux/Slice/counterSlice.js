import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'counter_form',
    initialState: {
        count: 0,


    },
    reducers: {

        handleIncrement: (state)=>{

            state.count +=1 

        },

        handledecrement :(state) =>{

            state.count -=1
        }

    },
})

// Action creators are generated for each case reducer function
export const { handleIncrement , handledecrement   } = counterSlice.actions

export default counterSlice.reducer