import React from "react";

function DejavuDetail() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
        <img src="/assets/detail_page/dajavu/Frame 415.png" alt="Frame 415" style={imgStyle} />
        <img src="/assets/detail_page/dajavu/Frame 421.png" alt="Frame 421" style={imgStyle} />
        <img src="/assets/detail_page/dajavu/Frame 482.png" alt="Frame 482" style={imgStyle} />
        <img src="/assets/detail_page/dajavu/Frame 483.png" alt="Frame 483" style={imgStyle} />
        <img src="/assets/detail_page/dajavu/Frame 484.png" alt="Frame 484" style={imgStyle} />
        <img src="/assets/detail_page/dajavu/Frame 485.png" alt="Frame 485" style={imgStyle} />
        <img src="/assets/detail_page/dajavu/Frame 486.png" alt="Frame 486" style={imgStyle} />
        <img src="/assets/detail_page/dajavu/Frame 487.png" alt="Frame 487" style={imgStyle} />
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

export default DejavuDetail;