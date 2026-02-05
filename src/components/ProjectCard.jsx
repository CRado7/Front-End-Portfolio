// components/ProjectCard.jsx
export default function ProjectCard({ project, onClick }) {
    return (
      <div className="project-card" onClick={onClick}>
        <div className="project-card-overlay">
          <h3>{project.title}</h3>
          <p className="role">{project.role}</p>
          <p className="stack">{project.stack.join(" • ")}</p>
        </div>
      </div>
    );
  }
  