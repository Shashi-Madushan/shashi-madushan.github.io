// components/ProfileCard.tsx
import type { GitHubProfile } from "../utils/githubApi";

export function ProfileCard({ profile }: { profile: GitHubProfile }) {
  return (
    <div className="bg-[#162137]/80 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col items-center border-t-4 border-blue-900 hover:border-blue-400 transition-all duration-300 py-4 px-8 max-w-xl mx-auto gap-4">
      <img src={profile.avatar_url} alt="Avatar" className="rounded-full w-24 h-24 border-4 border-blue-900 shadow-lg" />
      <h2 className="text-2xl font-semibold text-blue-100 text-center">
        {profile.name || profile.login}
      </h2>
      {profile.bio && <p className="text-blue-300 text-center">{profile.bio}</p>}
      <div className="flex justify-around w-full text-sm mt-2">
        <div className="text-center"><strong className="text-blue-400">{profile.public_repos}</strong><br />Repos</div>
        <div className="text-center"><strong className="text-blue-400">{profile.followers}</strong><br />Followers</div>
        <div className="text-center"><strong className="text-blue-400">{profile.following}</strong><br />Following</div>
      </div>
      <div className="mt-2 text-center">
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer"
          className="text-indigo-400 hover:underline font-medium">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
