import React from 'react';

const GymCleaning = () => {
    const locationName = 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Gym Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Gym Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Gym Cleaning Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services understands that gyms and fitness centers host large volumes of people therefore demanding thorough cleanliness to create a risk-free space for members. Maintaining complete cleanliness at all gym facilities remains important. The Gym Cleaning Services in {locationName} offered by Quality Housekeeping Services are tailored to fitness centers to build clean hygienic workout spaces that ensure client safety and motivation.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Gym Cleaning Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Equipment Sanitization and Cleaning',
                                        desc: 'All gym equipment requires scheduled disinfection measures to stop the accumulation of germs together with sweat and dust buildup. Our services sanitize gym machines together with free weights, dumbbells, yoga mats and additional fitness equipment and use professional disinfectants. Through routine cleaning of gym equipment you maintain clean working spaces that promote your clients\' health while blocking potential contamination transmission.'
                                    },
                                    {
                                        title: 'Flooring and Carpet Cleaning',
                                        desc: 'Gyms encounter numerous footsteps daily. Floor maintenance includes regular cleaning by mopping, sweeping and vacuuming according to the gym floor type. The service includes deep carpet cleaning for fitness studios and areas where carpets exist and eliminates stains as well as dirt and unpleasant odors from the surface.'
                                    },
                                    {
                                        title: 'Locker Room and Changing Area Cleaning',
                                        desc: 'The quality of clean locker rooms produces a comfortable gym experience. Our cleaning service includes thorough disinfection of locker benches and sinks together with lockers and shower facilities and high-touch areas in these areas. Your clients will experience a sanitized environment in the locker rooms because our team maintains proper supply of clean towels along with soap and toilet paper.'
                                    },
                                    {
                                        title: 'High-Touch Surface Disinfection',
                                        desc: 'The gym contains multiple high-touch surfaces that include door handles, light switches, handrails and other surfaces. Bacteria along with germs are particularly likely to build up in such locations. The cleaning team effectively uses disinfectants to perform routine surface sanitation of all high-contact areas thus creating safe conditions for gym staff members as well as clients.'
                                    },
                                    {
                                        title: 'Waste Disposal and Trash Management',
                                        desc: 'Waste management in gyms needs proper attention to maintain sanitary spaces. Our team member conducts trash bin emptying procedures while following guidelines for proper waste disposal. The gym benefits from our waste management assistance through our waste separation program for general waste and recyclable items which leads to a more sustainable gym atmosphere.'
                                    },
                                    {
                                        title: 'Deep Cleaning Services',
                                        desc: 'Deep and intensive cleaning becomes necessary for gyms from time to time. Our services target deep cleaning of specialized areas including the cleaning of vents, ducts and equipment support zones. During deep cleaning the team waxes or buffs all floors in addition to sanitizing locations that typically stay uncleaned.'
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
                                Why Choose Quality Housekeeping Services for Your Gym?
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The health of your clients depends heavily on gym cleanliness which together maintains a positive professional business image for all your clients. The willingness of clients to return to a gym increases when they notice cleanliness. The team at Quality Housekeeping Services delivers tailored cleaning solutions that sanitize all gym elements starting from equipment through locker rooms through flooring and zones with high foot traffic.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                Our team of experts dedicate their knowledge to gym cleanliness requirements because we create customized cleaning solutions for each individual gym client need. You can rely on us to maintain your gym as a safe, impeccably, clean and properly maintained space.
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
                        Professional Gym Cleaning Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional gym cleaning services in {locationName} that create a clean, 
                        hygienic, and motivating fitness environment for your members.
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

export default GymCleaning;
