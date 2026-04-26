import { useParams } from 'react-router-dom';

const SecurityGuardServices = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Security Guard Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Security Solutions in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Security Guard Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services {locationName} India is renowed top private security guard company located at {locationName} 
                                Maharashtra India. Best Security Guard Services In {locationName} India from our company deliver security measures that 
                                create environments of safety together with peace of mind for homes, businesses and events. Expertly trained security 
                                team members pledge themselves to defend properties as well as all personnel from customers to assets and employees. 
                                The team at Quality Housekeeping Services provides comprehensive security services solutions both for round-the-clock 
                                monitoring and single-event protection.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Selection of a Proper Security Services Stands Essential
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                Our company delivers security solutions that perfectly meet specific client requirements. The following elements 
                                explain why clients should choose our security guard services:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Highly Trained and Experienced Guards', 
                                        desc: 'Security guards pass through a screening process which focuses on validating their experience coupled with their professional attributes for managing diverse security challenges. The security personnel start their training process with intensive lessons on surveillance methods alongside emergency response, with classes in conflict handling and situational physical response.'
                                    },
                                    { 
                                        title: 'Customized Security Solutions', 
                                        desc: 'Every establishment demands specific security approaches. Our security solutions are designed specifically for each customer by creating security plans which precisely fulfill their needs whether they need business site protection or residential property patrolling or event crowd management.'
                                    },
                                    { 
                                        title: 'Emergency Response Preparedness', 
                                        desc: 'Preparedness time plays a vital role during emergency incident. Security guards at our facility receive training so they can respond rapidly and constructively to situations that include break-ins or medical emergencies and fires and similar incidents.'
                                    },
                                    { 
                                        title: 'Professional and Reliable', 
                                        desc: 'The members of our security team provide services while maintaining professionalism alongside integrity as well as reliability. Our guards keep professional standards throughout service hours which enables a safe and secure environment free from disrespect for everyone present.'
                                    }
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2'
                                    }}>
                                        <h4 style={{ color: '#333', marginBottom: '10px' }}>{service.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555' }}>{service.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Use Cases */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Security Guard Services Are Suitable for Which Circumstances?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                The scope of situations where security guards represent an appropriate safeguard extends to many different circumstances. 
                                Some common situations include:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Property security in residential areas depends on security guards who maintain constant watch over entry points and conduct physical inspections throughout the property grounds',
                                    'Security guards protect the workforce together with company property stored at commercial and corporate facilities',
                                    'Security personnel offered by our company will monitor facility entrances and protect business asset values while detecting and preventing theft occurrences',
                                    'Our security guards will maintain both retail stores and their visitors from theft while protecting customers and workers at all times',
                                    'Builders frequently experience theft offenses at their work locations. Security guards offer patrol services at these areas which stops equipment and materials from being stolen',
                                    'The event security service our guards provide includes handling crowd management and maintaining order for corporate gatherings and weddings along with concerts',
                                    'Emergency situations that include fires along with intruders and natural disasters can be dealt with swiftly by security staff members'
                                ].map((item, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {item}
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
                        Quality Housekeeping Services believes that security demands careful attention so we deliver protective services to 
                        our clients. Security Guard Services In {locationName} India designed by our company aim to deliver complete protection 
                        along with assurance for your needs. Our Company provides professional and reliable security services that develop 
                        customized protection plans for safeguarding your residential, commercial and special event spaces. Call us right now 
                        to obtain security solutions that perfectly protect your event space or property.
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

export default SecurityGuardServices;
