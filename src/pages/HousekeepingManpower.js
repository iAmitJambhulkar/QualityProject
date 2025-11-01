import { useParams } from 'react-router-dom';

const HousekeepingManpower = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Housekeeping Manpower Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Housekeeping Staff Solutions in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Housekeeping Manpower Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services acknowledges the need for dependable regular cleaning in residential property office 
                                and commercial establishment. Many businesses together with households need occasional help with their regular cleaning 
                                duties to sustain proper organization and cleaning standards.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                The Housekeeping Manpower Services at Quality Housekeeping Services links you with dedicated cleaning professionals 
                                who will keep your spaces clean through minimal involvement from you.
                            </p>
                        </div>

                        {/* What is it */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px',
                            marginBottom: '40px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                What is Housekeeping Manpower Service?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                Our housekeeping manpower service provides dependable staff who execute daily cleaning projects as well as specialized 
                                cleaning duties in residential or business facilities. The professional staffing provided by our services will support 
                                your cleaning requirements through either full-time or part-time personnel. The service provides an excellent alternative 
                                for institutions that require cleaning help but reject the cost of employing steady staff members.
                            </p>
                        </div>

                        {/* Advantages */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Housekeeping Manpower Services Advantages
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                The housekeeping manpower solutions at Quality Housekeeping Services come with numerous valuable benefits for our 
                                customers. Multiple reasons exist that will benefit you by choosing our housekeeping services.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Skilled and Experienced Staff', 
                                        desc: 'Our organization selects housekeeping staff members through a careful selection process followed by comprehensive training to deliver top-level cleaning standards and organization practices. Staff members at Quality Housekeeping Services use their learned skills along with their understanding to efficiently manage office spaces, guest rooms and kitchens as well as personal living areas.'
                                    },
                                    { 
                                        title: 'Flexible Staffing Solutions', 
                                        desc: 'Our company recognizes that each business and home operate with different requirements. We provide adaptable staffing solutions which accommodate different needs of our clients. Through our staff scheduling system you have full control to choose the specific times along with frequency of space maintenance.'
                                    },
                                    { 
                                        title: 'Reliability and Consistency', 
                                        desc: 'Quality Housekeeping Services provides housekeeping professionals who arrive on time to perform complete professional work with consistent results. Our team members deliver top-quality service at every opportunity to keep your space spotless.'
                                    },
                                    { 
                                        title: 'Comprehensive Housekeeping Tasks', 
                                        desc: 'Housekeeping staff at our facility understands how to manage many tasks needed for maintaining perfect conditions in your space. The staff performs general cleaning and bathroom cleaning alongside kitchen cleaning and laundry services and furniture arrangement.'
                                    },
                                    { 
                                        title: 'Cost-Effective Solution', 
                                        desc: 'Permanent employment commitments with housekeeping staff usually creates financial stress. Our housekeeping manpower services allow you to pay for hours of cleaning as well as required services. Our budget-friendly rates provide the opportunity to get professional housekeeping services at reasonable prices.'
                                    }
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2'
                                    }}>
                                        <h4 style={{ color: '#333', marginBottom: '10px' }}>{index + 1}. {service.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555' }}>{service.desc}</p>
                                    </li>
                                ))}
                            </ul>
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
                        Conclusion
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Quality Housekeeping Services delivers customized staff solutions for cleaning projects that serve both residential 
                        clients, offices and commercial facilities. Through our trusted services we supply experienced staff members who 
                        maintain reliable support to uphold stable cleanliness within both temporary and permanent situations across all spaces.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/contact" className="btn btn-large" style={{
                            backgroundColor: 'white',
                            color: '#1976D2',
                            padding: '15px 40px',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: 'bold'
                        }}>
                            Get Free Quote
                        </a>
                        <a href="tel:+91-9028907874" className="btn btn-large btn-secondary" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            padding: '15px 40px',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: 'bold'
                        }}>
                            Call Now: +91-9028907874
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HousekeepingManpower;
