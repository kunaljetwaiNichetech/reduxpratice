import React from 'react'
import { useDispatch } from 'react-redux'
import { RandomGen } from '../store'


export default function Buttons() {
    const dispatch=useDispatch()


    const handelrandom=((show)=>{
        console.log(show)
        dispatch(RandomGen.actions.numb(show) )
    
    })
    
    const gegran=(()=>{
        const rendom =Math.floor(Math.random()*100+1)
        // console.log(rendom)
        return rendom
    })
    return (
      <div>
        <button  onClick={() => handelrandom(gegran())}>Generate Random number</button>
      </div>
    );
}
