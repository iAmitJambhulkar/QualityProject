import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingEnquiryBtn from './components/FloatingEnquiryBtn';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import OfficeHousekeeping from './pages/OfficeHousekeeping';
import HotelHousekeeping from './pages/HotelHousekeeping';
import HospitalHousekeeping from './pages/HospitalHousekeeping';
import SalonHousekeeping from './pages/SalonHousekeeping';
import BankHousekeeping from './pages/BankHousekeeping';
import BankHousekeepingJabalpur from './pages/BankHousekeepingJabalpur';
import GuesthouseHousekeeping from './pages/GuesthouseHousekeeping';
import GuesthouseHousekeepingJabalpur from './pages/GuesthouseHousekeepingJabalpur';
import MallHousekeeping from './pages/MallHousekeeping';
import GymCleaning from './pages/GymCleaning';
import SchoolHousekeeping from './pages/SchoolHousekeeping';
import CollegeHousekeeping from './pages/CollegeHousekeeping';
import SecurityGuardServices from './pages/SecurityGuardServices';
import HousekeepingManpower from './pages/HousekeepingManpower';
import HousekeepingManpowerJabalpur from './pages/HousekeepingManpowerJabalpur';
import HomeCleaning from './pages/HomeCleaning';
import HomeCleaningJabalpur from './pages/HomeCleaningJabalpur';
import SofaCleaning from './pages/SofaCleaning';
import SofaCleaningJabalpur from './pages/SofaCleaningJabalpur';
import CarpetCleaning from './pages/CarpetCleaning';
import CarpetCleaningJabalpur from './pages/CarpetCleaningJabalpur';
import ChairCleaning from './pages/ChairCleaning';
import BuildingCleaning from './pages/BuildingCleaning';
import FloorCleaning from './pages/FloorCleaning';
import DeepCleaning from './pages/DeepCleaning';
import TilesCleaning from './pages/TilesCleaning';
import OfficeBoyServices from './pages/OfficeBoyServices';
import OfficeBoyServicesJabalpur from './pages/OfficeBoyServicesJabalpur';
import HousekeepingAndCleaning from './pages/HousekeepingAndCleaning';
import OfficeChairCleaning from './pages/OfficeChairCleaning';
import Gallery from './pages/Gallery';
import Blogs from './pages/blogs/Blogs';
import BlogHouseCleaningServices from './pages/blogs/BlogHouseCleaningServices';
import BlogOfficeHousekeeping from './pages/blogs/BlogOfficeHousekeeping';
import BlogSalonHousekeeping from './pages/blogs/BlogSalonHousekeeping';
import BlogGuesthouseHousekeeping from './pages/blogs/BlogGuesthouseHousekeeping';
import BlogCollegeHousekeeping from './pages/blogs/BlogCollegeHousekeeping';
import BlogGymHousekeeping from './pages/blogs/BlogGymHousekeeping';
import BlogHospitalHousekeeping from './pages/blogs/BlogHospitalHousekeeping';
import BlogSchoolHousekeeping from './pages/blogs/BlogSchoolHousekeeping';
import BlogDeepCleaning from './pages/blogs/BlogDeepCleaning';
import BlogSofaCarpetCleaning from './pages/blogs/BlogSofaCarpetCleaning';
import BlogTemplate from './pages/blogs/BlogTemplate';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:location/:service" element={<ServiceDetail />} />
            <Route path="/office-housekeeping" element={<OfficeHousekeeping />} />
            <Route path="/office-housekeeping/:location" element={<OfficeHousekeeping />} />
            <Route path="/hotel-housekeeping" element={<HotelHousekeeping />} />
            <Route path="/hotel-housekeeping/:location" element={<HotelHousekeeping />} />
            <Route path="/hospital-housekeeping" element={<HospitalHousekeeping />} />
            <Route path="/hospital-housekeeping/:location" element={<HospitalHousekeeping />} />
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
            <Route path="/school-housekeeping" element={<SchoolHousekeeping />} />
            <Route path="/school-housekeeping/:location" element={<SchoolHousekeeping />} />
            <Route path="/college-housekeeping" element={<CollegeHousekeeping />} />
            <Route path="/college-housekeeping/:location" element={<CollegeHousekeeping />} />
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
            <Route path="/blogs/college-housekeeping" element={<BlogCollegeHousekeeping />} />
            <Route path="/blogs/gym-housekeeping" element={<BlogGymHousekeeping />} />
            <Route path="/blogs/hospital-housekeeping" element={<BlogHospitalHousekeeping />} />
            <Route path="/blogs/school-housekeeping" element={<BlogSchoolHousekeeping />} />
            <Route path="/blogs/deep-cleaning" element={<BlogDeepCleaning />} />
            <Route path="/blogs/sofa-carpet-cleaning" element={<BlogSofaCarpetCleaning />} />
            <Route path="/blogs/:slug" element={<BlogTemplate />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingEnquiryBtn />
      </div>
    </Router>
  );
}

export default App;