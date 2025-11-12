import React from 'react';

const SchoolHousekeeping = () => {
    const locationName = 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>School Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional School Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                School Housekeeping Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                School Housekeeping Services In {locationName} India Provided By Quality Housekeeping Services dedicates itself to create clean safe and healthful surroundings for students and staff members at all times. Having a clean and well-preserved school environment supports the all-around health and development of students and staff members. Our Company caters to educational facilities which ensures all learning spaces including classrooms, hallways, restrooms and common areas remain clean for productive student activities.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive School Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Classroom and Office Cleaning',
                                        desc: 'Clean classrooms form the core learning environment for students because students normally spend their time within these spaces. The cleaning process of all classrooms includes complete maintenance of desks, chairs, whiteboards and floors. The cleaning team performs surface sanitization, floor vacuuming and high-touch areas sanitation to preserve clean and healthy educational spaces.'
                                    },
                                    {
                                        title: 'Restroom and Washroom Cleaning',
                                        desc: 'High people movement in restroom areas means frequent cleaning is needed to maintain hygiene standards. Our housekeeping staff dedicates their time to deep sanitization of sink areas, toilets and mirrors while maintaining a clean floor surface. Regular replacement of paper towels, soap and toilet paper keeps all restrooms well-stocked for both students and staff members.'
                                    },
                                    {
                                        title: 'Corridor and Hallway Cleaning',
                                        desc: 'Interior pathways near building entrances become easily contaminated by the large number of people who walk through them. Our team conducts comprehensive cleaning operations which include vacuuming, sweeping and mopping services to maintain all transit spaces in proper condition. Handrail disinfection together with disinfection of all high-touch surfaces helps prevent germ spread which keeps your educational facility neat and sanitary throughout daily operations.'
                                    },
                                    {
                                        title: 'Library and Common Area Cleaning',
                                        desc: 'Public libraries and common spaces need ongoing maintenance since they are busy social zones used by the entire student body. Our team members actively clean important school areas through shelf dusting, table wiping and chair cleaning while vacuuming the carpets. The facilities maintain an orderly appearance that welcomes staff members and students as they use these areas.'
                                    },
                                    {
                                        title: 'Flooring and Carpet Care',
                                        desc: 'Several sections of the educational facility possess diverse flooring materials that include tile, wood and carpet surfaces. The cleaning team performs regular floor maintenance tasks which combine sweeping and mopping operations with dedicated carpet cleaning processes for dust and allergen removal.'
                                    },
                                    {
                                        title: 'Specialized Cleaning for Labs',
                                        desc: 'We provide specialized cleaning services because science labs contain materials and equipment that need specific hazardous waste disposal. We customize cleaning services for your areas which includes the disinfection of countertops along with sink cleaning and equipment sterilization in laboratories.'
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
                                Why Choose Quality Housekeeping Services for Your School?
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                A school's cleanliness stands as a key factor for maintaining the health conditions and comfort levels of everyone who uses it. A school maintained in good condition creates both a pleasant learning atmosphere and reduces the spread of diseases and allergens. Quality Housekeeping Services actively supports clients in building a contamination-free educational area that welcomes positive teaching practices.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                Professional housekeepers at our company receive specialized training to care for educational institutions by focusing on essential details which establish safe environments for students and their staff members and teachers. We develops individual cleaning schedules based on your school needs including regular daily cleaning combined with evening deep cleaning procedures and prolonged maintenance programs.
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
                        Professional School Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional school housekeeping services in {locationName} that create a clean,
                        safe, and healthy learning environment for students and staff.
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

export default SchoolHousekeeping;