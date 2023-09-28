"use client";
import { useState } from "react"


const fakeDate = [
    {
        prizeName : "Prize 1",
        prizePoint : 100,
    },
    {
        prizeName : "Prize 2",
        prizePoint : 200,
    },
    {
        prizeName : "Prize 3",
        prizePoint : 300,
    },
    {
        prizeName : "Prize 4",
        prizePoint : 400,
    },
    {
        prizeName : "Prize 5",
        prizePoint : 500,
    }
]

export default function Redeem(){
    const [currentPoint, setCurrentPoint] = useState(1000)

    const redeemReward = (reductedPoint) => {    
        setCurrentPoint(currentPoint - reductedPoint)
    }

    return(
        <>
            {`Current Points: ${currentPoint}`}
            {fakeDate.map((item, index) =>{
                return(
                    <div key={index}>
                        <div>{item.prizeName}</div>
                        <div>{item.prizePoint}</div>
                        <button onClick={() => {redeemReward(item.prizePoint)}}>Redeem</button>
                    <br/>
                    </div>
                )
                
            })}
        </>
    )
}