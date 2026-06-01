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
      <h3 className="project-title">{repo.name.replace(/-/g, " ")}</h3>
      <p className='card-text'>{repo.description || "No description"}</p>
      </article>

      <article className='tech'>
        {data?.tech?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </article>

        <article className='card-btn'>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        View project →
      </a>
      <button>Demo</button>
      </article>
    </section>
  );
  
}

export default ProjectCard;
