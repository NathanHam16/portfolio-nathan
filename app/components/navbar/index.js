"use client";

import { useEffect } from "react";
import Logo from "./components/Logo";
import SignUp from "./components/Signup";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";

const routeName = {
  "/": "Login",
  "/dashboard": "Dashboard",
  "/leaderboard": "Leaderboard",
};

export default function Navbar() {
  const router = useRouter();
  const CurrentPage = usePathname();
  const [pageName, setPageName] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userCoins = useSelector((state) => state.user.point);

  useEffect(() => {
    setPageName(routeName[CurrentPage]);
  }, [CurrentPage]);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCoinsClick = () => {
    console.log("Coins clicked");
  };

  const handleShopClick = () => {
    router.push("/rewards");
  };

  const handleProfileMenuClick = () => {
    console.log("Profile menu clicked");
  };

  const handleLeaderBoardClick = () => {
    router.push("/leaderboard");
  };

  const handleLogoutClick = () => {
    router.push("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        <div className="profile-dropdown">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="profile-image"
            onClick={handleProfileClick}
          />
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                {`C: ${userCoins}`}
              </div>
              <div className="dropdown-item" onClick={handleShopClick}>
                Shop
              </div>
              <div className="dropdown-item" onClick={handleProfileMenuClick}>
                Profile
              </div>
              <div className="dropdown-item" onClick={handleLeaderBoardClick}>
                Leaderboard
              </div>
              <div className="dropdown-item" onClick={handleLogoutClick}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
