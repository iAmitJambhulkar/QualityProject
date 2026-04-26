import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Animated Stats Counter ──────────────────────────── */
const useCountUp = (target, duration = 2000, isVisible) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);
  return count;
};

const StatCard = ({ icon, value, suffix, label, isVisible }) => {
  const count = useCountUp(value, 1800, isVisible);
  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

/* ── Why Choose Us Data ──────────────────────────── */
const whyFeatures = [
  { icon: '🌿', color: 'green', title: 'Eco-Friendly Products', desc: 'We use natural, pet-safe, non-toxic chemicals that protect your family and the environment.' },
  { icon: '🏆', color: 'blue', title: 'ISO 9001-2015 Certified', desc: 'Our quality management system is internationally certified, ensuring world-class service standards.' },
  { icon: '🎓', color: 'blue', title: 'Trained Professionals', desc: 'Our staff undergoes intensive training in hygiene, etiquettes, and modern cleaning technology.' },
  { icon: '🔄', color: 'green', title: 'Guaranteed Replacement', desc: 'We manage employees and offer guaranteed replacements to ensure uninterrupted service.' },
  { icon: '⏰', color: 'yellow', title: 'Punctual & Reliable', desc: 'We are never late. Once you give instructions, rest assured everything will exceed expectations.' },
  { icon: '📦', color: 'yellow', title: 'Supplies Included', desc: 'We bring all cleaning materials and modern equipment — no arranging hassles for you.' },
];

/* ── Services Quick Links ────────────────────────────── */
const quickServices = [
  { icon: '🏢', title: 'Office Housekeeping', link: '/office-housekeeping/nagpur' },
  { icon: '🏨', title: 'Hotel Housekeeping', link: '/hotel-housekeeping/nagpur' },
  { icon: '🏥', title: 'Hospital Housekeeping', link: '/hospital-housekeeping/nagpur' },
  { icon: '🏠', title: 'Home Cleaning', link: '/home-cleaning/nagpur' },
  { icon: '🛋️', title: 'Sofa Cleaning', link: '/sofa-cleaning/nagpur' },
  { icon: '🧹', title: 'Deep Cleaning', link: '/deep-cleaning/nagpur' },
  { icon: '🏫', title: 'School Housekeeping', link: '/school-housekeeping/nagpur' },
  { icon: '🛡️', title: 'Security Guard Services', link: '/security-guard-services/nagpur' },
  { icon: '🪑', title: 'Chair Cleaning', link: '/chair-cleaning/nagpur' },
];

const Home = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSeeAllReviews = () => {
    window.open('https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDYstEyqMisyYLRSNagwTkoxSTY0TEq1MDIztTROsjKoSDM1SkmzMDZJNU8zSDUxS_OSLSxNzMksqVTIyC8tTs1OTS3IzEtXKE4tKstMTi0GACy7Gy8&q=quality+housekeeping+services&rlz=1C1ONGR_enIN1042IN1042&oq=qu&aqs=chrome.2.69i60j69i57j46i39i175i199j46i67i131i199i433i465j69i60l4.3703j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3bd4c11be826593b:0xf52df834e7f0e46f,1,,,,', '_blank');
  };

  const handleRateReviews = () => {
    window.open('https://www.google.com/search?hl=en-IN&gl=in&q=Shop+No.+39,+First+Floor,+Quality+Housekeeping+Services+In+Nagpur+India,+Awale+Babu+Square,+NIT+Complex,+Bhankhera,+Lashkari+Bagh,+Nagpur,+Maharashtra+440017&ludocid=17667049819357635695&lsig=AB86z5VpO2_T9s2cRHf8XemNpESM#lrd=0x3bd4c11be826593b:0xf52df834e7f0e46f,3', '_blank');
  };

  return (
    <div>
      {/* ── Hero Section ─────────────────────────────── */}
      <section className="hero-fullscreen">
        <div className="hero-bg-animated" />
        <div className="hero-overlay" />

        {/* Sparkles — evoke water/cleanliness */}
        <div className="hero-sparkle hero-sparkle-1" />
        <div className="hero-sparkle hero-sparkle-2" />
        <div className="hero-sparkle hero-sparkle-3" />
        <div className="hero-sparkle hero-sparkle-4" />
        <div className="hero-sparkle hero-sparkle-5" />
        <div className="hero-sparkle hero-sparkle-6" />
        <div className="hero-sparkle hero-sparkle-7" />

        <div className="container hero-content">
          <div className="hero-eyebrow">
            <span>⭐</span>
            ISO 9001-2015 Certified Company
          </div>

          <h1>Quality Housekeeping Services In Nagpur India</h1>

          <p className="hero-subtitle">
            Professional, Eco-Friendly &amp; Reliable Housekeeping Solutions for Homes, Offices &amp; Industries
          </p>

          <div className="hero-buttons">
            <Link to="/quote" className="btn btn-accent btn-large">
              🚀 Get Free Quote
            </Link>
            <a href="tel:+919028907874" className="btn btn-ghost btn-large">
              📞 Call Now
            </a>
          </div>

          <div className="hero-trust-row">
            <div className="hero-trust-item"><span className="check">✓</span> Eco-Friendly</div>
            <div className="hero-trust-item"><span className="check">✓</span> Trained Staff</div>
            <div className="hero-trust-item"><span className="check">✓</span> 8+ Years Experience</div>
            <div className="hero-trust-item"><span className="check">✓</span> 3 Cities Served</div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#EEF6FC" />
          </svg>
        </div>
      </section>

      {/* ── Stats Counter ─────────────────────────────── */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-inner">
            <StatCard icon="🏆" value={8} suffix="+" label="Years Experience" isVisible={statsVisible} />
            <StatCard icon="😊" value={500} suffix="+" label="Happy Clients" isVisible={statsVisible} />
            <StatCard icon="🧹" value={20} suffix="+" label="Services Offered" isVisible={statsVisible} />
            <StatCard icon="📍" value={3} suffix="" label="Cities Served" isVisible={statsVisible} />
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Quality Housekeeping?</h2>
          <p className="section-subtitle">
            We are not just cleaners — we are professional facility management experts committed to your health and comfort.
          </p>
          <div className="why-features">
            {whyFeatures.map((feat, i) => (
              <div className="why-feature" key={i}>
                <div className={`why-feat-icon ${feat.color}`}>{feat.icon}</div>
                <div className="why-feat-text">
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Quick Grid ─────────────────────────── */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Cleaning Services</h2>
          <p className="section-subtitle">
            From homes to hospitals, offices to hotels — we cover every cleaning need with modern equipment and trained professionals.
          </p>
          <div className="services-grid">
            {quickServices.map((svc, i) => (
              <Link to={svc.link} className="service-card" key={i} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <span className="service-card-icon">{svc.icon}</span>
                <h3>{svc.title}</h3>
                <p>Professional {svc.title.toLowerCase()} services with modern equipment and trained staff.</p>
                <div style={{ color: '#1A8FE3', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.75rem' }}>
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ──────────────────────────────── */}
      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-block">
              <h2>Quality Housekeeping Services In Nagpur India</h2>
              <p className="intro-text">
                Housekeeping is also about the space being healthy for you and your family members to live in or for your staff to work in. Quality Housekeeping Services make use of modern technology and high-quality chemicals to make sure that your house or commercial or industrial space gets the proper housekeeping services to make it free from diseases and allergies. We are a professional housekeeping service provider and we make use of eco-friendly, natural, and pet safe products.
              </p>
            </div>

            <div className="content-block">
              <h2>Why should you hire our housekeeping services?</h2>
              <p>
                Quality Housekeeping Services are a professional team that takes care to give you a spotless and germ-free space. We are experts and make use of modern technology and products that can reach and clean areas that regular brooming and mopping cannot achieve.
              </p>
            </div>

            <div className="content-block">
              <h3>Benefits of hiring a professional housekeeping service:</h3>
              <ul className="benefits-list">
                <li>Manage your time well and effectively without worrying about housekeeping chores at affordable rates.</li>
                <li>Stay stress free while we take care of the monotonous job of housekeeping for you.</li>
                <li>We manage employees and in case of need we offer guaranteed replacement.</li>
                <li>Our professionals plan the housekeeping as per your schedule.</li>
                <li>We have tools and technology that is not available with regular housekeeping maids.</li>
                <li>We do our job with complete sincerity and follow all your instructions.</li>
                <li>We value your needs. Our staff is well trained, skilled and well equipped.</li>
                <li>We bring the housekeeping supplies along with us, saving you from arranging cleaning materials.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Reviews CTA ─────────────────────────── */}
      <section className="action-buttons-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Hundreds of happy clients trust Quality Housekeeping. Read their reviews or share yours!
          </p>
          <div className="action-buttons">
            <button className="action-btn" onClick={handleSeeAllReviews}>
              <span>👀</span> See All Our Reviews
            </button>
            <button className="action-btn" onClick={handleRateReviews}>
              <span>⭐</span> Rate &amp; Review Us
            </button>
            <Link to="/quote" className="action-btn" style={{ textDecoration: 'none' }}>
              <span>📋</span> Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ───────────────────────────────── */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-badge-icon">🏆</div>
              <span>ISO 9001-2015 Certified</span>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon">🌿</div>
              <span>Eco-Friendly Products</span>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon">🛡️</div>
              <span>Vetted &amp; Trained Staff</span>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon">⏰</div>
              <span>On-Time Guarantee</span>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon">💰</div>
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
