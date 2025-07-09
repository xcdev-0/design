import React from "react";
import "../App.css";

function Footer() {
  return (
    <div
      className="footer-menu"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        background: "rgba(0,0,0,0.82)", // 더 투명하게!
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "4px 0", // 더 얇게!
        borderTop: "1px solid #222",
        margin: 0,
        boxSizing: "border-box"
      }}
    >
      <span style={footerTextStyle}>HOME</span>
      <span style={footerTextStyle}>PROFILE</span>
      <span style={footerTextStyle}>INFO</span>
      <style>{`
        @media (max-width: 600px) {
          .footer-menu {
            gap: 8px !important;
            padding: 2px 0 !important;
          }
          .footer-menu span {
            font-size: 0.82rem !important;
          }
        }
      `}</style>
    </div>
  );
}

const footerTextStyle = {
  color: "#fff",
  textDecoration: "underline",
  fontWeight: 500,
  fontSize: "0.95rem",
  letterSpacing: "0.02em"
};

export default Footer; 