import React, { useEffect, useState } from 'react';
import { GitHubRepo } from '../utils/githubApi';



const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    // Use the same key as in GithubStatesSection and githubApi.ts
    const storedData = localStorage.getItem('githubData');
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        if (parsed.repositories && Array.isArray(parsed.repositories)) {
          // Filter and typecast data to GitHubRepo[]
          const repoList: GitHubRepo[] = parsed.repositories.map((repo: any) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            created_at: repo.created_at,
          }));
          // Sort by created_at descending
          repoList.sort((a, b) => (b.created_at && a.created_at ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime() : 0));
          setRepos(repoList);
        }
      } catch (error) {
        console.error('Error parsing githubData:', error);
      }
    }
  }, []);

  return (
    <section
      className="py-10 px-2 md:py-16 md:px-8 bg-gradient-to-b from-[#0f1624] to-[#0f1a2d] min-h-screen"
      id="github-repos"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 text-center">
          GitHub Repositories
        </h1>
        <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          My open source projects: code, languages, and contributions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.html_url}
              className="bg-[#162137]/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 flex flex-col border-t-4 border-blue-900 hover:border-blue-400 transition-all duration-300"
            >
              <h2 className="text-lg md:text-xl font-semibold text-blue-300 mb-2 break-words">{repo.name}</h2>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                {repo.description || 'No description available.'}
              </p>
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>{repo.language || 'Unknown Language'}</span>
                <span>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 text-sm font-medium hover:underline mt-auto"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        {repos.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No repositories found in localStorage.</p>
        )}
      </div>
    </section>
  );
};

export default RepoList;
