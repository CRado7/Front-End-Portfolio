// components/ProjectModal.jsx
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const { modalContent } = project;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <aside className="stretch modal-section">
            <h2>{project.title}</h2>
            <p className="stack">{project.stack.join(" • ")}</p>
            <p className="center">{modalContent.overview.scope}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            )}
        </aside>

        <main>
          <div className="modal-section stretch">
            <h4>Context</h4>
            <p>{modalContent.context}</p>
          </div>

          <section>
            <div className="modal-section">
              <h4>Constraints</h4>
              <ul>
                {modalContent.constraints.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4>Responsibilities</h4>
              <ul>
                {modalContent.responsibilities.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4>Outcomes</h4>
              <ul>
                {modalContent.outcomes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
