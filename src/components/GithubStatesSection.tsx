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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 text-center">
          GitHub Stats
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          My open source journey: profile, repositories, and language usage.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {loading ? (
            <div className="col-span-2 text-center text-blue-300 bg-[#162137]/80 rounded-2xl p-8 shadow-lg">
              Loading...
            </div>
          ) : githubData && (
            <>
              <div >
                <ProfileCard profile={githubData.profile} />
              </div>
              <div className="bg-[#162137]/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-blue-900 hover:border-blue-400 transition-all duration-300">
                
                <LanguageChart data={githubData.languageStats} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GithubStatesSection;