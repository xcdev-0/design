import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { title: "Daeryong Village", img: "/assets/archive/archive_daerong.png", path: "/daeryong" },
  { title: "Pieces of the Heart", img: "/assets/archive/archive_heart.png", path: "/heart" },
  { title: "Deja-vu's Boundary", img: "/assets/archive/archive_dejavu.png", path: "/dejavu" },
  { title: "DECET", img: "/assets/archive/archive_decet.png", path: "/decet" },
  { title: "Luminote", img: "/assets/archive/archive_lumi.png", path: "/luminote" },
  { title: "Bouncing Ball Motion", img: "/assets/archive/archive_bouncing.png", path: "/bouncing" },
  { title: "To be added", img: "/assets/archive/archive_default.png" },
  { title: "To be added", img: "/assets/archive/archive_default.png" },
];

function ProjectArchive() {
  const navigate = useNavigate();

  return (
    <section style={{
      maxWidth: '900px',
      padding: '0 2rem',
      margin: '2rem auto'
    }}>
      <h2 style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginBottom: '3rem',
        textAlign: 'left'
      }}>
        Project Archive
      </h2>
      <div className="responsive-grid archive-grid" style={{ justifyContent: 'flex-start' }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'transform 0.2s',
              textAlign: 'center'
            }}
            onClick={() => navigate(project.path)}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{ width: '100%', height: '120px', objectFit: 'cover' }}
            />
            <div style={{ padding: '0.5rem', fontSize: '1rem', fontWeight: 500 }}>
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectArchive; 