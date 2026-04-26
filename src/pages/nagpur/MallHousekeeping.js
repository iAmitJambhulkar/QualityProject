import { useParams } from 'react-router-dom';

const MallHousekeeping = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Mall Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Shopping Mall Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Mall Housekeeping Services in {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Shopping malls which serve as entertainment and dining destinations must meet high cleanliness requirements 
                                in order to deliver satisfaction to their customers. We Provide Amazing Services For specialized mall cleaning 
                                solutions which guarantee perfection in every area.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px',
                            marginBottom: '40px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Choose Quality Housekeeping Services for Your Mall?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                Malls welcome numerous people into their spaces daily. The condition of your shopping mall dictates customer 
                                satisfaction together with their entire shopping experience. Quality Housekeeping Services delivers specific 
                                and complete cleaning solutions to maintain mall spaces in optimal condition thus building an environment that 
                                welcomes everyone. Staff at our company possess experience in handling shopping mall cleaning requirements for 
                                all shared spaces including restrooms, escalators and food court areas. Your shopping mall benefits from our 
                                cleaning services that combine stellar standards of safety.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Mall Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Common Area Cleaning', 
                                        desc: 'Customers visiting malls primarily interact with hallways along with corridors and seating areas which represent the most visible and thoroughly traveled zones. We maintain daily cleaning operations for all designated areas of the shopping mall.'
                                    },
                                    { 
                                        title: 'Restroom Cleaning and Hygiene', 
                                        desc: 'Mall restrooms need regular cleaning services so customers can experience clean and hygienic comfort areas. We deliver complete restroom maintenance services that involve thorough cleaning of all restroom fixtures including toilets, washrooms in addition to floors.'
                                    },
                                    { 
                                        title: 'Food Court Cleaning', 
                                        desc: 'The food court stands as the most active area within a mall so cleanliness becomes vital for customer satisfaction. A thorough cleaning process focused on disinfection operates daily across tables, chairs, counters and all floors inside the food court area.'
                                    },
                                    { 
                                        title: 'Escalator and Elevator Cleaning', 
                                        desc: 'Checkpoints with both elevators and escalators need regular maintenance for functional operations and attractive outlooks. The cleaning team maintains escalator steps while they clean handrails and elevator cabins to eliminate dust accumulation and surface dirt.'
                                    },
                                    { 
                                        title: 'Window and Glass Cleaning', 
                                        desc: 'The windows together with glass elements achieves aesthetic quality because they transmit natural illumination through the area while providing customers complete visibility. We offer certified window and glass cleaning support to eliminate streaks from all internal and external glass surfaces.'
                                    },
                                    { 
                                        title: 'Trash Management and Waste Disposal', 
                                        desc: 'Mall owners need to perform waste disposal operations efficiently to keep their facilities odor-free and clean. Our team takes responsibility for both trash collection and disposal apart from managing proper waste segregation according to environmental regulations.'
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

                        {/* Why Partner */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px',
                            marginTop: '40px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Partner with Us?
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'We have trained professionals with dedicated experienced staff who understand all aspects of shopping mall cleaning requirements',
                                    'Our company maintains reliable steady operations for mall housekeeping services that guarantee optimal visual presentation of your facilities at all times',
                                    'Our cleaning program adjusts to match the specific requirements of daily maintenance services or special event services which you need',
                                    'Our company implements eco-friendly cleaning products for safe and sustainable cleaning',
                                    'We present adaptable housekeeping service packages that accommodate various requirements of your mall facilities with customized plans'
                                ].map((benefit, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {benefit}
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
                        Professional Mall Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for specialized mall cleaning solutions in {locationName} that guarantee perfection in every area.
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

export default MallHousekeeping;
