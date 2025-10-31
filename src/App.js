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
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogHouseCleaningServices from './pages/BlogHouseCleaningServices';
import BlogOfficeHousekeeping from './pages/BlogOfficeHousekeeping';
import BlogSalonHousekeeping from './pages/BlogSalonHousekeeping';
import BlogGuesthouseHousekeeping from './pages/BlogGuesthouseHousekeeping';
import BlogCollegeHousekeeping from './pages/BlogCollegeHousekeeping';
import BlogGymHousekeeping from './pages/BlogGymHousekeeping';
import BlogHospitalHousekeeping from './pages/BlogHospitalHousekeeping';
import BlogSchoolHousekeeping from './pages/BlogSchoolHousekeeping';
import BlogDeepCleaning from './pages/BlogDeepCleaning';
import BlogSofaCarpetCleaning from './pages/BlogSofaCarpetCleaning';
import BlogTemplate from './pages/BlogTemplate';
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