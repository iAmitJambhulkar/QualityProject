import { useParams } from 'react-router-dom';

const GuesthouseHousekeeping = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Guesthouse Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Guesthouse Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Guesthouse Housekeeping Service in {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The cleanliness of your guesthouse creates conditions to deliver positive guest experiences. The guesthouse 
                                housekeeping service in {locationName} provided by Quality Housekeeping Services is dedicated to achieving 
                                exceptional standards. Our company provides thorough housekeeping solutions for maintaining guesthouses as 
                                cozy hygienic accommodations for all visitors.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Guesthouse Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Guest Room Cleaning', 
                                        desc: 'Our staff members provide detailed attention to every guestroom by thoroughly cleaning all areas including bed preparation, vacuuming carpets, furniture sanitation and surface sanitization. We maintain a standard of service by replacing used towels along with restocking toiletries as well as checking all amenities needed for guest convenience.'
                                    },
                                    { 
                                        title: 'Public Area Maintenance', 
                                        desc: 'A guesthouse requires excellent maintenance of public spaces starting from the lobby through hallways till the dining areas to form a strong positive impression on visitors. Our team members work to maintain public spaces through cleaning operations that guarantee their area remains neat, welcoming and fresh.'
                                    },
                                    { 
                                        title: 'Laundry Services', 
                                        desc: 'A guesthouse depends heavily on continuous supplies of spotless linens, towels and necessary essentials. Our business provides expert laundry service which ensures all bedding items and towels get complete professional cleaning treatment with proper pressing before distribution to hotel staff.'
                                    },
                                    { 
                                        title: 'Floor and Carpet Cleaning', 
                                        desc: 'Clean floors as well as carpets provide conditions for a comfortable guest experience. Our organization provides floor cleaning methods that combine sweeping with mopping and vacuuming equipment to maintain perfect floor conditions. The deep cleaning process we provide for carpets removes all dirt and stains while deodorizing them.'
                                    },
                                    { 
                                        title: 'Waste Management', 
                                        desc: 'The proper management of waste stands as an indispensable need to maintain both cleanliness and hygiene across your guesthouse. The housekeeping staff manages waste disposal with proper guidelines. The waste management service includes general and recyclable waste disposal to provide a clean environment along with adhering to environmental responsibility.'
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
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Partner with Us?
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Our guesthouse cleaning team consists of professionals who possess expertise in delivering service solutions which adapt to the particular requirements of guesthouses',
                                    'Our company delivers dependable housekeeping services handling all types including daily maintenance and post-checkout services as well as deep cleaning',
                                    'Our company implements environmentally safe practices with green cleaning approaches that help establish healthier areas for guests and staff members',
                                    'Our company offers both flexible rates and adjustable package options that match the requirements of guesthouses no matter the size',
                                    'Quality Housekeeping Services excels at paying attention to each and every detail ensuring guests always receive exceptional service'
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
                        Contact Us Today
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact Us as we are the trustworthy choice for dependable Guesthouse Housekeeping Services in {locationName}.
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

export default GuesthouseHousekeeping;
