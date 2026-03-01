import './Projects.css';
import { useGithubRepos } from '../../services/GetRepos';
import ProjectCard from './ProjectCard';

function Projects() {
  const repos = useGithubRepos([
    "todoapp",
    "split-the-nota",
    "weather-app"
  ]);

  return (
    <section className="projects">
      <h2 className="projects-title">My Work</h2>

      <div className="project-grid">
        {repos.map(repo => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
