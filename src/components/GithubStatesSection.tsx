import { useEffect, useState } from 'react';
import { getGitHubUserData, GitHubUserData } from '../utils/githubApi';
import { ProfileCard } from './ProfileCard';
import { LanguageChart } from './LanguageChart';

const GithubStatesSection = () => {
  const [githubData, setGithubData] = useState<GitHubUserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem('githubData');
        const timestamp = localStorage.getItem('githubDataTimestamp');
        if (cached && timestamp && (Date.now() - parseInt(timestamp) < 3600000)) {
          setGithubData(JSON.parse(cached));
          setLoading(false);
          return;
        }
        const data = await getGitHubUserData('Shashi-Madushan');
        setGithubData(data);
        localStorage.setItem('githubData', JSON.stringify(data));
        localStorage.setItem('githubDataTimestamp', Date.now().toString());
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
  <section
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#0f1624] to-[#0f1a2d]"
      id="github-stats"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 text-center">
          GitHub Stats
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          My open source journey: profile, repositories, and language usage.
        </p>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center text-blue-300 bg-[#162137]/80 rounded-2xl p-8 shadow-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
              Loading GitHub data...
            </div>
          </div>
        ) : githubData ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
            {/* Profile Card - Large card spanning 2 columns on desktop */}
            <div className="md:col-span-2 min-h-[200px]">
              <ProfileCard profile={githubData.profile} />
            </div>

            {/* Language Chart - Tall card spanning 2 rows */}
            <div className="md:col-span-2 md:row-span-2 min-h-[400px]">
              <div className="bg-[#162137]/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 h-full flex flex-col border-t-4 border-blue-900 hover:border-blue-400 transition-all duration-300">
                <LanguageChart data={githubData.languageStats} />
              </div>
            </div>

            {/* Repository Stats Card */}
            <div className="md:col-span-1 min-h-[200px]">
              <div className="bg-[#162137]/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 h-full flex flex-col items-center justify-center border-t-4 border-green-900 hover:border-green-400 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {githubData.profile.public_repos}
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">
                    Public Repositories
                  </div>
                </div>
              </div>
            </div>

            {/* Followers Card */}
            <div className="md:col-span-1 min-h-[200px]">
              <div className="bg-[#162137]/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 h-full flex flex-col items-center justify-center border-t-4 border-purple-900 hover:border-purple-400 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    {githubData.profile.followers}
                  </div>
                  <div className="text-gray-300 text-xs uppercase tracking-wide">
                    Followers
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        ) : (
          <div className="text-center text-red-300 bg-[#162137]/80 rounded-2xl p-8 shadow-lg">
            Failed to load GitHub data
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubStatesSection;