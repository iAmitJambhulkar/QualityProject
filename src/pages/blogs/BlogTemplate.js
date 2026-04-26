import { useParams } from 'react-router-dom';

const BlogTemplate = () => {
    const { slug } = useParams();

    const blogData = {
        'house-cleaning-services': {
            title: "QHS PROVIDES HOUSE CLEANING SERVICES FOR HOMES",
            excerpt: "If your home is tidy, you are probably living a healthy lifestyle. Everyone wants their rooms to appear lovely and bright, but you can only do this by routinely using house cleaning services.",
            category: "Home Cleaning",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920",
            date: "October 31, 2024",
            readTime: "10 min read"
        },
        'office-housekeeping': {
            title: "WHY WE ALWAYS CHOOSE TOPMOST OFFICE HOUSEKEEPING?",
            excerpt: "Office Housekeeping goes beyond simple cleanliness to also take care of the work areas, keep the hallways and floors clear of trip hazards, and remove the rubbish. For office cleaning services, we provide qualified experts that are flexible and reasonably priced.",
            category: "Office Cleaning",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920",
            date: "October 25, 2024",
            readTime: "5 min read"
        },
        'salon-housekeeping': {
            title: "LET'S TALK ABOUT SALON HOUSEKEEPING",
            excerpt: "Simple vacuuming or brooming is insufficient. To keep your salon looking pleasant and appealing, you occasionally require expert cleaning. The salon is made to appear larger and more luxurious by adding additional mirrors, but with time, frequent foot traffic and product spills from beauty treatments can detract from the salon's attractiveness and opulence.",
            category: "Salon Cleaning",
            image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920",
            date: "October 20, 2024",
            readTime: "7 min read"
        },
        'guesthouse-housekeeping': {
            title: "FIND QUALITY GUESTHOUSE HOUSEKEEPING NEAR YOU",
            excerpt: "A guest is supposedly the jewel on the hospitality pillow. In the same vein, a guest is the most prized possession for a guest-house proprietor. GUESTHOUSE HOUSEKEEPING is something that just cannot be disregarded, regardless of whether it is at your guest-guest-house, a guest-guest-house lodge, a corporate guest house, or even just a guestroom.",
            category: "Guest-House Cleaning",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920",
            date: "October 15, 2024",
            readTime: "6 min read"
        },
        'college-housekeeping': {
            title: "COLLEGE HOUSEKEEPING SERVICES BEYOND EXPECTATION",
            excerpt: "A school or college is a place where aspirations may take flight and the construction of a whole new inventive world can begin. An institution is about more than simply textbook learning; it is also about daily living etiquettes, of which sanitation and cleanliness are critical. This is where Institutional, School, and College Housekeeping Services come in.",
            category: "College Cleaning",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920",
            date: "October 10, 2024",
            readTime: "8 min read"
        },
        'gym-housekeeping': {
            title: "WHY SHOULD WE HIRE QUALITY GYM HOUSEKEEPING SERVICES?",
            excerpt: "For sports and leisure facilities of any size, QUALITY HOUSEKEEPING SERVICES offers gym housekeeping services in Nagpur India that guarantee a secure, dependable, and consistent experience. According to our experience, commercial clients frequently look to transfer their gym cleaning service provider because of inconsistent or subpar service.",
            category: "Gym Cleaning",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920",
            date: "October 5, 2024",
            readTime: "4 min read"
        },
        'hospital-housekeeping': {
            title: "FIND ONE OF THE BEST HOSPITAL HOUSEKEEPING IN NAGPUR INDIA",
            excerpt: "Germs and infections spread like wildfire. This is particularly true at hospitals, clinics, laboratories, and medical facilities where the general public is more prone to contracting diseases. People with illnesses, infections, and injuries crowd the halls of hospitals. Along with the patients, the patient's loved ones, friends, nurses, and even the doctors run the risk of contracting germs, viruses, and infections.",
            category: "Hospital Cleaning",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920",
            date: "September 30, 2024",
            readTime: "6 min read"
        },
        'school-housekeeping': {
            title: "SCHOOL HOUSEKEEPING SERVICES BEYOND EXPECTATION",
            excerpt: "Dreams can take flight in educational institutions like schools and colleges, where the beginnings of a brand-new, inventive universe can also be found. In addition to teaching from textbooks, an institution should also teach students about daily manners, of which cleanliness and hygiene are essential components. The institution, college, and school housekeeping services enter the picture at this point. In the end, shouldn't a school practise what it preaches?",
            category: "School Cleaning",
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920",
            date: "September 30, 2024",
            readTime: "6 min read"
        },
        'deep-cleaning': {
            title: "WHY WE HAVE TO HIRE DEEP CLEANING SERVICES?",
            excerpt: "Do you require a thorough cleaning service? If you want to be certain that your cleaning specialist will truly make things sparkling, go no further than our DEEP CLEANING IN NAGPUR INDIA. A thorough cleaning is the greatest approach to ensure that your home starts clean and stays clean. Parts of your house, especially the kitchen and bathrooms, may acquire layers of filth, oil, and grime that routine cleaning cannot remove.",
            category: "Deep Cleaning",
            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920",
            date: "September 30, 2024",
            readTime: "6 min read"
        },
        'sofa-carpet-cleaning': {
            title: "THE BEST SOFA CLEANING SERVICES IN NAGPUR INDIA, JUST CHECK IT!",
            excerpt: "Holiness is frequently related to cleanliness. This saying can truly relate to sofa cleaning too. A clean atmosphere draws good energy, whereas a filthy environment invites pests. Pests can be quite bothersome if not dealt with promptly. Their quick reproduction allows them to spread like wildfire in no time. They not only pollute and harm the environment, but they may also cause considerable damage to furniture and other goods when the paints penetrate and hollow out hardwood furniture.",
            category: "Sofa & Carpet Cleaning",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920",
            date: "September 30, 2024",
            readTime: "6 min read"
        }
    };

    const blog = blogData[slug];

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
            {/* Hero Section with Image */}
            <section style={{
                position: 'relative',
                height: '500px',
                backgroundImage: `url(${blog.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.3)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                    <span style={{ 
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        {blog.category}
                    </span>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.2' }}>{blog.title}</h1>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', fontSize: '1.1rem' }}>
                        <span>📅 {blog.date}</span>
                        <span>⏱️ {blog.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Excerpt Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px',
                            borderLeft: '5px solid #1976D2',
                            marginBottom: '40px'
                        }}>
                            <p style={{ 
                                fontSize: '1.3rem', 
                                lineHeight: '1.8', 
                                color: '#333',
                                margin: 0
                            }}>
                                {blog.excerpt}
                            </p>
                        </div>

                        <div style={{
                            textAlign: 'center',
                            padding: '60px 40px',
                            background: 'white',
                            borderRadius: '15px',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '20px' }}>
                                Full Content Coming Soon
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
                                We're working on bringing you detailed content for this blog post. Stay tuned!
                            </p>
                            <a href="/contact" className="btn btn-primary" style={{
                                display: 'inline-block',
                                padding: '15px 40px',
                                backgroundColor: '#1976D2',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s'
                            }}>
                                Contact Us for More Info
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                color: 'white'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                        Need {blog.category} Services?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Quality Housekeeping Services provides professional cleaning solutions tailored to your needs.
                        Contact us today for a free quote!
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/quote" className="btn btn-large" style={{
                            backgroundColor: 'white',
                            color: '#1976D2',
                            padding: '15px 40px',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s'
                        }}>
                            Get Free Quote
                        </a>
                        <a
                            href="tel:+91-9028907874"
                            className="btn btn-large btn-secondary"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                padding: '15px 40px',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s'
                            }}
                        >
                            Call Now: +91-9028907874
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogTemplate;
