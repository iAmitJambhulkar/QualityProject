import { useParams } from 'react-router-dom';

const HospitalHousekeeping = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';
    const isJabalpur = location === 'jabalpur';

    // Jabalpur content
    if (isJabalpur) {
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
                        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Hospital Housekeeping Service</h1>
                        <p style={{ fontSize: '1.3rem' }}>Professional Hospital Cleaning in {locationName} by Quality Housekeeping Services</p>
                    </div>
                </section>

                {/* Main Content */}
                <section style={{ padding: '80px 0' }}>
                    <div className="container">
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                            {/* Introduction */}
                            <div className="content-block">
                                <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                    Hospital Housekeeping Service
                                </h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                    Hospitals are the most prone places to infections and bacteria. Daily it is frequented by innumerable 
                                    people both healthy and ill to get themselves treated or admitted in the hospital. Any mismanagement or 
                                    carelessness in the maintenance can increase the risk of spreading infections thereby making even the 
                                    healthy people ill. Hence, it is necessary to have the best hospital housekeeping service. However, it 
                                    is even more important to hire the right company. A professional service will use high tech tools and 
                                    chemicals that ensure the hospital is well kept, sanitized, and safe for visitors.
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
                                            title: 'We Do Not Take Our Services Lightly',
                                            desc: 'When it comes to hospitals, there can be no place for mismanagement. Infections cannot be taken lightly and if left unheeded can spread as wildfire instantly. With numerous people visiting the clinics and hospitals for treating various illnesses, it not only puts the patients at risk but also makes the family and staff vulnerable to catch infections. As a feature of our hospital housekeeping services, we take the onus to take our work seriously and sanitize the hospital using state-of-art technology.'
                                        },
                                        {
                                            title: 'We Make Use of Branded Tools and Equipment',
                                            desc: 'We at Quality Housekeeping Services believe in presenting complete assistance to our clients. This includes training our staff and updating them with the latest technologies. Each sector requires a different approach. As housekeeping service providers for hospitals, we take a notch higher. Herein, while it is necessary to continuously clean hospitals, but also ensure the equipment is also clean. Our company offers superior quality equipment and chemicals that are also disinfected from time to time.'
                                        },
                                        {
                                            title: 'High-Quality Techniques for Germ Control',
                                            desc: 'The healthcare environment needs to be spic and span every time. Even a little diligence can lead to invisible bacteria and viruses tracking their path in search of their hunt. We at Quality Housekeeping Services have our processes designed to meet the requirements and carry out our tasks with precision. Our team of expert staff checks every nook and corner from dustbins, bedrails, curtains, furnishing, kitchen, toilets, cabins, labs, pantries, machines, phones, cleaning it to the core. Besides, our hospital housekeeping services feature cleaning floors, ceilings, glasses by dusting and mopping them regularly.'
                                        },
                                        {
                                            title: 'Safe and Reliable Service',
                                            desc: 'A hospital is a place that happens to be busy throughout. There is no disturbance caused to any patient or staff. Hence, our company provides flexible schedules that do not hinder with the workings as well as get our work completed in time. Renowned for our hospital housekeeping services, we take the complete onus of the safety of staff, visitors, and patients. When it comes to disinfecting, we use chemicals such as iodoform, chlorine, phenol, and iodine-based liquids that are safe for use. Besides, we use it with precise care when using it in the kitchen, mess area, and pantries. Our hospital housekeeping staff are trained to use high-end equipment and methods with skills that ensure complete safety for everyone. With our skilled workforce, we ensure in providing a healthy and germ-free environment for healthy recovery and treatment of patients.'
                                        }
                                    ].map((service, index) => (
                                        <li key={index} style={{
                                            padding: '25px',
                                            background: '#f8f9ff',
                                            borderRadius: '8px',
                                            borderLeft: '4px solid #1976D2'
                                        }}>
                                            <h4 style={{ color: '#1976D2', marginBottom: '15px', fontSize: '1.2rem' }}>{service.title}</h4>
                                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: 0 }}>{service.desc}</p>
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
                            Contact us today for professional hospital housekeeping services in {locationName} that ensure a safe, 
                            sanitized, and healthy environment for patients, staff, and visitors.
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
    }

    // Nagpur content (default)
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
                                        desc: 'Patients and visitors should experience a positive impression of hospitals by having all public areas such as hallways and waiting rooms with reception areas kept completely clean. The housekeeping staff of our facility works towards maintaining public areas while ensuring their cleanliness and sanitization.'
                                    },
                                    { 
                                        title: 'Operation Theatre and Critical Care Unit Cleaning', 
                                        desc: 'The healthcare industry requires absolute cleanliness in all regions of operation theatres (OT) and critical care units (CCU). Specialized cleaning procedures which our staff follows ensure detailed disinfection process of all surfaces together with instruments and equipment throughout these particular areas.'
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

export default HospitalHousekeeping;
