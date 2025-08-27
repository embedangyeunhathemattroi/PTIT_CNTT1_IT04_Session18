import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState={
        count:0
    };//de so 0 hoac 1 obj chua {} cx dc
    const countReducer=(state1:any,action11:any)=>{  //tinh toan tra ve state moi
       console.log("action1",action11);
       //co the sdung switch case
       if (action11.type =="Increase") {
        return{count:state1.count+action11.payload}
        
       }else if(action11.type =="Decrease"){
         return{count:state1.count-action11.payload}
       }
       return state1;   

    }
    //const [count,dispatch]=useReducer(reducer,initialState)
    //console.log("gia tri count",count);
    const [state,dispatch]=useReducer(countReducer,initialState)
    const increase =()=>{
        dispatch({type:"Increase",payload:3})//co the truyen obj
    }

     const decrease =()=>{
        dispatch({type:"Decrease",payload:1})//co the truyen obj
    }

    
  return (
    <div>UseReducer
        <h1>Gia tri count:{state.count}</h1>
        <button onClick={increase}>Tang</button>
          <button onClick={decrease}>Giam</button>
    </div>
  )
}
