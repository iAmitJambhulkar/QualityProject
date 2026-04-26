
const CollegeHousekeeping = () => {
    const locationName = 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>College Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional College Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                College Housekeeping Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Classes, extracurricular activities and social events during college consumes most students' time which prevents them from performing routine cleaning work. That's where we come in. The College Housekeeping Service from our company makes college life easier through complete cleaning and maintenance of student's residential spaces.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                Quality Housekeeping Services provides students with college cleaning solutions. The stress of cleaning should not bother students who need to focus on other important aspects of their college life.
                            </p>
                        </div>

                        {/* Our Service Sets Apart */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our College Housekeeping Service Sets Itself Apart
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Affordable and Flexible Plans',
                                        desc: 'Quality Housekeeping Services adjusts their prices to fit within normal student finances while delivering valuable cleaning services. Our company grants multiple scheduling possibilities that let customers select between weekly, bi-weekly or month-to-month cleaning plans based on their personal requirements.'
                                    },
                                    {
                                        title: 'Customized Cleaning Plans',
                                        desc: 'Our services adapt to each student\'s home environment because we recognize that every residence presents different cleaning needs. Each environment receives comprehensive cleaning service including shared spaces alongside personal living spaces regardless of it being a dormitory resident, shared apartment or private studio occupant.'
                                    },
                                    {
                                        title: 'Experienced and Trustworthy Cleaning Professionals',
                                        desc: 'The cleaning industry has many experienced employees who receive full professional training at our company. Our team understands the different sanitation needs of college residence areas while giving your environment both deep sanitary treatment and neat organizational solutions. The employee background checks at our company ensure your residence is under the care of trustworthy cleaning professionals.'
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

                        {/* Comprehensive Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Comprehensive Cleaning Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                College Housekeeping Service at our company maintains complete coverage of all clean-up operations be it regular floor tasks, intensive bathroom and kitchen maintenance or waste disposal. We will carefully handle any special requirements you have before completely tidying up your living area. Here's how our process works:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    { title: 'Request a Quote', desc: 'Our clients can reach out to obtain a customized cleaning service estimate easily. An affordable cost estimate will be developed according to your requirements and the size of the space you need to be cleaned.' },
                                    { title: 'Choose Your Cleaning Schedule', desc: 'You will choose among the available cleaning schedules after receiving our quote for service. Our company provides both deep cleaning solutions for one-time service and scheduled maintenance cleaning services for daily needs.' },
                                    { title: 'Sit Back and Relax', desc: 'When your scheduled cleaning day arrives our team of professionals will start clean work using environmentally friendly products to tidy every section.' },
                                    { title: 'Enjoy Your Clean Space', desc: 'You will get a fresh space free from clutter and your living spaces will be completely sanitized after the job finishes. Enjoy your studies and downtime in a clean environment free from dust and floor dirt in addition to having an orderly bathroom as our service provides comfort and cleanliness.' }
                                ].map((step, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        <strong style={{ color: '#1976D2' }}>{index + 1}. {step.title}</strong> - {step.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Conclusion */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>Conclusion</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services dedicates itself to creating memorable college years by maintaining your living space always clean and welcoming for you. The affordable College Housekeeping Services from our company allow students to keep studying while our team handles their housekeeping needs with reliability and personalized options. Contact us now to understand how we will help you establish a stress-free environment through our college cleaning services.
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
                        Professional College Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional college housekeeping services in {locationName} that create a clean,
                        comfortable, and stress-free living environment for students.
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

export default CollegeHousekeeping;
