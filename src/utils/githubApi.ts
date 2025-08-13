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
  created_at: string;
}

export interface GitHubUserData {
  profile: GitHubProfile;
  repositories: GitHubRepo[];
  languageStats: Record<string, number>;
}

export async function getGitHubUserData(username: string): Promise<GitHubUserData> {
  // Fetch profile and repositories in parallel
  const [profileRes, reposRes] = await Promise.all([
    fetch(`${BASE}/users/${username}`),
    fetch(`${BASE}/users/${username}/repos?per_page=100`)
  ]);

  const [profile, repositories] = await Promise.all([
    profileRes.json(),
    reposRes.json()
  ]);

  // Map repositories to include only required fields
  const repoList: GitHubRepo[] = repositories.map((repo: any) => ({
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    created_at: repo.created_at,
  }));

  // Calculate language statistics
  const languageCount: Record<string, number> = {};
  repoList.forEach((repo: GitHubRepo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  const total = Object.values(languageCount).reduce((sum, count) => sum + count, 0);
  const languageStats: Record<string, number> = {};
  
  Object.entries(languageCount).forEach(([language, count]) => {
    languageStats[language] = parseFloat(((count / total) * 100).toFixed(2));
  });

  return { profile, repositories: repoList, languageStats };
}