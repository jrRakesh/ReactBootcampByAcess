import { useState } from "react";

function LearningUseState(){
    const [counter, setCounter] = useState(0)
    function increaseCounter(){
        setCounter(counter+1)
    }
    function decreaseCounter(){
        if(counter > 0)
         setCounter(counter-1)
    }
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
        </>
    )
}
export default LearningUseState