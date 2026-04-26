import { useParams } from 'react-router-dom';

const SalonHousekeeping = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Salon Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Beauty Salon Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Salon Housekeeping Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services provides specialized salon housekeeping services in {locationName} for beauty 
                                establishments to help them maintain facilities which fulfil industry standard requirements. Our professional 
                                group guarantees that your salon always maintains pristine conditions alongside welcoming spaces and professional 
                                attributes.
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
                                Why Choose Quality Housekeeping Services for Your Salon?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                Special focus on cleanliness becomes essential for salons because their services demand it. Salon housekeeping 
                                service provided by Quality Housekeeping Services aims to provide extensive cleaning solutions that keep your 
                                salon neat with zero bacterial or germ contamination. The trained and skilled team members at our organization 
                                handle all areas within the salon which includes treatment rooms and storage spaces. Customer satisfaction depends 
                                on the appearance and cleanliness of your salon which motivates us to take additional steps for maintaining top-notch 
                                hygiene and organization standards.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Salon Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'General Salon Cleaning', 
                                        desc: 'Salon cleaning services at their full spectrum allow us to maintain complete spotlessness of every salon area. Our cleaning team performs floor sweeping and mopping as well as wall cleaning together with furniture wiping and equipment sanitization which includes hair dryers, styling chairs and countertops.'
                                    },
                                    { 
                                        title: 'Salon Equipment Sanitization', 
                                        desc: 'Every day salon equipment requires periodic sanitizing to remove bacteria while eliminating all forms of dirt. The entire set of salon tools receives cleaning followed by disinfection procedures that encompass scissors along with combs, brushes, hair clippers and styling instruments.'
                                    },
                                    { 
                                        title: 'Restroom Cleaning', 
                                        desc: 'Your clients will benefit from comfortable facilities with cleaning and stocking maintained properly. Our team is responsible for performing routine sanitization and cleaning of your salon\'s restroom spaces. Disinfectant solutions maintain surface hygiene throughout the restroom area.'
                                    },
                                    { 
                                        title: 'Hair Station Cleaning', 
                                        desc: 'Customer activity at hair stations requires strategic organization and cleaning. Our staff members clean all parts of hair stations which include the seating area as well as decorative elements such as mirrors alongside countertops and surrounding surfaces.'
                                    },
                                    { 
                                        title: 'Floor and Surface Cleaning', 
                                        desc: 'Frequent product usage and hair accumulation on floors and surfaces create an unprofessional setting. The team executes thorough floor maintenance through sweeping and mopping that removes all hair debris together with product spills and stains from the surface.'
                                    },
                                    { 
                                        title: 'Waste Management', 
                                        desc: 'The operations of salons generate numerous waste types including used hair products together with disposable products such as tissues and cotton pads. Our company follows appropriate safety guidelines to handle general waste and hazardous materials effectively during waste disposal practices.'
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
                        Contact Quality Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Quality Housekeeping Services offers trusted high-quality salon housekeeping solutions to customers throughout 
                        the {locationName} region. Your salon will receive specialized cleaning services with the team of experts who are 
                        ready to serve you. You can reach out to us right now to get more details about our services and book a consultation.
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

export default SalonHousekeeping;
