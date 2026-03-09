import { useState, useEffect } from "react";

export function useGithubRepos(repoNames) {
  const [repos, setRepos] = useState([]);

  const username = "AVega89-0407";

  useEffect(() => {
    Promise.all(
      repoNames.map(name =>
        fetch(`https://api.github.com/repos/${username}/${name}`)
          .then(res => res.json())
      )
    )
      .then(data => setRepos(data))
      .catch(err => console.error(err));
      
  }, []);

  return repos;
}
