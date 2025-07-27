import GithubStatesSection from '../components/GithubStatesSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GithubStatesSection/>
      <ServicesSection />
      <ProjectsSection />
    </div>
  )
}

export default Home