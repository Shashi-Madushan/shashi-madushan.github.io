import type { GitHubRepo } from "../utils/githubApi";

export function RepositoriesList({ repos }: { repos: GitHubRepo[] }) {
  return (
    <div className="repos-list mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map(repo => (
        <a
          key={repo.name}
          href={repo.html_url}
          className="repo-card p-4 bg-gray-800 rounded hover:bg-gray-700"
          target="_blank" rel="noopener noreferrer"
        >
          <h4 className="text-xl font-medium">{repo.name}</h4>
          {repo.description && <p className="mt-1 text-sm">{repo.description}</p>}
          <div className="mt-2 text-xs flex space-x-3">
            {repo.language && <span>{repo.language}</span>}
            <span>★ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
