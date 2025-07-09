import React from "react";

const mockups = [
  {
    title: "Deja-vu's Boundary",
    img: "/assets/mockup/dejavu.png",
    detail: "Exhibition Visual / Poster & Goods",
    date: "2025.03.10 ~ 06.13"
  },
  {
    title: "Pieces of the Heart",
    img: "/assets/mockup/heart.png",
    detail: "Editorial Design / Book Design",
    date: "2025.03.10 ~ 06.13"
  },
  {
    title: "Daeryong Village",
    img: "/assets/mockup/darong.png",
    detail: "Local Branding / Character & Experience Design",
    date: "2025.05.23 ~ 06.15"
  },
  {
    title: "Luminote",
    img: "/assets/mockup/luminote.png",
    detail: "Busan, Suyoung-gu Light Festival",
    date: ""
  },
  {
    title: "DECET",
    img: "/assets/mockup/DECET.png",
    detail: "UI/UX Design / Mobile Application RE-design",
    date: "2025.03.10 ~ 06.13"
  },
  {
    title: "Blender 3D Modeling",
    img: "/assets/mockup/blender.png",
    detail: "Practicing forms, materials, lighting, and etc.",
    date: "2024.12.10~"
  },
];

function MockupGrid() {
  return (
    <section style={{ maxWidth: '900px', padding: '0 2rem', margin: '2rem auto' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '3rem', textAlign: 'left' }}>Mockups</h2>
      <div className="responsive-grid mockup-grid">
        {mockups.map((mockup, idx) => (
          <div
            key={idx}
            style={{
              background: '#111',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'transform 0.2s',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              minHeight: '90px',
              height: '90px',
              width: '100%'
            }}
            onClick={() => alert(mockup.title)}
          >
            <div style={{ flex: '0 0 90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222' }}>
              <img
                src={mockup.img}
                alt={mockup.title}
                style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px', background: '#222' }}
              />
            </div>
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '0.7rem 1.2rem',
              height: '100%',
              minWidth: 0,
              gap: '2px',
              boxSizing: 'border-box'
            }}>
              <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#4fc3f7', marginBottom: '2px', whiteSpace: 'nowrap', textShadow: '0 1px 4px #2228' }}>{mockup.title}</span>
              <span style={{ color: '#bbb', fontWeight: 400, fontSize: '0.97rem', margin: '2px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{mockup.detail}</span>
              <span style={{ color: '#eee', fontWeight: 300, fontSize: '0.92rem', marginTop: '2px', whiteSpace: 'nowrap' }}>{mockup.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MockupGrid; 