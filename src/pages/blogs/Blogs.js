import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
  // Use data URIs or remove images to eliminate external requests
  const blogPosts = [
    {
      id: 1,
      title: "QHS PROVIDES HOUSE CLEANING SERVICES FOR HOMES",
      excerpt: "If your home is tidy, you are probably living a healthy lifestyle. Everyone wants their rooms to appear lovely and bright, but you can only do this by routinely using house cleaning services.",
      date: "October 31, 2024",
      category: "Home Cleaning",
      readTime: "10 min read",
      link: "/blogs/house-cleaning-services",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231976D2' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3EHome Cleaning%3C/text%3E%3C/svg%3E"
    },
    {
      id: 2,
      title: "WHY WE ALWAYS CHOOSE TOPMOST OFFICE HOUSEKEEPING?",
      excerpt: "Office Housekeeping goes beyond simple cleanliness to also take care of the work areas, keep the hallways and floors clear of trip hazards, and remove the rubbish.",
      date: "October 25, 2024",
      category: "Office Cleaning",
      readTime: "5 min read",
      link: "/blogs/office-housekeeping",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%232196F3' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3EOffice Cleaning%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      title: "LET'S TALK ABOUT SALON HOUSEKEEPING",
      excerpt: "Simple vacuuming or brooming is insufficient. To keep your salon looking pleasant and appealing, you occasionally require expert cleaning.",
      date: "October 20, 2024",
      category: "Salon Cleaning",
      readTime: "7 min read",
      link: "/blogs/salon-housekeeping",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23E91E63' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3ESalon Cleaning%3C/text%3E%3C/svg%3E"
    },
    {
      id: 4,
      title: "FIND QUALITY GUESTHOUSE HOUSEKEEPING NEAR YOU",
      excerpt: "A guest is supposedly the jewel on the hospitality pillow. GUESTHOUSE HOUSEKEEPING is something that just cannot be disregarded.",
      date: "October 15, 2024",
      category: "Guest-House Cleaning",
      readTime: "6 min read",
      link: "/blogs/guesthouse-housekeeping",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%239C27B0' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='42' fill='white'%3EGuesthouse%3C/text%3E%3C/svg%3E"
    },
    {
      id: 5,
      title: "COLLEGE HOUSEKEEPING SERVICES BEYOND EXPECTATION",
      excerpt: "A school or college is a place where aspirations may take flight and the construction of a whole new inventive world can begin.",
      date: "October 10, 2024",
      category: "College Cleaning",
      readTime: "8 min read",
      link: "/blogs/college-housekeeping",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%233F51B5' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3ECollege%3C/text%3E%3C/svg%3E"
    },
    {
      id: 6,
      title: "WHY SHOULD WE HIRE QUALITY GYM HOUSEKEEPING SERVICES?",
      excerpt: "QUALITY HOUSEKEEPING SERVICES offers gym housekeeping services in Nagpur India that guarantee a secure, dependable, and consistent experience.",
      date: "October 5, 2024",
      category: "Gym Cleaning",
      readTime: "4 min read",
      link: "/blogs/gym-housekeeping",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23FF5722' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3EGym Cleaning%3C/text%3E%3C/svg%3E"
    },
    {
      id: 7,
      title: "FIND ONE OF THE BEST HOSPITAL HOUSEKEEPING IN NAGPUR INDIA",
      excerpt: "Germs and infections spread like wildfire. This is particularly true at hospitals, clinics, laboratories, and medical facilities.",
      date: "September 30, 2024",
      category: "Hospital Cleaning",
      readTime: "6 min read",
      link: "/blogs/hospital-housekeeping",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%234CAF50' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3EHospital%3C/text%3E%3C/svg%3E"
    },
    {
      id: 8,
      title: "SCHOOL HOUSEKEEPING SERVICES BEYOND EXPECTATION",
      excerpt: "Dreams can take flight in educational institutions like schools and colleges, where the beginnings of a brand-new, inventive universe can also be found.",
      date: "September 30, 2024",
      category: "School Cleaning",
      readTime: "6 min read",
      link: "/blogs/school-housekeeping",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23FFC107' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3ESchool%3C/text%3E%3C/svg%3E"
    },
    {
      id: 9,
      title: "WHY WE HAVE TO HIRE DEEP CLEANING SERVICES?",
      excerpt: "Do you require a thorough cleaning service? A thorough cleaning is the greatest approach to ensure that your home starts clean and stays clean.",
      date: "September 30, 2024",
      category: "Deep Cleaning",
      readTime: "6 min read",
      link: "/blogs/deep-cleaning",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23009688' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='white'%3EDeep Cleaning%3C/text%3E%3C/svg%3E"
    },
    {
      id: 10,
      title: "THE BEST SOFA CLEANING SERVICES IN NAGPUR INDIA, JUST CHECK IT!",
      excerpt: "Holiness is frequently related to cleanliness. A clean atmosphere draws good energy, whereas a filthy environment invites pests.",
      date: "September 30, 2024",
      category: "Sofa & Carpet Cleaning",
      readTime: "6 min read",
      link: "/blogs/sofa-carpet-cleaning",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23795548' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='42' fill='white'%3ESofa %26 Carpet%3C/text%3E%3C/svg%3E"
    }
  ];

  return (
    <div>
      {/* Blog Hero */}
      <section className="hero">
        <div className="container">
          <h1>Cleaning & Housekeeping Blog</h1>
          <p>Expert tips, guides, and insights for maintaining clean and healthy spaces</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Featured Article</h2>
          <Link to={blogPosts[0].link} className="featured-card">
            <div className="featured-image">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} />
            </div>
            <div className="featured-content">
              <span className="blog-category">{blogPosts[0].category}</span>
              <h3 className="featured-title">{blogPosts[0].title}</h3>
              <p className="featured-excerpt">{blogPosts[0].excerpt}</p>
              <div className="blog-meta">
                <span>{blogPosts[0].date}</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Latest Articles</h2>
          <div className="blog-grid">
            {blogPosts.slice(1).map(post => (
              <Link key={post.id} to={post.link} className="service-card blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <span className="blog-card-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get Free Quote CTA */}
      <section className="quote-cta-section">
        <div className="container">
          <h2 className="quote-cta-title">Need Professional Cleaning Services?</h2>
          <p className="quote-cta-text">Get a free, no-obligation quote for your cleaning requirements</p>
          <Link to="/quote" className="btn btn-secondary btn-large">Get Free Quote</Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <h2 style={{ marginBottom: '20px' }}>Stay Updated with Cleaning Tips</h2>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#666' }}>
            Subscribe to our newsletter for the latest cleaning tips, guides, and special offers
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
