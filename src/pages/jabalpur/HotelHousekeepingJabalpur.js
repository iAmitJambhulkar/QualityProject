const HotelHousekeeping = () => {
    const locationName = 'Jabalpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Hotel Housekeeping Service</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Hotel Cleaning in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Hotel Housekeeping Service
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Cleanliness and hygiene play an integral role in the hotel industry. The rooms are your selling point, 
                                and how well kept it happens to be the deciding factor for your occupancy rate. Well, which guest wouldn't 
                                want to stay in a room that is well organized in addition to looking spic and span? Untidy and smelly rooms 
                                can be a big turn off for all the guests. This is what makes the hotel housekeeping an important aspect to 
                                pay more heed to. If you are frequented by complaints from guests, if you think you require the best 
                                housekeeping, then we are here to serve you with the best.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                We at Quality Housekeeping Services are renowned in the hospitality sector. Our trained experts offer Hotel 
                                Housekeeping Services, meeting the state-of-art hospitality requirements of your hotel or resort.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Hotel Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Use of Deep Cleaning Technology',
                                        desc: 'When it comes to hotels and resorts, regular mopping and dusting are not sufficient. As it is frequented by guests daily, deep cleaning is the perfect method to ensure the rooms are not untidy as well as dust-free. We offer deep cleaning services wherein we ensure every nook and corner of your hotel is cleaned. Our experts are trained in handling the latest equipment that assists in meeting the requirements to the core.'
                                    },
                                    {
                                        title: 'Maintenance of Bathroom, Toilets, and Showers',
                                        desc: 'Bathrooms, showers, and toilets demand the most attention in addition to being prone to the build-up of bacteria as they are used frequently. We at Quality Housekeeping Services make it our core objective to provide your guests clean and fresh bathrooms that are sufficiently stocked with all the essentials leaving no room for complaints. As a feature of our Hotel Housekeeping Services, our staff carries out an elaborate process of mopping the tiles, fixing grout, dusting exhaust fans and chimneys, disinfecting all the touchpoints such as bathtubs, toilet seats, etc. Besides, we also take care of all the essentials including body lotions, toothpaste, soaps, shampoos are stocked and arranged neatly.'
                                    },
                                    {
                                        title: 'Repairing and Fixing',
                                        desc: 'Windows and doors are one of the prime areas that accumulate maximum dust and dirt. Moreover, over time, the windows tend to lose their shine and the doors get dull due to peeling away of polish. While these areas are often left unheeded, we at Quality Housekeeping ensure no place is left untreated by looking into every aspect of hotel hospitality minutely. Our staff is divided into different zones who carry our regular checking, repair, and fixing of doorknobs, disinfect them, dust and polish windows, dry clean curtains, and draperies, repair broken hinges or handles, etc. Besides our services also include checking room number plates and signboards.'
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
                        Professional Hotel Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional hotel housekeeping services in {locationName} that ensure clean, 
                        hygienic, and welcoming accommodations for your guests.
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

export default HotelHousekeeping;
