import { useParams } from 'react-router-dom';

const OfficeHousekeeping = () => {
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
                        background: 'rgba(0, 0, 0, 0.3)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                    }}></div>
                    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Office Housekeeping Services</h1>
                        <p style={{ fontSize: '1.3rem' }}>Professional Office Cleaning in {locationName} by Quality Housekeeping Services</p>
                    </div>
                </section>

                {/* Main Content */}
                <section style={{ padding: '80px 0' }}>
                    <div className="container">
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                            {/* Introduction */}
                            <div className="content-block">
                                <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                    Office Housekeeping Services
                                </h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                    A clean and hygienic place that smells never fails t leave an impression on the visitors. Besides, 
                                    won't it look uninviting for your clients and visitors if they enter the office and find litter strewn 
                                    around? The empty tea and coffee cups lying on the table, the reception desk carrying stain marks surely 
                                    doesn't look alluring at all. The office is the second home for people and as tidy you would want your 
                                    household to be, the same goes for offices too. This is why you require a professional office housekeeping 
                                    service who will uplift the ambiance of the place and thereby play an integral role in motivating employees 
                                    at the workplace.
                                </p>
                            </div>

                            {/* Your Partner */}
                            <div className="content-block" style={{
                                background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                                padding: '40px',
                                borderRadius: '15px'
                            }}>
                                <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                    Your Partner in Presenting a Relaxed Work Area
                                </h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                    An office space that is unclean and unkempt can look completely unprofessional. This also can dull the 
                                    overall motivation and energy of the employees working in the office. We at Quality Housekeeping Services 
                                    provide exquisite and expert Office Housekeeping Services without hindering the working of staff or members.
                                </p>
                            </div>

                            {/* Services */}
                            <div className="content-block">
                                <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                    Our Comprehensive Office Housekeeping Services
                                </h2>

                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                    {[
                                        {
                                            title: 'An Organized Way of Removing Clutter',
                                            desc: 'Every office space is unique and has different requirements. While some are small and easy to cover in less time, others are extremely vast that require a detailed strategy and work. Herein, this requires an organized way of working by dividing the zones to remove clutter from each space. As office housekeeping service providers, our staff take the onus of each zone separately and take complete responsibility to manage the space to the core.'
                                        },
                                        {
                                            title: 'Sorting and Managing Stationeries',
                                            desc: 'An office space that is neatly sorted instills in employees the curiosity to work. Our office housekeeping staff clears the unnecessary clutter and items strewn on the desk thereby freeing space for employees to work without trouble in a cleaner environment free of dust and dirt. Stationery is another aspect that also makes an integral part of offices. As a feature of our office housekeeping, our staff assists in organizing, reorganizing, and stacking the stationery at the workspace. This includes dusting bookshelves, arranging file cabinets, drawers, dusting keyboards, telephones, etc.'
                                        },
                                        {
                                            title: 'Management of Eating Areas and Pantry',
                                            desc: 'Most offices have lunchrooms. Who would like to eat in a room that is unclean and smells of remaining eatables? As part of our Office Housekeeping Services our staff carries out the work of emptying the bins, wiping the ovens with a damp cloth, washing coffee mugs, stocking the pantry as well as regularly disinfecting the water tanks. Besides, we also wipe, spray, and clean the tables, chairs as well as countertops.'
                                        },
                                        {
                                            title: 'Restrooms and Bathrooms',
                                            desc: 'As restrooms are frequented by office staff and visitors, it can turn dirty very often. We at Quality Housekeeping Services stack and arrange towels on towel holders, refill hand sanitizers, refill toilet papers, disinfect urinals and toilet seats as well as washbowls and sinks. Besides, we also polish the mirrors, remove excess grout from tiles, clean away sanitary napkins, and clean the floors with chemical-free disinfectants. We use high-end equipment that offers appropriate maintenance of office space thereby making it an ideal place for employees to work in peace and hygienic environment.'
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
                            Professional Office Housekeeping Services
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            marginBottom: '30px',
                            maxWidth: '800px',
                            margin: '0 auto 30px',
                            lineHeight: '1.8'
                        }}>
                            Contact us today for professional office housekeeping services in {locationName} that create a clean, 
                            organized, and motivating work environment for your team.
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
                    background: 'rgba(0, 0, 0, 0.3)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
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
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
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
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
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
                                    borderLeft: '4px solid #1976D2'
                                }}>
                                    <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>Common Areas Cleaning</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The office cleaning operations include dusting, sweeping and mopping to keep all common areas
                                        such as corridors, reception, break room and meeting room clean and well-maintained.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #1976D2'
                                }}>
                                    <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>Floor & Carpet Maintenance</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The maintenance team handles floor cleaning, carpet vacuuming and hard floor mopping while
                                        maintaining perfect surface conditions.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #1976D2'
                                }}>
                                    <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>Washroom Sanitization</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The service includes detailed washroom cleanups and hygienic practices i.e. thorough sanitiser
                                        restocking, mirror cleaning and maintenance of taps with supply system restocking.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #1976D2'
                                }}>
                                    <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>Window & Glass Cleaning</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        Our staff maintains office windows as well as glass surfaces free of streaks while keeping them
                                        well-maintained for an impressive external appearance.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #1976D2'
                                }}>
                                    <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>Waste Management</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        The office housekeepers manage efficient waste disposal activities as well as appropriate garbage
                                        collection to maintain a clutter-free work environment.
                                    </p>
                                </li>

                                <li style={{
                                    padding: '20px',
                                    background: '#f8f9ff',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #1976D2'
                                }}>
                                    <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>Post-Event Cleaning</strong>
                                    <p style={{ margin: '10px 0 0', color: '#555' }}>
                                        Post-event cleaning forms a part of our services which enables us to return your office to its
                                        clean organized state following meetings or corporate events.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Key Features */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>Our Key Features</h2>

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
                            <h2 style={{ color: '#1976D2', marginBottom: '20px', textAlign: 'center' }}>
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
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>Our Commitment to Excellence</h2>
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
                background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
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

export default OfficeHousekeeping;
