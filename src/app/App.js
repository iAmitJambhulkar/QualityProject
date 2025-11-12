import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingEnquiryBtn from '../components/FloatingEnquiryBtn';
import ScrollToTop from '../components/ScrollToTop';
import './App.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'));
// Nagpur Services
const OfficeHousekeeping = lazy(() => import('../pages/nagpur/OfficeHousekeepingService'));
const HotelHousekeeping = lazy(() => import('../pages/nagpur/HotelHousekeepingService'));
const HospitalHousekeeping = lazy(() => import('../pages/nagpur/HospitalHousekeepingService'));
const SalonHousekeeping = lazy(() => import('../pages/nagpur/SalonHousekeeping'));
const BankHousekeeping = lazy(() => import('../pages/nagpur/BankHousekeeping'));
const GuesthouseHousekeeping = lazy(() => import('../pages/nagpur/GuesthouseHousekeeping'));
const MallHousekeeping = lazy(() => import('../pages/nagpur/MallHousekeeping'));
const GymCleaning = lazy(() => import('../pages/nagpur/GymCleaningService'));
const SchoolHousekeeping = lazy(() => import('../pages/nagpur/SchoolHousekeepingService'));
const CollegeHousekeeping = lazy(() => import('../pages/nagpur/CollegeHousekeepingService'));
const SecurityGuardServices = lazy(() => import('../pages/nagpur/SecurityGuardServices'));
const HousekeepingManpower = lazy(() => import('../pages/nagpur/HousekeepingManpower'));
const HomeCleaning = lazy(() => import('../pages/nagpur/HomeCleaning'));
const SofaCleaning = lazy(() => import('../pages/nagpur/SofaCleaning'));
const DeepCleaning = lazy(() => import('../pages/nagpur/DeepCleaning'));
const CarpetCleaning = lazy(() => import('../pages/nagpur/CarpetCleaning'));
const ChairCleaning = lazy(() => import('../pages/nagpur/ChairCleaning'));
const BuildingCleaning = lazy(() => import('../pages/nagpur/BuildingCleaning'));
const FloorCleaning = lazy(() => import('../pages/nagpur/FloorCleaning'));
const TilesCleaning = lazy(() => import('../pages/nagpur/TilesCleaning'));
const OfficeBoyServices = lazy(() => import('../pages/nagpur/OfficeBoyServices'));

// Jabalpur Services
const OfficeHousekeepingJabalpur = lazy(() => import('../pages/jabalpur/OfficeHousekeepingJabalpur'));
const BankHousekeepingJabalpur = lazy(() => import('../pages/jabalpur/BankHousekeepingJabalpur'));
const GuesthouseHousekeepingJabalpur = lazy(() => import('../pages/jabalpur/GuesthouseHousekeepingJabalpur'));
const HousekeepingManpowerJabalpur = lazy(() => import('../pages/jabalpur/HousekeepingManpowerJabalpur'));
const HomeCleaningJabalpur = lazy(() => import('../pages/jabalpur/HomeCleaningJabalpur'));
const HotelHousekeepingJabalpur = lazy(() => import('../pages/jabalpur/HotelHousekeepingJabalpur'));
const HospitalHousekeepingJabalpur = lazy(() => import('../pages/jabalpur/HospitalHousekeepingJabalpur'));
const SchoolHousekeepingJabalpur = lazy(() => import('../pages/jabalpur/SchoolHousekeepingJabalpur'));
const CollegeHousekeepingJabalpur = lazy(() => import('../pages/jabalpur/CollegeHousekeepingJabalpur'));
const GymCleaningJabalpur = lazy(() => import('../pages/jabalpur/GymCleaningJabalpur'));
const SofaCleaningJabalpur = lazy(() => import('../pages/jabalpur/SofaCleaningJabalpur'));
const CarpetCleaningJabalpur = lazy(() => import('../pages/jabalpur/CarpetCleaningJabalpur'));
const OfficeBoyServicesJabalpur = lazy(() => import('../pages/jabalpur/OfficeBoyServicesJabalpur'));
const HousekeepingAndCleaning = lazy(() => import('../pages/jabalpur/HousekeepingAndCleaning'));
const OfficeChairCleaning = lazy(() => import('../pages/jabalpur/OfficeChairCleaning'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Blogs = lazy(() => import('../pages/blogs/Blogs'));
const BlogHouseCleaningServices = lazy(() => import('../pages/blogs/BlogHouseCleaningServices'));
const BlogOfficeHousekeeping = lazy(() => import('../pages/blogs/BlogOfficeHousekeeping'));
const BlogSalonHousekeeping = lazy(() => import('../pages/blogs/BlogSalonHousekeeping'));
const BlogGuesthouseHousekeeping = lazy(() => import('../pages/blogs/BlogGuesthouseHousekeeping'));
const BlogHospitalHousekeeping = lazy(() => import('../pages/blogs/BlogHospitalHousekeeping'));
const BlogDeepCleaning = lazy(() => import('../pages/blogs/BlogDeepCleaning'));
const BlogSofaCarpetCleaning = lazy(() => import('../pages/blogs/BlogSofaCarpetCleaning'));
const BlogTemplate = lazy(() => import('../pages/blogs/BlogTemplate'));
const Jobs = lazy(() => import('../pages/Jobs'));
const Contact = lazy(() => import('../pages/Contact'));
const Quote = lazy(() => import('../components/Quote'));

// Loading component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#1976D2'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:location/:service" element={<ServiceDetail />} />
              <Route path="/office-housekeeping" element={<OfficeHousekeeping />} />
              <Route path="/office-housekeeping/:location" element={<OfficeHousekeeping />} />
              <Route path="/office-housekeeping-jabalpur" element={<OfficeHousekeepingJabalpur />} />
              <Route path="/hotel-housekeeping" element={<HotelHousekeeping />} />
              <Route path="/hotel-housekeeping/:location" element={<HotelHousekeeping />} />
              <Route path="/hotel-housekeeping-jabalpur" element={<HotelHousekeepingJabalpur />} />
              <Route path="/hospital-housekeeping" element={<HospitalHousekeeping />} />
              <Route path="/hospital-housekeeping/:location" element={<HospitalHousekeeping />} />
              <Route path="/hospital-housekeeping-jabalpur" element={<HospitalHousekeepingJabalpur />} />
              <Route path="/salon-housekeeping" element={<SalonHousekeeping />} />
              <Route path="/salon-housekeeping/:location" element={<SalonHousekeeping />} />
              <Route path="/bank-housekeeping" element={<BankHousekeeping />} />
              <Route path="/bank-housekeeping/:location" element={<BankHousekeeping />} />
              <Route path="/bank-housekeeping-jabalpur" element={<BankHousekeepingJabalpur />} />
              <Route path="/guesthouse-housekeeping" element={<GuesthouseHousekeeping />} />
              <Route path="/guesthouse-housekeeping/:location" element={<GuesthouseHousekeeping />} />
              <Route path="/guesthouse-housekeeping-jabalpur" element={<GuesthouseHousekeepingJabalpur />} />
              <Route path="/mall-housekeeping" element={<MallHousekeeping />} />
              <Route path="/mall-housekeeping/:location" element={<MallHousekeeping />} />
              <Route path="/gym-cleaning" element={<GymCleaning />} />
              <Route path="/gym-cleaning/:location" element={<GymCleaning />} />
              <Route path="/gym-cleaning-jabalpur" element={<GymCleaningJabalpur />} />
              <Route path="/school-housekeeping" element={<SchoolHousekeeping />} />
              <Route path="/school-housekeeping/:location" element={<SchoolHousekeeping />} />
              <Route path="/school-housekeeping-jabalpur" element={<SchoolHousekeepingJabalpur />} />
              <Route path="/college-housekeeping" element={<CollegeHousekeeping />} />
              <Route path="/college-housekeeping/:location" element={<CollegeHousekeeping />} />
              <Route path="/college-housekeeping-jabalpur" element={<CollegeHousekeepingJabalpur />} />
              <Route path="/security-guard-services" element={<SecurityGuardServices />} />
              <Route path="/security-guard-services/:location" element={<SecurityGuardServices />} />
              <Route path="/housekeeping-manpower" element={<HousekeepingManpower />} />
              <Route path="/housekeeping-manpower/:location" element={<HousekeepingManpower />} />
              <Route path="/housekeeping-manpower-jabalpur" element={<HousekeepingManpowerJabalpur />} />
              <Route path="/home-cleaning" element={<HomeCleaning />} />
              <Route path="/home-cleaning/:location" element={<HomeCleaning />} />
              <Route path="/home-cleaning-jabalpur" element={<HomeCleaningJabalpur />} />
              <Route path="/sofa-cleaning" element={<SofaCleaning />} />
              <Route path="/sofa-cleaning/:location" element={<SofaCleaning />} />
              <Route path="/sofa-cleaning-jabalpur" element={<SofaCleaningJabalpur />} />
              <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
              <Route path="/carpet-cleaning/:location" element={<CarpetCleaning />} />
              <Route path="/carpet-cleaning-jabalpur" element={<CarpetCleaningJabalpur />} />
              <Route path="/chair-cleaning" element={<ChairCleaning />} />
              <Route path="/chair-cleaning/:location" element={<ChairCleaning />} />
              <Route path="/building-cleaning" element={<BuildingCleaning />} />
              <Route path="/building-cleaning/:location" element={<BuildingCleaning />} />
              <Route path="/floor-cleaning" element={<FloorCleaning />} />
              <Route path="/floor-cleaning/:location" element={<FloorCleaning />} />
              <Route path="/deep-cleaning" element={<DeepCleaning />} />
              <Route path="/deep-cleaning/:location" element={<DeepCleaning />} />
              <Route path="/tiles-cleaning" element={<TilesCleaning />} />
              <Route path="/tiles-cleaning/:location" element={<TilesCleaning />} />
              <Route path="/office-boy-services" element={<OfficeBoyServices />} />
              <Route path="/office-boy-services/:location" element={<OfficeBoyServices />} />
              <Route path="/office-boy-services-jabalpur" element={<OfficeBoyServicesJabalpur />} />
              <Route path="/housekeeping-and-cleaning" element={<HousekeepingAndCleaning />} />
              <Route path="/housekeeping-and-cleaning/:location" element={<HousekeepingAndCleaning />} />
              <Route path="/office-chair-cleaning" element={<OfficeChairCleaning />} />
              <Route path="/office-chair-cleaning/:location" element={<OfficeChairCleaning />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/house-cleaning-services" element={<BlogHouseCleaningServices />} />
              <Route path="/blogs/office-housekeeping" element={<BlogOfficeHousekeeping />} />
              <Route path="/blogs/salon-housekeeping" element={<BlogSalonHousekeeping />} />
              <Route path="/blogs/guesthouse-housekeeping" element={<BlogGuesthouseHousekeeping />} />
              <Route path="/blogs/hospital-housekeeping" element={<BlogHospitalHousekeeping />} />
              <Route path="/blogs/deep-cleaning" element={<BlogDeepCleaning />} />
              <Route path="/blogs/sofa-carpet-cleaning" element={<BlogSofaCarpetCleaning />} />
              <Route path="/blogs/:slug" element={<BlogTemplate />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingEnquiryBtn />
      </div>
    </Router>
  );
}

export default App;