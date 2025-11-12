import React from 'react';

const GuesthouseHousekeepingJabalpur = () => {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Guesthouse Housekeeping Services</h1>
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
                                Guesthouse Housekeeping Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                A guest is someone who is held in high regard and we do everything to make them feel comfortable. As a 
                                guesthouse owner, your responsibility is a notch higher. Ensuring your guest is comfortable and is happy 
                                with the services is the most important criterion. Herein, presenting a clean and hygienic surrounding is 
                                what plays a major role. And this is what makes employing housekeeping services for your guesthouse a must 
                                if you want to lay a lasting impression on your clients in addition to ensuring your guesthouse is in a 
                                well-kempt manner.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                We at Quality Housekeeping Services offer Guesthouse Housekeeping Services, wherein our services are 
                                tailored exclusively to meet the needs of our clients. With an excellent team of efficient staff who are 
                                trained in every aspect of housekeeping and maintenance deem to be your helping hand in offering the 
                                appropriate amenities and facilities to your guests. Here is a list of features you can expect under our 
                                Guesthouse Housekeeping Services:
                            </p>
                        </div>

                        {/* Welcome Guests */}
                        <div className="content-block" style={{
                            background: '#f8f9ff',
                            padding: '30px',
                            borderRadius: '12px',
                            borderLeft: '4px solid #1976D2'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Welcome Your Guests with a Smile and a Positive Vibe
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                The very ambiance of a place lays the first and also everlasting impression on the visitors. The same goes 
                                for guesthouses too. Hence, it is highly important to maintain cleanliness and keep all the places dust free. 
                                Who likes to be welcomed by dirt and foul odor of leftover food, or stains on the desk in the reception area? 
                                Well, no one right!
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                We at quality housekeeping services offer guest housekeeping for corporates, hospitality, and homes. Using 
                                high-tech technology and the latest methods we carry out regular vacuuming, mopping, and supervision of the 
                                place to ensure it is spic and span with shine.
                            </p>
                        </div>

                        {/* Laundry and Linen */}
                        <div className="content-block" style={{
                            background: '#f8f9ff',
                            padding: '30px',
                            borderRadius: '12px',
                            borderLeft: '4px solid #28a745'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Laundry and Linen
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Laundry happens to be the most important and integral part of guesthouses. Your guests would surely expect 
                                fresh laundry and linen and herein meeting the hygiene needs is completely vital. Our services include 
                                replacing the old laundry and linen as well as getting them thoroughly washed using high-quality cleansing 
                                washing products.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Besides, we provide varied procedures to change different types of linen which include bed sheets, table 
                                cloths, blankets, cushion covers, furnishing upholstery, draperies, curtains, spa, and bath towels, carpets, 
                                etc. by changing it every day and restocking fresh and clear ones.
                            </p>
                        </div>

                        {/* Maintenance of Spa, Pools, Bathrooms */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Maintenance of Spa, Pools, Bathrooms, and Toilets
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The next stop after laundry which is most important for guesthouses are toilets and spas. Our entire staff 
                                is highly trained in paying special attention to these areas and keeping them clean. We carry out occasional 
                                cleansing activities that include scrubbing of tiles, removing stains, clean bathtubs and toilet seats, deep 
                                cleaning of pools and spas.
                            </p>
                        </div>

                        {/* Management of Furniture */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Management of Furniture and Fittings
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                When it comes to guest houses, furniture and fittings require the most care. As they are handled by thousands 
                                of people, it tends to become stained, accumulate spots as well as may break off. As a part of our service, 
                                we manage sofa-beds, dust and wipe furniture, photo frames, statues, and other assets on a timely basis.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                A clean surrounding is always welcoming and we at Quality Housekeeping Services offer you the best!
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
                        Ready to Impress Your Guests?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Let Quality Housekeeping Services create a welcoming and pristine environment for your guesthouse. 
                        Contact us today for professional guesthouse housekeeping services in Jabalpur!
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

export default GuesthouseHousekeepingJabalpur;
