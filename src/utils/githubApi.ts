// utils/githubApi.ts

const BASE = "https://api.github.com";

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export interface GitHubUserData {
  profile: GitHubProfile;
  repositories: GitHubRepo[];
  languageStats: Record<string, number>;
}

export async function getGitHubUserData(username: string): Promise<GitHubUserData> {
  const [profileRes, reposRes] = await Promise.all([
    fetch(`${BASE}/users/${username}`).then(res => res.json()),
    fetch(`${BASE}/users/${username}/repos?per_page=100`).then(res => res.json())
  ]);
  const profile = profileRes;
  const repos = reposRes;

  const count: Record<string, number> = {};
  repos.forEach((r: GitHubRepo) => {
    if (r.language) count[r.language] = (count[r.language] || 0) + 1;
  });
  const total = Object.values(count).reduce((a, b) => a + b, 0);
  const languageStats: Record<string, number> = {};
  Object.entries(count).forEach(([lang, c]) => {
    languageStats[lang] = parseFloat(((c / total) * 100).toFixed(2));
  });

  return { profile, repositories: repos, languageStats };
}
  