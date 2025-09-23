import React, { useState } from "react";
    import { useDispatch, useSelector } from 'react-redux';
import { handledecrement, handleIncrement } from "../../Redux/Slice/counterSlice";


function Counter(){

    // const [count , setCount] =useState(0)

    const dispatch = useDispatch()

    const count =useSelector(state => state.counter.count)

    function increment(){

        // setCount( prevCount => prevCount + 1)
        dispatch(handleIncrement())
            
        }

    function decrement(){

        // setCount( prevCount => prevCount - 1)

        dispatch (handledecrement())
    }    

    return(

        

        <>


        <div>
            Counter{count}
        </div>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
        
        
        </>
    )
}

export default Counter;