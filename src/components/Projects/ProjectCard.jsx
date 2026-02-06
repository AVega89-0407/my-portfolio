import './Projects.css';

import { FaStar } from 'react-icons/fa';

function ProjectCard({ repo }) {
  return (
    <div className="project-card">
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description"}</p>

      <div className="project-meta">
        <FaStar /> {repo.stargazers_count} · 🍴 {repo.forks_count}
      </div>

      <a href={repo.html_url} target="_blank" rel="noreferrer">
        View project →
      </a>
    </div>
  );
}

export default ProjectCard;
