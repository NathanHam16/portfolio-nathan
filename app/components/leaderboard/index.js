"use client";

import { useState } from "react"
import Redeem from "./components/redeem";

const fakeData = [
    {
        name: 'John Doe',
        score: 300
    },
    {
        name: 'Sue Zo',
        score: 200
    },
    {
        name: 'Int Name',
        score: 100
    }
]

export default function LeaderBoard() {
    const [showRedem, setShowRedem] = useState(false)

    const toggleRedem = () => {
        setShowRedem(!showRedem)
    }
    return(<>
        <div>
            LeaderBoard
            <button onClick={toggleRedem}> Toggle Redeem</button>
            {showRedem && <Redeem/>}
            {fakeData.map((item, index) =>{
                return(
                    <div key={index}>
                        <div>{item.name}</div>
                        <div>{item.score}</div>
                    <br/>
                    </div>
                )
                
            })}
        </div>
    </>)    
}