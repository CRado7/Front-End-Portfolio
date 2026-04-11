import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightbox from "./Lightbox"
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const { modalContent } = project;
  const { overview, context, constraints, responsibilities, outcomes, screenshots, beforeAfter } = modalContent;
  const allScreenshots = screenshots.flatMap(section => section.images);
  const statusColorMap = {
    green: "status-green",
    orange: "status-orange",
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        <div className="modal-handle" />

        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        {/* Header */}
        <div className="modal-header">
          {/* <img src={project.image} alt={`${project.title} screenshot`} className="modal-image" /> */}
          <h2>{project.title}</h2>

          <div className="modal-meta">
            <span className="role-tag">{overview.role}</span>
            <span className="dot">·</span>
            <span className="role-tag">{overview.timeline}</span>
            <span className="dot">·</span>
            <div className="stack-tags">
              {project.stack.map((s) => (
                <span key={s} className="stack-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="project-status">
            <span
              className={`status-dot ${statusColorMap[project.modalContent.overview.statusColor]}`}
            />
            <span className="status-text">{project.modalContent.overview.siteStatus}</span>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-visit-link"
            >
              Visit Site ↗
            </a>
          )}
          {project.emailLink && (
            <Link to={project.emailLink} className="modal-visit-link">
              View Email Campaign ↗
            </Link>
          )}
          {project.graphicLink && (
            <Link to={project.graphicLink} className="modal-visit-link">
              View Graphic Design Project ↗
            </Link>
          )}
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-scope">{overview.scope}</p>

          <div className="modal-grid">
            <div className="modal-block full">
              <h4>Context</h4>
              <p>{context}</p>
            </div>

            <div className="modal-block">
              <h4>Constraints</h4>
              <ul>
                {constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-block">
              <h4>Responsibilities</h4>
              <ul>
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-block full">
              <h4>Outcomes</h4>
              <ul>
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {beforeAfter && beforeAfter.before?.image && beforeAfter.after?.image && (
            <div className="before-after-section">
              <h3>Home Page Before & After</h3>

              <BeforeAfterSlider
                before={beforeAfter.before.image}
                after={beforeAfter.after.image}
              />

              {/* <div className="before-after-descriptions">
                <p><strong>Before:</strong> {beforeAfter.before.description}</p>
                <p><strong>After:</strong> {beforeAfter.after.description}</p>
              </div> */}
            </div>
          )}

          <div className="screenshots">
            {screenshots.map((section, i) => (
              <div key={i} className="screenshot-section">

                {section.heading && <h3>{section.heading}</h3>}
                {section.subheading && <p>{section.subheading}</p>}

                <div className="screenshots">
                  {section.images.map((shot, j) => (
                    <figure key={j} className="screenshot">
                      <strong>{shot.title}</strong>
                      <img 
                        src={shot.image} 
                        alt={shot.title} 
                        onClick={() => {
                          const index = allScreenshots.findIndex(
                            img => img.image === shot.image
                          );
                          setActiveIndex(index);
                        }}
                      />

                      <figcaption>
                        {/* <strong>{shot.title}</strong> */}
                        <p>{shot.caption}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>

              </div>
            ))}
          </div>
          {activeIndex !== null && (
            <Lightbox
              screenshots={allScreenshots}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )}
        </div>

      </div>
    </div>
  );
}
