import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryModal from '../components/EnquiryModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClientReviews = () => {
    const reviewsSection = document.querySelector('.reviews-section');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeeAllReviews = () => {
    window.open('https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDYstEyqMisyYLRSNagwTkoxSTY0TEq1MDIztTROsjKoSDM1SkmzMDZJNU8zSDUxS_OSLSxNzMksqVTIyC8tTs1OTS3IzEtXKE4tKstMTi0GACy7Gy8&q=quality+housekeeping+services&rlz=1C1ONGR_enIN1042IN1042&oq=qu&aqs=chrome.2.69i60j69i57j46i39i175i199j46i67i131i199i433i465j69i60l4.3703j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3bd4c11be826593b:0xf52df834e7f0e46f,1,,,,', '_blank');
  };

  const handleSendEnquiry = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRateReviews = () => {
    window.open('https://www.google.com/search?hl=en-IN&gl=in&q=Shop+No.+39,+First+Floor,+Quality+Housekeeping+Services+In+Nagpur+India,+Awale+Babu+Square,+NIT+Complex,+Bhankhera,+Lashkari+Bagh,+Nagpur,+Maharashtra+440017&ludocid=17667049819357635695&lsig=AB86z5VpO2_T9s2cRHf8XemNpESM#lrd=0x3bd4c11be826593b:0xf52df834e7f0e46f,3','_blank');
  };

  return (
    <div>
      {/* Full Screen Hero Section with Background Image */}
      <section className="hero-fullscreen">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Quality Housekeeping Services In Nagpur India</h1>
          <p className="hero-subtitle">
            Professional, Eco-Friendly & Reliable Housekeeping Solutions
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Free Quote
            </Link>
            <button onClick={handleSendEnquiry} className="btn btn-secondary btn-large">
              Request a Call
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-block">
               <h2>Quality Housekeeping Services In Nagpur India</h2>
              <p className="intro-text">
                Housekeeping is also about the space being healthy for you and your family members to live in or for your staff to work in. Quality Housekeeping Services make use of modern technology and high-quality chemicals to make sure that your house or commercial Or Industrial space gets the proper housekeeping services to make it free from diseases and allergies. We are a professional housekeeping service provider and we make use of eco-friendly, natural, and pet safe products. We do not use harsh chemicals because we understand the ill effects that it has on your health and also because such substances harm the environment.
              </p>
            </div>

            <div className="content-block">
              <h2>Why should you hire our housekeeping services?</h2>
              <p>
                Quality Housekeeping Services are a professional team that takes care to give you a spotless and germ-free space. You must not compare our housekeeping services with that offered by the housekeeping maids. We are experts and make use of modern technology and products that can reach and clean areas that a regular brooming and mopping cannot achieve.
              </p>
            </div>

            <div className="content-block">
              <h3>Benefits of hiring a professional housekeeping services:</h3>
              <p>There are some additional benefits of hiring the professional housekeeping services:</p>
              <ul className="benefits-list">
                <li>● Hiring us means that you can manage your time well and effectively and not worry about the housekeeping chores with affordable Housekeeping Services.</li>
                <li>● You can stay stress free while we take care of the monotonous job of housekeeping for you.</li>
                <li>● We manage employees and in case of need we offer guaranteed replacement.</li>
                <li>● Our professionals plan the housekeeping as per your schedule.</li>
                <li>● We have tools and technology that is not available with the housekeeping maids.</li>
                <li>● We do our job with complete sincerity with follow all your instructions.</li>
                <li>● We value your needs. Our staff is well trained, skilled and well equipped.</li>
                <li>● We bring the Housekeeping supplies along with us. This saves you from the task of arranging all the cleaning materials required to deep clean your home.</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>What makes us different?</h2>
              <p>
                We hire our housekeeping staff selectively. You can rest assured that they are well trained to carry out the tasks. The housekeeping staff is continuously trained in using the latest machinery and equipment that they can use when cleaning your home. Furthermore, we are punctual and that is never a worry when you hire us for your housekeeping needs. We are never late and once you give us the instructions you can rest assured that all the housekeeping tasks will be done surpassing your expectations.
              </p>
            </div>

            <div className="content-block">
              <h2>Cleaning Services Offered By Quality Housekeeping Services</h2>
              <p>
                The importance of cleanliness is something that we have been taught from our former years. In school, at home as well as in our workplace, there is always a constant push to keep our surroundings clean. Hygiene is an important part of life and it also lets you create your image. Quality Housekeeping Services understand the importance of professional cleaning services and this is why we take care to offer the best services to keep your surroundings neat, clean and healthy to live in.
              </p>
            </div>

            <div className="content-block">
              <h3>How is a professional cleaning service company different?</h3>
              <p>
                You may hire maids and cleaning staff to clean your home and your commercial space. However, they are untrained and offer the same type of cleaning for every customer. We, however, understand that every customer is different as are their cleaning needs. We thus offer customized services depending on the place that needs to be cleaned and as per the cleaning needs. Our relevant cleaning services are designed to offer you the best cleaning solution possible. Our solutions are tailor-made to clean special parts of your home or your commercial space.
              </p>
            </div>

            <div className="content-block">
              <h3>Cleaning solutions that we offer to our clients</h3>
              <p>
                Quality Housekeeping Services has a range of cleaning services and packages that clients can choose from. We offer domestic as well as commercial cleaning services. If you wish to revamp your home and make it look different then you can call us to take care of your cleaning needs. Cleaning your office space is equally important because it creates the first impact on your client's minds. We offer professional cleaning solutions for your commercial space. We clean your building, deep cleaning, floor cleaning, granite cleaning, glass cleaning, tile cleaning, window cleaning as well as cleaning of your wooden floor.
              </p>
            </div>

            <div className="content-block">
              <h2>Why should you hire us For cleaning services?</h2>
              <p>
                Quality Housekeeping Services comes with years of experience and has a strong footing today in the Domestic, Corporate and Industrial cleaning industry. We have a team of specialists and our workforce is Well skilled, trained, Equipped and has gone through intensive training. We are the best in our work and we also have managers that monitor and supervise our cleaning staff to make sure that they give you the best cleaning services as per your demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
<section className="action-buttons-section py-8 text-center">
  <div className="container mx-auto">
    {/* Headline */}
    <h2
      style={{
        textAlign: 'center',
        marginBottom: '50px',
        fontSize: '2.5rem',
      }}
    >
      Client Reviews
    </h2>

    {/* Buttons in a row */}
    <div className="action-buttons flex flex-wrap justify-center gap-4">
      <button
        className="action-btn flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl transition hover:bg-green-700"
        onClick={handleSeeAllReviews}
      >
        <span className="btn-icon text-lg">👀</span>
        <span className="btn-text">See All Our Reviews</span>
      </button>

      <button
        className="action-btn flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl transition hover:bg-green-700"
        onClick={handleRateReviews}
      >
        <span className="btn-icon text-lg">⭐</span>
        <span className="btn-text">Rate & Reviews</span>
      </button>
    </div>
  </div>
</section>


      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Home;
