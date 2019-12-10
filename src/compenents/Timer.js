import React from 'react'



const seconds=(x)=>Math.floor((x / 1000) % 60)===0?"00":Math.floor((x / 1000) % 60)
const minutes=(x)=>Math.floor((x / (1000 * 60)) % 60)===0?"00":Math.floor((x / (1000 * 60)) % 60)
const hours= (x)=> Math.floor((x / (1000 * 60 * 60)) % 24)===0? "00":Math.floor((x / (1000 * 60 * 60)) % 24)


function Timer(props){
    const clock= props.clock
    return(
    
<div className="timer-container">

    <div className="hours"><h1>{hours(clock.time).toString().length<2?"0"+hours(clock.time):hours(clock.time) }</h1> <p>Hours</p></div><h1>:</h1>
<div className="minutes"><h1>{minutes(clock.time).toString().length<2?"0"+minutes(clock.time):minutes(clock.time)} </h1><p>Minutes</p></div><h1>:</h1>
<div className="seconds"><h1>{seconds(clock.time).toString().length<2?"0"+seconds(clock.time):seconds(clock.time)} </h1><p>Seconds</p></div>
</div>



    )
}
export default Timer