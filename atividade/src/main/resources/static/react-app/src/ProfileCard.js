import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, imageUrl, progress }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt="Profile" className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(progress / 10) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
