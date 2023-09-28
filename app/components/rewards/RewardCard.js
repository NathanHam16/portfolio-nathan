import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pointReduce } from "../../store/reducers/userSlice";

const RewardCard = ({ reward }) => {
  const { imagePath, rewardName, coinsRequired, rewardDescription } = reward;
  const dispatch = useDispatch();
  const userPoint = useSelector((state) => state.user.point);
  const handleBuy = () => {
    // Handle buy functionality here
    console.log(`Buying ${rewardName}`);
    if (userPoint - coinsRequired >= 0){

      dispatch(pointReduce(coinsRequired))
    }
    else {
      alert("Not enough coins")
    }
  };

  return (
    <div className="reward-card">
      <img src={imagePath} alt={rewardName} className="reward-image" />
      <div className="reward-details">
        <h2 className="reward-name">{rewardName}</h2>
        <p className="reward-coins">Coins Required: {coinsRequired}</p>
        <p className="reward-description">{rewardDescription}</p>
        <button className="buy-button" onClick={handleBuy}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default RewardCard;
