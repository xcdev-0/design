import React from "react";

function DaeryongDetail() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
        <img src="/assets/detail_page/daeryong/daeryong_1.png" alt="daeryong_1" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_2.png" alt="daeryong_2" style={smallImgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_4.png" alt="daeryong_4" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_5.png" alt="daeryong_5" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_6.png" alt="daeryong_6" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_7.png" alt="daeryong_7" style={imgStyle} />
        {/* 두 개 가로로 */}
        <div style={{ display: "flex", gap: "32px", justifyContent: "center", margin: "40px 0" }}>
          <img src="/assets/detail_page/daeryong/daeryong_map.png" alt="daeryong_map" style={halfImgStyle} />
          <img src="/assets/detail_page/daeryong/daeryong_map2.png" alt="daeryong_map2" style={halfImgStyle} />
        </div>
        <img src="/assets/detail_page/daeryong/daeryong_8.png" alt="daeryong_8" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_9.png" alt="" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_10.png" alt="daeryong_10" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_11.png" alt="daeryong_11" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_12.png" alt="daeryong_12" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_13.png" alt="daeryong_13" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_14.png" alt="daeryong_14" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_15.png" alt="daeryong_15" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_16.png" alt="daeryong_16" style={imgStyle} />
        <img src="/assets/detail_page/daeryong/daeryong_17.png" alt="daeryong_17" style={imgStyle} />
      </div>
    </div>
  );
}

const imgStyle = {
  width: "100%",
  maxWidth: "500px", // 더 작게!
  height: "auto",
  margin: "0 auto",
//   borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
  background: "#fff",
  boxSizing: "border-box"
};

const halfImgStyle = {
  ...imgStyle,
  maxWidth: "240px", // 두 개 가로로 들어가게 더 작게!
  margin: 0
};

const smallImgStyle = {
  ...imgStyle,
  maxWidth: "220px", // 원하는 만큼 더 작게!
  marginBottom: "80px",
  marginTop: "80px"
};

export default DaeryongDetail;