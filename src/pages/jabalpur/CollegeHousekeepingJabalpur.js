import React from 'react';

const CollegeHousekeeping = () => {
    const locationName = 'Jabalpur';

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
                    <p style={{ fontSize: '1.3rem' }}>Professional College Cleaning in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                College Housekeeping Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                College is the time of a student's life where along with education one also creates golden memories of a lifetime. From the campus corridors to classrooms, libraries to canteens, memories are made every nook and corner. Herein, housekeeping becomes an integral part of ensuring colleges, universities, and institutions are kept spic and span as well as maintained accurately. Considering the vast area and numerous people visiting the campus, it is a huge responsibility to maintain complete hygiene and cleanliness on the premises.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                We at Quality Housekeeping Services have a team of expert and trained staff who take the complete onus of providing appropriate College Housekeeping Services Our team is continuously updated about the latest technologies and up-gradation in the hospitality sector. Thus, we do not fail in employing accurate measures to ensure the healthy maintenance of the campus.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive College Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Disinfecting Canteen and Food Area',
                                        desc: 'Canteens are one of the most crowded places in a college. Students throng in the canteen during lunch breaks and other times either to discuss projects or to just chill. This makes college housekeeping service a must. At quality housekeeping service, we carry out regular maintenance work wherein we spray disinfectants that are odorless and harmless for people. Besides, they are powerful to prevent the entry of ants, germs, bugs as well as rodents that can spread filth. In addition, if you require cleaning of pantry and food counters, we will help you in carrying out scheduled cleaning without hindering your work.'
                                    },
                                    {
                                        title: 'Restocking of Stationery and Paper Utilities',
                                        desc: 'Whether it is laboratories or classrooms, stationeries are an important part of organizations like schools and colleges. This includes stocking of rubbers, waster papers, refilling inks, chalk, etc. In addition, it also requires the cleaning of laboratory wastes such as used test tubes, bio lab waste, waste papers, craft materials, and much more. Herein, we remove all the clutter and dispose of it safely. Our staff is trained to provide all students with an organized study space that is appealing for students.'
                                    },
                                    {
                                        title: 'We Provide Eco-Friendly Recycling',
                                        desc: 'We at Quality Housekeeping Services believe in maintaining a sustainable environment and using products that are safe for the surrounding. Thus, whether it is sewage, paper waste, or collecting food remains, we carry out procedures that are eco-friendly, collect the waste, and recycle it. In addition, we also provide wastebaskets and containers that assist in recycling waste in a sustainable manner.'
                                    },
                                    {
                                        title: 'Sanitization of Floors and Washrooms',
                                        desc: 'Colleges are places where toilets are used regularly. As part of our College Housekeeping Services, we follow a strict cleaning procedure to clean water tanks and washrooms. We provide waste disposals and supplies that include safe and high-quality alcohol or phenol, toilet papers, napkins, and hand cleaners as per the requirement.'
                                    },
                                    {
                                        title: 'Maintenance of Carpet, Floors, Wall and Boards',
                                        desc: 'From regular mopping of college premises, hallways, offices, cabins, auditoriums, and carpets to a scheduled dusting of projectors and whiteboards we carry out every task with precision. Our company constantly strives to provide perfect services which thereby turns the environment into a pleasant environment.'
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
                        Professional College Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional college housekeeping services in {locationName} that maintain a clean, 
                        hygienic, and welcoming campus environment for students and staff.
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
