import { NuqsAdapter } from 'nuqs/adapters/react';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ui/ScrollToTop';
import Services from './pages/Services';
import Document from './pages/Document';
import Government from './pages/Government';
import TouristSpots from './pages/TouristSpots';
import CityProfile from './pages/CityProfile';
import Officials from './pages/Officials';
import FullDisclosure from './pages/FullDisclosure';
import AnnualBudget from './pages/AnnualBudget';
import SALN from './pages/SALN';
import FOIReleases from './pages/FOIReleases';
import Downloads from './pages/Downloads';
import AnnualReport from './pages/AnnualReport';
import InfrastructureProjects from './pages/InfrastructureProjects';
import DevelopmentProjects from './pages/DevelopmentProjects';
import WhereToStay from './pages/WhereToStay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <NuqsAdapter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <SpeedInsights />
            {/* pt-[116px] compensates for fixed navbar on all pages.
                The Home hero cancels this with -mt-[116px] to go full-bleed. */}
            <div className="flex-1 flex flex-col pt-[116px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:category" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/tourism/explore-tourist-spots" element={<TouristSpots />} />
              <Route path="/services/tourism/where-to-stay" element={<WhereToStay />} />
              <Route
                path="/services/:category/:documentSlug"
                element={<Document categoryType="service" />}
              />
              <Route path="/government/:category" element={<Government />} />
              <Route path="/government" element={<Government />} />
              <Route path="/government/departments/officials" element={<Officials />} />
              <Route path="/government/transparency-documents/full-disclosure" element={<FullDisclosure />} />
              <Route path="/government/transparency-documents/annual-budget" element={<AnnualBudget />} />
              <Route path="/government/transparency-documents/saln" element={<SALN />} />
              <Route path="/government/transparency-documents/foi-releases" element={<FOIReleases />} />
              <Route path="/government/transparency-documents/downloads" element={<Downloads />} />
              <Route path="/government/reports-and-statistics/city-profile" element={<CityProfile />} />
              <Route path="/government/reports-and-statistics/annual-report" element={<AnnualReport />} />
              <Route path="/government/reports-and-statistics/infrastructure-projects" element={<InfrastructureProjects />} />
              <Route path="/development-projects" element={<DevelopmentProjects />} />
              <Route
                path="/government/:category/:documentSlug"
                element={<Document categoryType="government" />}
              />
              <Route path="/:lang/:documentSlug" element={<Document />} />
              <Route path="/:documentSlug" element={<Document />} />
            </Routes>
            </div>
            <Footer />
          </div>
        </NuqsAdapter>
      </Router>
    </HelmetProvider>
  );
}

export default App;
