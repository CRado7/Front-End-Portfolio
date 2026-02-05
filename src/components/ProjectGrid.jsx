import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "../styles/ProjectsStyles.css";

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectFromSlug = useMemo(() => {
    if (!slug) return null;
    return projects.find(project => project.slug === slug) || null;
  }, [slug]);

  useEffect(() => {
    if (projectFromSlug) {
      setActiveProject(projectFromSlug);
    } else {
      setActiveProject(null);
    }
  }, [projectFromSlug]);

  const openProject = project => {
    setActiveProject(project);
    navigate(`/projects/${project.slug}`);
  };

  const closeProject = () => {
    setActiveProject(null);
    navigate(`/`);
  };

  return (
    <div className="container">
      <section className="project-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.slug}
            project={project}
            onClick={() => openProject(project)}
          />
        ))}
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeProject} />
      )}
    </div>
  );
}
