import { useState } from "react"

export default function Bowler(){

    const [Ball, setBalls ] = useState(0);
    const handleBalls = () => {
        const newBall = Ball+1;
        setBalls(newBall)
    }

    return(
        <div>
            <h1>Balls: {Ball}</h1>
            {
                Ball === 6 && <p>Over</p>
            }
            <button onClick={handleBalls} style={{ color: 'red', fontSize: '30px' }}>⚾ Ball</button>
        </div>
    )
}