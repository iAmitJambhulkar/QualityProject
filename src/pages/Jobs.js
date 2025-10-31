import React, { useState } from 'react';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('career');

  return (
    <div>
      {/* Jobs Hero */}
      <section className="hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build a rewarding career with Quality Housekeeping India</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section style={{ padding: '40px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="job-tabs">
            <button 
              className={`job-tab ${activeTab === 'career' ? 'active' : ''}`}
              onClick={() => setActiveTab('career')}
            >
              Career Jobs
            </button>
            <button 
              className={`job-tab ${activeTab === 'housekeeping' ? 'active' : ''}`}
              onClick={() => setActiveTab('housekeeping')}
            >
              Housekeeping Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Career Jobs Content */}
      {activeTab === 'career' && (
        <div>
          <section style={{ padding: '60px 0' }}>
            <div className="container">
              <div className="job-content">
                <h2 className="section-title">Housekeeping Field Manager In Nagpur</h2>
                <p className="intro-text">
                  Our career page is a valuable resource for individuals interested in pursuing a career in housekeeping. Our page typically includes information on job duties, required skills and qualifications, training and education requirements, career advancement opportunities, and compensation.
                </p>

                <div className="job-section">
                  <h3>Job Duties Associated With A Housekeeping Position</h3>
                  <p>
                    Cleaning and sanitizing rooms, making beds, replenishing linens and amenities, vacuuming and dusting, and performing other tasks as assigned. It's important to clearly understand the physical demands of the job, as housekeeping can be physically demanding work that requires standing for long periods of time, lifting heavy objects, and bending and stretching.
                  </p>
                </div>

                <div className="job-section">
                  <h3>Required Skills and Qualifications</h3>
                  <p>
                    Attention to detail, good time management skills, the ability to work independently or as part of a team, excellent communication skills, and a friendly and professional demeanor is required. Experience in housekeeping or related fields, such as hospitality or janitorial services, and a high school diploma or equivalent will be an added advantage.
                  </p>
                </div>

                <div className="job-section">
                  <h3>Training and Education Requirements</h3>
                  <p>
                    On-the-job training, in-house training programs, or formal education through vocational schools or community colleges is required.
                  </p>
                </div>

                <div className="job-section">
                  <h3>Career Advancement Opportunities</h3>
                  <p>
                    Opportunities for promotion to Housekeeping Supervisor or Manager, cross-training in other areas of the hotel or resort, or professional development opportunities such as certifications or continuing education programs.
                  </p>
                  <div className="highlight-box">
                    <h4>Housekeeping Supervisor</h4>
                    <p>
                      Multiple housekeeping supervision positions are open to hire for the organization's cleaning management tasks. Our open positions welcome both male and female applicants since our organization embraces diversity which brings distinct viewpoints to our team. Your role as Housekeeping Supervisor means directing housekeeping staff performance to achieve timely execution of high-quality work. The team supervisor performs multiple duties which include both new employee education, guidance and quality control evaluations while administrating cleaning materials and implementing health, safety and company directives. You must handle the scheduling of housekeeping staff to fill all shifts related to serving our clients effectively.
                    </p>
                  </div>
                </div>

                <div className="job-section">
                  <h3>Compensation</h3>
                  <p>
                    Hourly wages, benefits, and other incentives such as performance bonuses or employee discounts. Interested candidates can apply for open positions or submit their resumes for future consideration.
                  </p>
                </div>

                <div className="job-positions">
                  <h3>Open Positions</h3>
                  <div className="position-tags">
                    <span className="position-tag">Housekeeping Manager</span>
                    <span className="position-tag">Housekeeping Supervisor</span>
                    <span className="position-tag">Area Manager</span>
                  </div>
                </div>

                <div className="summary-box">
                  <p>
                    Our career page can be a valuable resource for job seekers, providing a clear understanding of job duties, required skills and qualifications, training and education requirements, career advancement opportunities, and compensation. By attracting and retaining qualified staff, we can ensure a high level of service and satisfaction for our clients, while providing rewarding career opportunities for our housekeeping staff.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
            <div className="container">
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
                Frequently Asked Questions
              </h2>
              <div className="faq-grid">
                <div className="faq-card">
                  <h4>What is the role of a Housekeeper?</h4>
                  <p>
                    Housekeepers are responsible for maintaining cleanliness and tidiness in both residential and commercial settings. They typically find employment in hotels, resorts, and private residences.
                  </p>
                </div>
                
                <div className="faq-card">
                  <h4>What are the specific duties and responsibilities of a Housekeeper?</h4>
                  <p>
                    Housekeepers are responsible for cleaning and organizing various spaces, such as bedrooms, bathrooms, lobbies, and common areas. They must report any safety hazards to the homeowner or manager in charge and ensure that all cleaning tasks are completed efficiently and effectively. Additional responsibilities may include changing linens, washing dishes, doing laundry, and other light household chores.
                  </p>
                </div>
                
                <div className="faq-card">
                  <h4>What qualities are important for a Housekeeper to possess?</h4>
                  <p>
                    A good Housekeeper should possess strong attention to detail, reliability, trustworthiness, and flexibility. They should be physically fit and able to stand, squat, kneel, bend and be on their feet for extended periods of time. Additionally, excellent communication skills and adherence to standard policies and procedures are crucial.
                  </p>
                </div>
                
                <div className="faq-card">
                  <h4>Who does a Housekeeper typically work with?</h4>
                  <p>
                    Housekeepers work with a variety of individuals, including property owners, guests, and other housekeeping and maintenance staff. They may report to a Housekeeping Manager or Housekeeping Supervisor depending on the organization.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Housekeeping Jobs Content */}
      {activeTab === 'housekeeping' && (
        <div>
          <section style={{ padding: '60px 0' }}>
            <div className="container">
              <div className="job-content">
                <h2 className="section-title">Housekeeping & Cleaning Jobs In Nagpur India</h2>
                <p className="intro-text">
                  Quality Housekeeping Services understands that cleanliness makes clients feel welcome in their environment. We commit to excellence as we are seeking dependable experts who want to deliver supreme housekeeping services. Our company welcomes people who love maintaining perfect spaces and providing excellent support to check out our valuable career possibilities.
                </p>

                <div className="job-section">
                  <h3>Why Choose a Career in Housekeeping?</h3>
                  <p>
                    The housekeeping discipline extends beyond traditional cleaning tasks to establish comfortable and peaceful environments which make users satisfied. Part of your responsibility will be to maintain absolute cleanliness in various areas under our care. At our company, you can pursue various housekeeping positions which allow both professional growth and active contribution to our mission. Success at our organization depends entirely on our employees which drives our commitment to create environments for their achievement.
                  </p>
                </div>

                <div className="job-section">
                  <h3>Available Positions</h3>
                  <div className="highlight-box">
                    <h4>Housekeeping Staff</h4>
                    <p>
                      There are positions open for the housekeeping staff. The housekeeping staff upholds responsibility for keeping facilities' and other areas clean and tidy. Your strong attention to details together with your commitment to implementing high standards enables our clients to find a welcoming and comfortable environment. The suitable candidate needs to show reliability and strong work ethic with a preference for independent work or teamwork. Your commitment to maintaining cleanliness alongside excellence in customer satisfaction positions you to bring substantial value to our housekeeping operations.
                    </p>
                  </div>
                </div>

                <div className="job-section">
                  <h3>Job Duties Associated With A Housekeeping Position</h3>
                  <p>
                    Cleaning and sanitizing rooms, making beds, replenishing linens and amenities, vacuuming and dusting, and performing other tasks as assigned. It's important to clearly understand the physical demands of the job, as housekeeping can be physically demanding work that requires standing for long periods of time, lifting heavy objects, and bending and stretching.
                  </p>
                </div>

                <div className="job-section">
                  <h3>Qualifications for the Housekeeping Jobs</h3>
                  <ul className="qualifications-list">
                    <li>Working experience in housekeeping or any related field must already exist</li>
                    <li>Strong leadership and organizational skills</li>
                    <li>The supervisor must maintain excellent attention to small details combined with absolute commitment to delivering premium service quality</li>
                    <li>The selected candidate will demonstrate expertise in training while mentoring their team members and developing their motivation level</li>
                    <li>The candidate needs excellent communication skills together with strong abilities to work well with others</li>
                    <li>Flexible and dependable with a positive attitude</li>
                  </ul>
                </div>

                <div className="job-section">
                  <h3>Why Work with Us?</h3>
                  <p>
                    Our company provides employees with an opportunity beyond typical employment because we strive to develop a dynamic work team. We demonstrate an environment of support for our employees that creates opportunities to grow your abilities along with advancing your career. Our organization delivers competitive pay while offering continuous training services and professional growth prospects. All employees within our team experience a respectful setting which allows them to work cooperatively because they receive proper acknowledgment for their work.
                  </p>
                </div>

                <div className="job-section">
                  <h3>How to Apply?</h3>
                  <p>
                    We welcome applications from candidates wishing to work for a company devoted to skilled labor while delivering satisfied customers. Carefully browse through the available housekeeping positions and submit your applications to us as soon as possible. The career page along with our recruitment team accepts applications or you can contact us directly for further details. Once we scan through your details and feel you are a perfect fit we shall reach out to you without delay. Together we will establish welcoming environments through clean spaces for all our clients. At our company, you can join our team to begin a special experience in housekeeping services and upskill yourself in this field.
                  </p>
                  <p style={{ marginTop: '20px', fontWeight: '600' }}>
                    Interested candidates can apply for open positions or submit their resumes for future consideration.
                  </p>
                </div>

                <div className="job-positions">
                  <h3>Open Positions</h3>
                  <div className="position-tags">
                    <span className="position-tag">Housekeeping Staff</span>
                    <span className="position-tag">Housekeeping Boys - Male/Female</span>
                    <span className="position-tag">Ward Boy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Apply CTA Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Join Our Team?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
            Send us your resume and we'll get back to you as soon as possible
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:info@qualityhousekeepingindia.com" className="btn btn-large" style={{ backgroundColor: 'white', color: '#667eea' }}>
              Send Resume
            </a>
            <a href="/contact" className="btn btn-large btn-secondary">
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
