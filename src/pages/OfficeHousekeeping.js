import { useParams } from 'react-router-dom';

const OfficeHousekeeping = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)',
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
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%)'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Office Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Office Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Clean workplaces support productivity along with enhancing employee well-being and leaving a positive
                                impression on clients. Office housekeeping service provided by Quality Housekeeping Services focuses
                                on maintaining your workspace clean and healthy to create productive work conditions through our trained
                                experts. We provide complete office cleaning solutions which fulfill the rigorous requirements.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="content-block">
                            <h2 style={{ color: '#667eea', marginBottom: '25px' }}>
                                Why Should You Select Our Office Housekeeping Services In {locationName}?
                            </h2>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ color: '#333', fontSize: '1.3rem', marginBottom: '15px' }}>
                                    Customized Cleaning Solutions
                                </h3>
                                <p style={{ lineHeight: '1.8', color: '#555' }}>
                                    All offices have different cleaning requirements. We, at Quality Housekeeping Services, provide
                                    specific cleaning solutions for your office environment. We handle cleaning operations for corporate
                                    offices of all sizes and perform each task with complete perfection.
                                </p>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ color: '#333', fontSize: '1.3rem', marginBottom: '15px' }}>
                                    Trained & Professional Staff
                                </h3>
                                <p style={{ lineHeight: '1.8', color: '#555' }}>
                                    Our Quality office housekeepers utilize their refined skills to deliver excellent cleaning solutions.
                                    The staff combines modern cleaning devices with eco-friendly products through their efficient cleaning
                                    methods to offer superior outcomes. The members of our staff dedicate themselves to keeping all details
                                    of your office space confidential as well as safeguarding your privacy.
                                </p>
                            </div>
                        </div>

                        {/* Comprehensive Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#667eea', marginBottom: '25px' }}>
                                Comprehensive Office Cleaning Services
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Under our office housekeeping services in {locationName}, we provide detailed coverage for all
                                cleanliness aspects throughout offices:
                            </p>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'grid',
                                gap: '20px'
                            }}>
                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>Common Areas Cleaning</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The office cleaning operations include dusting, sweeping and mopping to keep all common areas
                                        such as corridors, reception, break room and meeting room clean and well-maintained.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>Floor & Carpet Maintenance</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The maintenance team handles floor cleaning, carpet vacuuming and hard floor mopping while
                                        maintaining perfect surface conditions.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>Washroom Sanitization</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The service includes detailed washroom cleanups and hygienic practices i.e. thorough sanitiser
                                        restocking, mirror cleaning and maintenance of taps with supply system restocking.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>Window & Glass Cleaning</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        Our staff maintains office windows as well as glass surfaces free of streaks while keeping them
                                        well-maintained for an impressive external appearance.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>Waste Management</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The office housekeepers manage efficient waste disposal activities as well as appropriate garbage
                                        collection to maintain a clutter-free work environment.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>Post-Event Cleaning</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        Post-event cleaning forms a part of our services which enables us to return your office to its
                                        clean organized state following meetings or corporate events.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Key Features */}
                        <div className="content-block">
                            <h2 style={{ color: '#667eea', marginBottom: '25px' }}>Our Key Features</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
                                <div style={{
                                    padding: '25px',
                                    background: 'white',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        marginBottom: '15px'
                                    }}>🌿</div>
                                    <h4 style={{ color: '#333', marginBottom: '10px' }}>Eco-Friendly Products</h4>
                                    <p style={{ color: '#666', fontSize: '0.95rem' }}>
                                        We care for the environment which drives us to use eco-friendly non-toxic cleaning agents.
                                    </p>
                                </div>

                                <div style={{
                                    padding: '25px',
                                    background: 'white',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        marginBottom: '15px'
                                    }}>⏰</div>
                                    <h4 style={{ color: '#333', marginBottom: '10px' }}>Flexible Scheduling</h4>
                                    <p style={{ color: '#666', fontSize: '0.95rem' }}>
                                        Our organization provides adjustable cleaning appointments which adapt to meet your business
                                        operational hours - daily, weekly, or one-time basis.
                                    </p>
                                </div>

                                <div style={{
                                    padding: '25px',
                                    background: 'white',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        marginBottom: '15px'
                                    }}>💰</div>
                                    <h4 style={{ color: '#333', marginBottom: '10px' }}>Affordable Pricing</h4>
                                    <p style={{ color: '#666', fontSize: '0.95rem' }}>
                                        We provide superior quality office housekeeping services at rates that match any budget requirements,
                                        from small startups to large corporate offices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#667eea', marginBottom: '20px', textAlign: 'center' }}>
                                Benefits of Professional Office Cleaning
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#555',
                                textAlign: 'center',
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}>
                                A workspace which remains clean enables healthier working conditions that automatically create a more
                                productive team. Our office housekeeping services keep up high hygiene standards and simultaneously
                                minimize illness risks for workers while creating a positive workplace environment.
                            </p>
                        </div>

                        {/* Commitment to Excellence */}
                        <div className="content-block">
                            <h2 style={{ color: '#667eea', marginBottom: '25px' }}>Our Commitment to Excellence</h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services has dedicated itself to providing superior office housekeeping solutions
                                in {locationName}. We conduct ongoing service evaluations to maintain constant quality standards. Our
                                company establishes durable client relationships which stem from dependable services and expert
                                performance coupled with exceptional cleaning practices.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                        Get in Touch
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Your business growth needs no distraction because Quality Housekeeping Services will handle your office
                        cleaning requirements. Our staff remain dedicated to offering you clean spaces with organization and
                        hygiene excellence for better office productivity and success.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/contact" className="btn btn-large" style={{
                            backgroundColor: 'white',
                            color: '#667eea',
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

export default OfficeHousekeeping;
