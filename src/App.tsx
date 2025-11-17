import { BannerCarousel } from "./components/BannerCarousel";
import { CompanyOverview } from "./components/CompanyOverview";
import { MissionVision } from "./components/MissionVision";
import { CoreValues } from "./components/CoreValues";
import { KeyBusinessSegments } from "./components/KeyBusinessSegments";
import { SemiconductorExpertise } from "./components/SemiconductorExpertise";
import { MarketPositioning } from "./components/MarketPositioning";
import { ServicesPortfolio } from "./components/ServicesPortfolio";
import { OurApproach } from "./components/OurApproach";
import { LeadershipTalent } from "./components/LeadershipTalent";
import { FutureGrowth } from "./components/FutureGrowth";
//import { Services } from "./components/Services";
//import { Expertise } from "./components/Expertise";
//import { WhyChooseUs } from "./components/WhyChooseUs";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BannerCarousel />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
      <KeyBusinessSegments />
      <SemiconductorExpertise />
      <MarketPositioning />
      <ServicesPortfolio />
      <OurApproach />
      <LeadershipTalent />
      <FutureGrowth />
      
     
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}