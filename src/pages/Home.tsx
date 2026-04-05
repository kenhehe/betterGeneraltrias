import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import WeatherMapSection from '../components/home/WeatherMapSection';
import HistorySection from '../components/home/HistorySection';
import LeadershipSection from '../components/home/LeadershipSection';
import ContactSection from '../components/home/ContactSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="BetterTagaytay — a community transparency portal for Tagaytay City, Cavite. Access government services, officials, budgets, and public information."
        keywords="Tagaytay City, Cavite, government, services, transparency, officials, budget"
      />
      <main>
        <Hero />
        <ServicesSection />
        <StatsSection />
        <WeatherMapSection />
        <HistorySection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
