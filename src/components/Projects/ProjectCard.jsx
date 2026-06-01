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
<br />
      <article className='card-content'>
      <h3 className="project-title">{repo.name.replace(/-/g, " ")}</h3>
      <br />
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
      {data?.demoUrl && (
      <a href={data.demoUrl} target="_blank" rel='noreferrer'
      className="btn">Demo</a>
      )}
      </article>
    </section>
  );
  
}

export default ProjectCard;
