"use client";

import RewardCard from "./RewardCard.js";
import rewardsData from "../../data/rewards.json";
import './style.css'

export default function RewardsPage() {
  return (
    <div className = "container">
      <h1>  Rewards Shop</h1>
      <div className="dashboard-container">
        {rewardsData.rewards.map((reward, index) => (
          <RewardCard key={index} reward={reward} />
        ))}
      </div>
    </div>
  );
}
