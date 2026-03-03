import { projectData } from '../../data/projectData';
import './Projects.css';

function ProjectCard({ repo }) {

  console.log(repo.name);
  

  const data = projectData[repo.name];

  return (
    <section className="project-card">

    <article className='image-wrapper'>
      <img src={data?.image} alt={repo.name} />
    </article>

      <article className='card-content'>
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description"}</p>
      </article>

      <article className='tech'>
        {data?.tech?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </article>

      <a href={repo.html_url} target="_blank" rel="noreferrer">
        View project →
      </a>
    </section>
  );
  
}

export default ProjectCard;
