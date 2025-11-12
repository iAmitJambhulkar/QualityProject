import { useParams } from 'react-router-dom';

const BankHousekeeping = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Bank Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Banking Facility Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Bank Housekeeping Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Your bank's cleanliness shapes the first positive moments of your customers' visit and the working environment 
                                experienced by your employees. Our Bank Housekeeping Services In {locationName} renders support to financial and 
                                corporate institutions to maintain peak standards of hygiene and cleanliness thus enabling superior customer assistance.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Bank Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Office and Customer Area Cleaning', 
                                        desc: 'The members of our team establish welcoming areas with neat furniture, disinfect countertops and completely clean flooring. Our goal is to deliver a professional setting that welcomes clients with standard-setting elements matching your bank\'s quality levels.'
                                    },
                                    { 
                                        title: 'Cleaning of Workstations and Offices', 
                                        desc: 'A variety of contaminants including dust particles, papers and untidy objects build up rapidly at employee workstations, desks and office areas. The staff conducts regular cleaning and sanitation procedures which maintain dust-free surfaces in addition to organizing workplaces in a hygienic manner.'
                                    },
                                    { 
                                        title: 'Restroom Cleaning and Hygiene', 
                                        desc: 'The upkeep of sanitary restrooms plays a crucial role in creating satisfied clients and content workers. Our cleaning team focuses on complete restroom service which involves toilet and sink sanitization and general surface cleaning along with supply restocking of essential items like soap, toilet paper and paper towels.'
                                    },
                                    { 
                                        title: 'Floor and Carpet Cleaning', 
                                        desc: 'The combination of customer movement and building infrastructure creates fast dust accumulation in bank buildings particularly around lobby and hallway sections. The team offers continuous floor cleaning that includes regular vacuuming and scrubbing together with comprehensive cleaning procedures.'
                                    },
                                    { 
                                        title: 'Glass and Window Cleaning', 
                                        desc: 'External and internal glass windows and doors establish a lasting impact on visitors that enter your bank. Wholly transparent windows enable sunlight to enter the space which enhances both brightness and embraces the premises. Our cleaning team handles regular window and glass maintenance for bank properties.'
                                    },
                                    { 
                                        title: 'Waste Management and Disposal', 
                                        desc: 'A smart waste management system stands vital in banking institutions because it maintains cleanliness and general safety. The waste disposal process separates waste types into different categories before appropriate disposal methods are followed.'
                                    },
                                    { 
                                        title: 'Post-Construction and Deep Cleaning', 
                                        desc: 'Our company provides post-construction cleaning solutions after renovations to clean away all construction debris, dust and remaining construction materials. The cleaning team performs complete bank restoration to make sure your bank opens up hazard-free for business operations.'
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

                        {/* Why Choose Us */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Choose Quality Housekeeping Services for Your Bank?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                Customers visit financial institutions because banks serve as sources of financial guidance. The facilities should 
                                demonstrate the trustworthiness, reliability and professional qualities customers need to find in their banking 
                                institutions. Quality premises improve customer contentment and improve employee spirit and simultaneously create 
                                a protected environment that benefits everyone. Quality Housekeeping Services specializes in custom housekeeping 
                                solutions which perfectly suit your bank's requirements. Our qualified staff delivers comprehensive cleaning service 
                                to all banking areas which includes customer service spaces together with offices and meeting rooms and restroom facilities.
                            </p>
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
                        Professional Bank Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Call us right now to discover about our bank housekeeping services in {locationName} offerings while we assist you 
                        in preserving your bank's immaculate state.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/quote" className="btn btn-large" style={{
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

export default BankHousekeeping;
