import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0);

    const add = () => {
        const newValue = count+1;
        setCount(newValue);
    };

    const CountStyle = {
        color: '#00d8ff',
    };
    return(
        <div style={CountStyle}>
            <h1>Count: <span style={{color: 'yellow'}}>{count}</span></h1>
            <button onClick={add} style={{marginBottom: '20px', background: '#b63cfe'}}>Add</button>
        </div>
    )
}