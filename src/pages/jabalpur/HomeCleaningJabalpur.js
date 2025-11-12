import React from 'react';

const HomeCleaningJabalpur = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Home Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Quality Housekeeping Services in Jabalpur</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Home Cleaning Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Home is where we have our souls attached. Each one is attached to their home in a unique manner. 
                                And who wouldn't like their abode to be spic and span that is clean as well as hygienic, free of illness? 
                                This is what makes Home Cleaning Services a must and most important criterion to ensure sound health and a 
                                pleasant environment. Our company, Quality Housekeeping Services have designed specialized cleaning services 
                                wherein we go an extra mile in ensuring a completely clean paradise for our clients.
                            </p>
                        </div>

                        {/* Providing Secure Surrounding */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Providing You a Secure Surrounding
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The surrounding air is comprised of bacteria, germs, and viruses. These are not visible to the naked eye 
                                and often gets accumulated in places like furniture, curtains, clothes, floorings, etc. Occasional cleaning 
                                is very important to ensure everyone at your home is healthy. We at Quality Housekeeping Services bring you 
                                the best quality services using the latest techniques, thereby assisting you in freeing our home from pests 
                                and dirt.
                            </p>
                        </div>

                        {/* Bathroom and Toilet Cleaning */}
                        <div className="content-block" style={{
                            background: '#f8f9ff',
                            padding: '30px',
                            borderRadius: '12px',
                            borderLeft: '4px solid #1976D2'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Bathroom and Toilet Cleaning
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Bathrooms and toilets are places that are more prone to bacteria and germs. These are also areas that reflect 
                                the health of the overall family. Moreover, would it feel appealing for your guests to use an unhygienic and 
                                untidy bathroom or toilet?
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Our Home Cleaning Services carry out a thorough cleaning of tubs, showers, pipes, toilet mirrors, washbowls, 
                                countertops, as well as sinks. Besides, our staff empty the wastebaskets, disinfect the toilet seats, floors 
                                using warm water and chemical disinfectants. Additionally, we also restock the toilet paper, carry out repairs 
                                required including fixing of peg rails, etc.
                            </p>
                        </div>

                        {/* Kitchen Cleaning */}
                        <div className="content-block" style={{
                            background: '#f8f9ff',
                            padding: '30px',
                            borderRadius: '12px',
                            borderLeft: '4px solid #28a745'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Kitchen Cleaning
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                The next important area in a home is the kitchen. This is the place that is most frequented by bacteria. 
                                Leftover pieces of food, stains of oil, sauces, can turn the overall appeal of the place. Besides, these 
                                can further accumulate germs, hence need to be treated using appropriate methods.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                From cleaning sinks, scrubbing granites, fixing the cabinetry, dusting lighting fixtures, our staff carries 
                                out the cleaning task to the ultimate proficiency. For removing the stubborn stains of oils we use advanced 
                                tools that are safe and chemical free.
                            </p>
                        </div>

                        {/* Clearing Clutter */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Clearing Clutter
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Our home cleaning service doesn't leave a single corner and takes the complete onus of turning the house tidy. 
                                Every corner is vacuumed to remove cobwebs, dust, and clutter that is disposed of safely. Besides, we also help 
                                in the arrangement of DVDs, CDs on the shelf, dusting and rearranging books in the library, gadgets, accessories 
                                as well as apparels in the closet.
                            </p>
                        </div>

                        {/* Sorting Cupboards */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Sorting Cupboards
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Does opening your closet or cupboard lead to all clothes kowtowing you? Then we are here to help you out. 
                                From reorganizing things to sorting them out, our staff is trained in every aspect of home cleaning.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Also, if you are wanting to discard old clothes and want them to be recycled or donated, we will help you 
                                clean them. From cleaning the floors, dusting the carpets, sofa to turning your home spic and shining, we 
                                ensure to present you with a pleasant and fragrant home.
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
                        Ready for a Spotless Home?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Let Quality Housekeeping Services transform your home into a clean, hygienic, and pleasant paradise. 
                        Contact us today for professional home cleaning services in Jabalpur!
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

export default HomeCleaningJabalpur;
