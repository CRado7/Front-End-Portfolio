import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { graphicProjects } from "../data/graphicProjects";
import "../styles/GraphicStyles.css";

// ── Brand Sheet Modal ────────────────────────────────────────
function GraphicModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const hasLogos    = project.logos    && project.logos.length > 0;
  const hasColors   = project.colors   && project.colors.length > 0;
  const hasType     = project.typography && project.typography.length > 0;
  const hasMockups  = project.mockups  && project.mockups.length > 0;

  return (
    <div className="graphic-modal-backdrop" onClick={onClose}>
      <div className="graphic-modal-container" onClick={(e) => e.stopPropagation()}>

        <div className="graphic-modal-handle" />
        <button className="graphic-modal-close" onClick={onClose} aria-label="Close">×</button>

        {/* ── Header ── */}
        <div className="gm-header">
          <h2>{project.title}</h2>
          <div className="gm-header-meta">
            <span>{project.client}</span>
            <span className="dot">·</span>
            <span>{project.role}</span>
            <span className="dot">·</span>
            {project.tags.map((t) => (
              <span key={t} className="gm-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="gm-body">

          {/* Description */}
          {project.description && (
            <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 700 }}>
              {project.description}
            </p>
          )}

          {/* ── LOGO SYSTEM ── */}
          {project.logos?.length > 0 && (
            <div className="gm-section">
              <div className="gm-section-label">{project.projectType}</div>
              <div className="gm-logo-grid">
                {project.logos.map((logo, i) => (
                  <div className="gm-logo-card" key={i}>
                    <div className="gm-logo-card-label">{logo.label}</div>
                    <div className="gm-logo-card-image">
                      {logo.image ? (
                        <img src={logo.image} alt={logo.label} />
                      ) : (
                        <div className="gm-img-placeholder">
                          <span>◻</span>
                          <span>Logo</span>
                        </div>
                      )}
                    </div>
                    {logo.usage && (
                      <div className="gm-logo-card-usage">{logo.usage}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── COLOR PALETTE ── */}
          {hasColors && (
            <div className="gm-section">
              <div className="gm-section-label">Color Palette</div>
              <div className="gm-color-grid">
                {project.colors.map((color, i) => (
                  <div className="gm-color-card" key={i}>
                    <div
                      className="gm-color-swatch"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="gm-color-info">
                      <div className="gm-color-name">{color.name}</div>
                      <div className="gm-color-hex">{color.hex}</div>
                      {color.rgb && <div className="gm-color-rgb">{color.rgb}</div>}
                      {color.type && (
                        <span className="gm-color-type">{color.type}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TYPOGRAPHY ── */}
          {hasType && (
            <div className="gm-section">
              <div className="gm-section-label">Typography</div>
              <div className="gm-type-grid">
                {project.typography.map((t, i) => (
                  <div className="gm-type-card" key={i}>
                    {/* Specimen — show name in its own style where possible */}
                    <div
                      className={
                        t.style === "ExtraLight" || t.style === "Light"
                          ? "gm-type-allcaps"
                          : "gm-type-specimen"
                      }
                      style={{
                        fontWeight:
                          t.style === "Bold"       ? 700
                        : t.style === "ExtraLight" ? 200
                        : t.style === "Light"      ? 300
                        : 400,
                        letterSpacing: t.tracking ? `${parseFloat(t.tracking) / 1000}em` : undefined,
                      }}
                    >
                      {t.style === "ExtraLight" || t.style === "Light"
                        ? `${t.fontName.toUpperCase()}`
                        : t.fontName}
                    </div>
                    {t.style === "ExtraLight" && (
                      <div className="gm-type-allcaps" style={{ fontWeight: 200 }}>
                        ALL CAPS{t.tracking ? ` · TRACKING ${t.tracking}` : ""}
                      </div>
                    )}

                    <div className="gm-type-divider" />

                    <div className="gm-type-meta">
                      <div className="gm-type-label">{t.fontName}</div>
                      <div className="gm-type-style">{t.style}</div>
                    </div>

                    {t.usage && (
                      <div className="gm-type-usage">{t.usage}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── MOCKUPS ── */}
          {hasMockups && (
            <div className="gm-section">
              <div className="gm-section-label">Mockups</div>
              <div className="gm-mockup-grid">
                {project.mockups.map((src, i) => (
                  <div className="gm-mockup-img" key={i}>
                    {src ? (
                      <img src={src} alt={`${project.title} mockup ${i + 1}`} />
                    ) : (
                      <div className="gm-mockup-placeholder">
                        <span>◻</span>
                        <span>Mockup {i + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function GraphicDesignPage() {
  const [activeProject, setActiveProject] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      const found = graphicProjects.find((p) => p.slug === slug);
      setActiveProject(found || null);
    } else {
      setActiveProject(null);
    }
  }, [slug]);

  const openProject  = (p) => { setActiveProject(p); navigate(`/graphic-design/${p.slug}`); };
  const closeProject = ()  => { setActiveProject(null); navigate("/graphic-design"); };

  return (
    <div className="fill">
      <div className="container">
        <div className="graphic-hero">
          <h1>Graphic Design</h1>
          <p>Brand identity systems, logo design, print collateral, and visual design across digital and physical applications.</p>
        </div>

        <div className="graphic-grid">
          {graphicProjects.map((project) => (
            <div
              key={project.slug}
              className={`graphic-card ${project.size}`}
              onClick={() => openProject(project)}
            >
              <div className="graphic-card-inner">
                {project.mockups && project.mockups[0] ? (
                  <img src={project.mockups[0]} alt={project.title} />
                  // {/* {project.thumbnail ? (
                  //   <img src={project.thumbnail} alt={`${project.title} thumbnail`} /> */}
                ) : (
                  <div
                    className="graphic-placeholder"
                    style={{ aspectRatio: project.size === "large" ? "4/3" : "1/1" }}
                  >
                    <span className="graphic-placeholder-icon">◻</span>
                    <span>Project Preview</span>
                  </div>
                )}
                <div className="graphic-card-overlay">
                  <h3>{project.title}</h3>
                  <div className="g-client">{project.client}</div>
                </div>
              </div>
              <div className="graphic-card-label">
                <div className="g-title">{project.title}</div>
                <div className="g-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="g-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <GraphicModal project={activeProject} onClose={closeProject} />
      )}
    </div>
  );
}
