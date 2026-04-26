import React from 'react';

const GymCleaning = () => {
    const locationName = 'Jabalpur';

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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Gym Housekeeping Service</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Gym Cleaning in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Gym Housekeeping Service
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The biggest aspect of fitness is a clean and healthy environment. A gym is a place that is frequented by fitness enthusiasts throughout the day. This makes the equipment and materials more prone to sweat and dirt that when untreated can lead to infections. This makes it immensely important to ensure the fitness facilities are clean, spic, and span, smell good to create an inviting environment for members. We at Quality Housekeeping Services give our clients the added benefit of providing an environment free of dirt, reduced pollution, and improving health.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Gym Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Professional Cleaning of Locker Rooms and Training Equipment',
                                        desc: 'The locker room is one place that bears traffic and this is one area that needs the most concentration. We at Quality Housekeeping Services offer exceptional and professional Gym housekeeping service keeping the place free of dirt, bacteria, and germs. Our team is trained in using quality equipment that penetrates even the narrowest places and keeps them free of pests.'
                                    },
                                    {
                                        title: 'Training Equipment',
                                        desc: 'Training equipment is an integral part of a gym. We are renowned providers of Gym housekeeping services who ensure the place looks inviting and also makes the clients curious to indulge in a healthy workout. As clients use every gym equipment for training. Herein, as they sweat and perspire when using the equipment that leads to the build-up of bacteria on the surface. With our amazing team of experts, we use enhanced tools to turn the surface clean and free of germs and bacteria.'
                                    },
                                    {
                                        title: 'Changing Rags and Mats',
                                        desc: 'Irrespective of the floor whether it is a wooden floor, hard floor, plank boards, or exercise mats they are often prone to germs. Herein mere dusting and mopping are not sufficient. We include trained staff who constantly change the rags, scrubbers, and boards to ensure the clients do not contract infections from bacteria.'
                                    },
                                    {
                                        title: 'Polishing Mirrors, Maintaining Restrooms, Spas, and Lounge',
                                        desc: 'Many elite gyms comprise of other facilities like spa, lounge, health and nutrition club as well as children\'s rooms. These are the areas that require detailed maintenance that is fresh and relaxing. Our trained professional gym housekeeping staff replace mops, scrubs, rags as well as carry out polishing of mirrors, wash linens and spray chemical-free room fresheners to make it smell fresh and pleasant.'
                                    },
                                    {
                                        title: 'Management of Gym Supply Essentials',
                                        desc: 'We carry out scheduled maintenance of machines including equipment like treadmills, handlebars, dumbbells, and free weights. Besides, as a gym is a place that is often crowded with fitness enthusiasts, we provide a constant supply of disposable wet wipes for trainees, clean towels, refilling of handwash in the washroom, and much more to ensure the place is spic and span as well as organized.'
                                    },
                                    {
                                        title: 'Stain Removing and Dry Cleaning',
                                        desc: 'As a part of our Gym housekeeping service, we ensure the clients are welcomed to a fragrant environment. We ensure the changing rooms smell pleasant and there is no foul odor of sweaty socks or gymming clothes. Besides, occasional spot cleaning, wiping, mopping, spraying, flushing etc. are part of our services.'
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
                        Professional Gym Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional gym housekeeping services in {locationName} that create a clean, 
                        hygienic, and inviting fitness environment for your members.
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
