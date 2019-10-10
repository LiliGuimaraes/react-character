import React from "react";
import './Character'

export default function CHaracter() {
  return (
    <>
      <div className="char-card">
        <img  alt="" className="image" />
      </div>

      <div className="status-container"></div>
      <div className="info-container">
        <div className="info-name"></div>
      </div>
      <div className="info-birtday"></div>
      <div className="info-occupation"></div>
    </>
  );
}
