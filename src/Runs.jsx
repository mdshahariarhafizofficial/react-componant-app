import { useState } from "react"

export default function Runs(){
    const [runs, setRuns]= useState(0);
    const single = () => {
        const newRun = runs+1;
        setRuns(newRun)
    };

    return (
        <div>
            <h2>Batsman: Babar Azam</h2>
            <h2>Runs: {runs}</h2>
            <button onClick={single} style={{marginBottom: '20px', background: 'red'}}>Single Run</button>
        </div>
    )
}