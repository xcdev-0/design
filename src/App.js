import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectArchive from "./components/ProjectArchive";
import MockupGrid from "./components/MockupGrid";
import Footer from "./components/Footer";
import DaeryongDetail from "./components/detail/DaeryongDetail"; // 새로 만든 컴포넌트 import
import HeartDetail from "./components/detail/HeartDetail"; // HeartDetail import
import DejavuDetail from "./components/detail/DejavuDetail"; // ← 이거 추가!
import DecetDetail from "./components/detail/DecetDetail";
import LuminoteDetail from "./components/detail/LuminoteDetail";
import BouncingDetail from "./components/detail/BouncingDetail";
import "./App.css";

function MainPage() {
  return (
    <div
      className="App"
      style={{
        fontFamily: 'sans-serif',
        background: '#fff',
        minHeight: '100vh'
      }}
    >
      <div className="title" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto 60px auto', maxWidth: '800px' }}>
        <video
          src="/assets/profile.mp4"
          style={{ width: "100%", maxWidth: "700px", height: "auto" }}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div style={{ height: '100px' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '900px',
          margin: '0 auto 2rem auto',
          padding: '0 2rem',
          background: '#fff'
        }}
      >
        <div style={{
          color: '#888',
          fontSize: '1.25rem',
          fontWeight: 300,
          textAlign: 'left',
          letterSpacing: '0.01em',
          flex: 1,
        }}>
          From UI/UX design and print layouts<br />
          to exhibition graphics and video editing
        </div>

        <div style={{ height: '100px' }} />

        <div style={{
          color: '#aaa',
          fontSize: '1.12rem',
          fontWeight: 400,
          textAlign: 'right',
          lineHeight: 1.6,
          flex: 1,
          marginTop: '160px',
          marginBottom: '100px'
        }}>
          I specialize in creating clear and engaging visual communication
          across multiple media. <br />
          This is the portfolio of Jae Hyun Jung, <br />
          a visual design major in their third year.
        </div>
      </div>
      <ProjectArchive />
      <div style={{ height: '80px' }} />
      <MockupGrid />
      <div style={{ height: '40px' }} />
      <Footer />
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/daeryong" element={<DaeryongDetail />} />
        <Route path="/heart" element={<HeartDetail />} />
        <Route path="/dejavu" element={<DejavuDetail />} />
        <Route path="/decet" element={<DecetDetail />} />
        <Route path="/luminote" element={<LuminoteDetail />} />
        <Route path="/bouncing" element={<BouncingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
