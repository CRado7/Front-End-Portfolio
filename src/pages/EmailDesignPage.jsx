import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { emailProjects } from "../data/emailProjects";
import "../styles/EmailStyles.css";

function EmailModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleOpenInBrowser = (filePath) => {
    if (filePath) {
      window.open(filePath, "_blank");
    }
  };

  const handleDownload = async () => {
    if (!project.zipUrl) return;
  
    try {
      const response = await fetch(project.zipUrl);
      if (!response.ok) throw new Error("File not found on server");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = `${project.slug}.zip`;
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Could not find the zip file. Check if it's in the public/emails folder!");
    }
  };

  // Placeholder images — replace with real ones per project
  const placeholderCount = project.slug === "welcome-sequence" ? 1 : 3;

  return (
    <div className="email-modal-backdrop" onClick={onClose}>
      <div className="email-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="email-modal-handle" />
        <button className="email-modal-close" onClick={onClose}>×</button>

        {/* Header */}
        <div className="email-modal-header">
          <h2>{project.title}</h2>
          <div className="email-modal-meta">
            <span>{project.client}</span>
            <span className="dot">·</span>
            <span>{project.role}</span>
          </div>
          <div className="email-modal-actions">
            {project.coded && (
              <>
                <button
                  className="email-action-btn accent"
                  onClick={handleDownload}
                  // Use the same property for both!
                  // disabled={!project.zipUrl} 
                  title={!project.zipUrl ? "Download not available" : "Download Project"}
                >
                  ↓ Download Project
                </button>
              </>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="email-modal-body">
          {/* Scrollable image column */}
          <div className="email-images-panel">
            {project.images && project.images.length > 0 ? (
              project.images?.map((img, i) => (
                <div className="email-image-card" key={i}>
                  <strong className="email-image-title">{img.title}</strong>
                  <img src={img.src} alt={img.alt} className="email-image" />
                  {img.codeFile && (
                    <button
                      className="email-action-btn primary"
                      onClick={() => handleOpenInBrowser(img.codeFile)}
                    >
                      ↗ Open in Browser
                    </button>
                  )}


                </div>
                
              ))
            ) : (
              Array.from({ length: placeholderCount }).map((_, i) => (
                <div className="email-image-placeholder" key={i}>
                  <span className="placeholder-icon">✉</span>
                  <span>Email {i + 1} preview</span>
                </div>
              ))
            )}
          </div>

          {/* Detail sidebar */}
          <div className="email-detail-panel">
            <div className="email-detail-block">
              <h4>About</h4>
              <p>{project.description}</p>
            </div>

            <div className="email-detail-block">
              <h4>Tags</h4>
              <div className="email-detail-tags">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className={`email-tag ${t === "Coded Email" ? "coded-tag" : ""}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.coded && (
              <div className="email-detail-block">
                <h4>Tech</h4>
                <p>Fully hand-coded HTML email. Responsive layout using table-based structure and inline CSS for maximum email client compatibility.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmailDesignPage() {
  const [activeProject, setActiveProject] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      const found = emailProjects.find((p) => p.slug === slug);
      setActiveProject(found || null);
    } else {
      setActiveProject(null);
    }
  }, [slug]);

  const openProject = (project) => {
    setActiveProject(project);
    navigate(`/email-design/${project.slug}`);
  };

  const closeProject = () => {
    setActiveProject(null);
    navigate("/email-design");
  };

  return (
    <div className="fill">
      <div className="container">
        <div className="email-hero">
          <h1>Email Design</h1>
          <p>Campaign design and coded email development — from multi-part sequences to hand-built HTML templates.</p>
        </div>

        <div className="email-list">
          {emailProjects.map((project) => (
            <div
              key={project.slug}
              className="email-card"
              onClick={() => openProject(project)}
            >
              <div className="email-card-left">
                <div className="email-card-tags">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className={`email-tag ${t === "Coded Email" ? "coded-tag" : ""}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="email-card-title">{project.title}</div>
                <div className="email-card-client">{project.client}</div>
                <div className="email-card-desc">{project.description}</div>
              </div>
              <div className="email-card-arrow">→</div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <EmailModal project={activeProject} onClose={closeProject} />
      )}
    </div>
  );
}
