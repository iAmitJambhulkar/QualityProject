import React from 'react';

const HospitalHousekeeping = () => {
    const locationName = 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Hospital Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Healthcare Facility Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Hospital Housekeeping Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Healthcare facility cleanliness matters deeply. A sterile hygienic environment serves dual purposes because it 
                                ensures patients' well-being as well as creates comfort for visitors and staff. The Hospital Housekeeping Service 
                                in {locationName} maintains a clean welcoming environment for every visitor throughout healthcare facilities including 
                                hospitals clinics and medical centres. Our company delivers custom housekeeping solutions which fulfill the detailed 
                                health facility hygiene rules that hospitals require.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Hospital Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Patient Room Cleaning', 
                                        desc: 'Hospital housekeeping focuses on patient room sanitation as this mission stands among the most critical cleaning duties within the healthcare facility. The housekeeping team performs daily patient room cleaning by disinfection and sanitization of surfaces and bed, furniture and floor. Our team ensures cleanliness and comfort in patient rooms since this supports a healing environment for patients.'
                                    },
                                    { 
                                        title: 'Restroom Cleaning', 
                                        desc: 'Patients depend on frequent and thorough restroom cleaning for hospitals to meet their hygiene expectations. The hospital restrooms get cleaned and sanitized along with necessary supply restocking. The hospital makes use of professional-grade disinfectants to protect patients from cross-contamination.'
                                    },
                                    { 
                                        title: 'Public Area Maintenance', 
                                        desc: 'Patients and visitors should experience a positive impression of hospitals by having all public areas such as hallways and waiting rooms with reception areas kept completely clean. The housekeeping staff of our facility works towards maintaining public areas while ensuring their cleanliness and sanitization. Our multiple daily cleaning operations of busy areas help stop dirt accumulation and create a pleasant atmosphere for all visitors.'
                                    },
                                    { 
                                        title: 'Operation Theatre and Critical Care Unit Cleaning', 
                                        desc: 'The healthcare industry requires absolute cleanliness in all regions of operation theatres (OT) and critical care units (CCU). Specialized cleaning procedures which our staff follows ensure detailed disinfection process of all surfaces together with instruments and equipment throughout these particular areas. Our team implements waste disposal systems that produce further reduction of possible infection risks at the facility.'
                                    },
                                    { 
                                        title: 'Deep Cleaning and Sanitization', 
                                        desc: 'The hospital deep cleaning program targets inaccessible areas such as ventilation ducts together with healthcare apparatus and common contact points. Your hospital\'s safety and hygiene is maintained through our use of cleaning agents approved by hospitals which effectively eliminates all bacteria and viruses along with pathogens.'
                                    },
                                    { 
                                        title: 'Waste Management', 
                                        desc: 'The appropriate management of waste in hospitals remains crucial because it determines proper disposal methods while protecting human health. The team receives training to properly manage medical waste and dangerous materials before dealing with waste disposal steps that hold to established health legislation.'
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
                                    'Our team comes with expert training focused on hospital-specific cleaning protocols while using the required tools to achieve healthcare facilities\' strict requirements',
                                    'Our organization uses strict quality control systems which ensure all cleaning activities reach optimal standards to give your facility both spotless cleanliness and operational safety',
                                    'Our organization follows every health regulation for hospital hygiene and safety which guarantees full compliance while reducing operational risks',
                                    'Our housekeeping service uses sustainable procedures as well as environmentally-protected cleaning solutions that protect hospital patients and the natural environment',
                                    'The team stands ready at all times to fulfill your housekeeping requirements because we maintain 24/7 service availability for hospital needs'
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
                        Professional Hospital Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Our Company provides hospitals with professional, reliable and efficient housekeeping services. Our staff devotes 
                        itself to provide you with a secure sanitized environment for patients and the staff members. Our team is available 
                        for additional information or for appointment booking.
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

export default HospitalHousekeeping;
