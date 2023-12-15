import { configureStore,createSlice } from "@reduxjs/toolkit";


const RandomGen =createSlice({
    name:"randomnum",
    initialState:{
        count:0
    },
    reducers:{
        numb(state,action)
        {
            state.count = (action.payload)

        }
    }
})


const store =configureStore({
    //use selctor use this name for displaying 
    reducer:{random :RandomGen.reducer}
})


export {store,RandomGen}