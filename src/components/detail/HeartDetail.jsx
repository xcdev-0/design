import React from "react";

function HeartDetail() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
        <img src="/assets/detail_page/heart/1.png" alt="heart_1" style={imgStyle} />
        <img src="/assets/detail_page/heart/2.png" alt="heart_2" style={imgStyle} />
        <img src="/assets/detail_page/heart/3.png" alt="heart_3" style={imgStyle} />
        <img src="/assets/detail_page/heart/4.png" alt="heart_4" style={imgStyle} />
        <img src="/assets/detail_page/heart/5.png" alt="heart_5" style={imgStyle} />
      </div>
    </div>
  );
}

const imgStyle = {
  width: "100%",
  maxWidth: "500px",
  height: "auto",
  margin: "0 auto",
  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
  background: "#fff",
  boxSizing: "border-box"
};

export default HeartDetail; 