import React from 'react';

const SchoolHousekeeping = () => {
    const locationName = 'Jabalpur';

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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>School Housekeeping Service</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional School Cleaning in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                School Housekeeping Service
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                School is not just a temple of knowledge but a place that nurtures in kids important values. Herein, as the saying goes, "preach what you follow" becomes a necessary criterion to follow. Hygiene and proper sanitization are two crucial aspects that ensure a clean and disease-free environment. And a school that does not follow appropriate housekeeping and maintenance would surely never be able to instill in children the role of hygiene. This makes hiring a professional School Housekeeping Service important.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                We at Quality Housekeeping Services are industry experts who are renowned for providing a hygienic and safe environment for children in school to help them learn and grow healthy.
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
                                        title: 'Attention to Detailing',
                                        desc: 'Washrooms and Eating areas are places that are more prone to dirt and infections. Dirt when left uncleaned can lead to infection and illnesses among children and staff in the school. But with quality housekeeping service, you can be completely assured to have spik and span washrooms and eating areas with no leftover food or tissues thrown anywhere. Our experts install waste vending machines in the eating area and washrooms with separate containers for dry and wet waste. Besides, we ensure the washrooms are sanitized and washed using high-quality solutions to keep infections away.'
                                    },
                                    {
                                        title: 'Libraries and Books',
                                        desc: 'Libraries are another area that is most prone to bugs. As the books are kept closely packed in the rack, there is no space for light or air to enter which makes it easy for bugs to breed. Under our School Housekeeping Services, we carry out periodic maintenance of libraries using systematic tools such as vacuuming and get the dirt removed from stuffed and narrow corners.'
                                    },
                                    {
                                        title: 'Maintenance of Furniture and Furnishings',
                                        desc: 'The school benches often face the brunt of the mischief of kids who scratch the desks, doors, blackboards, and walls with crayons, pencils, and pens. We take the onus to maintain the sanctity and aura of the classrooms. We carry out regular maintenance checks, repairing, and cleaning. This includes using high-end techniques to remove dirt from furniture, lab tools, tables, chairs, desks as well as blackboard thereby leaving a shiny slate for students to learn from.'
                                    },
                                    {
                                        title: 'Corridors, Playground, and Floors',
                                        desc: 'Quality Housekeeping Services house trustworthy and professional housekeepers who are trained to employ appropriate techniques to provide you a hygienic environment. Our team comprises of passionate and skilled staff who clear the dustbins from every class, replace it with a cleaned one, throw, mop the corridors, floors, amphitheaters using high-quality disinfectants and sprays. Besides, they also replace the old curtains from windows, chalks from the blackboard.'
                                    },
                                    {
                                        title: 'Checking ACs and Projectors',
                                        desc: 'From changing of bulbs, carrying out periodic maintenance of air conditioners, light fittings, and fixture cleaning, our team provides high-quality service that would ensure there an aura of serenity spread around. Providing a clean and hygienic environment is the core objective of us at Quality Housekeeping Services and with our school housekeeping, we deem to provide a healthy and dirt free alma mater to children.'
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
