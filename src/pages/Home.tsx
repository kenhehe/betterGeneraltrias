import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import GovernmentQuickLinks from '../components/home/GovernmentQuickLinks';
import HistorySection from '../components/home/HistorySection';
import LeadershipSection from '../components/home/LeadershipSection';
import ContactSection from '../components/home/ContactSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        description="BetterGeneralTrias.org — a community transparency portal for General Trias City, Cavite. Access government services, officials, budgets, and public information."
        keywords="General Trias City, Cavite, BetterGeneralTrias, government, services, transparency, officials, budget"
      />
      <main>
        <Hero />
        <ServicesSection />
        <StatsSection />
        <GovernmentQuickLinks />
        <HistorySection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
