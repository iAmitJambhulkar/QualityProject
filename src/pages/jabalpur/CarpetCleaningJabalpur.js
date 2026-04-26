import React from 'react';

const CarpetCleaningJabalpur = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Carpet Cleaning Services</h1>
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
                                Carpet Cleaning Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Has your carpet lately turned dull? Does it look dirty and screaming for attention? Well, then we at 
                                quality housekeeping services are here to serve you. Most often, homeowners pay the least attention to 
                                cleaning carpets. However, when carpets are left unclean for a long time can lead to the accumulation of 
                                bacteria and thereby affect the health of the family members as well as dull their appearance. Carpet 
                                cleaning becomes even more important if you have small toddlers or infants are your house. Kids have the 
                                habit of touching anything and later putting their hands in the mouth.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                This makes it extremely important to apply for Carpet Cleaning Services regularly for your home and offices. 
                                We at Quality Housekeeping Services offer high-quality services for cleaning carpets using high-end technology. 
                                Below listed are the features of our Carpet Cleaning Services:
                            </p>
                        </div>

                        {/* Removing Stains */}
                        <div className="content-block" style={{
                            background: '#f8f9ff',
                            padding: '30px',
                            borderRadius: '12px',
                            borderLeft: '4px solid #1976D2'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Removing Stains, Spills, and Spots
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                A carpet often is prone to coffee spills, stains of ink, oil, food particulates, and much more. This not 
                                only makes the carpet look dirty but also can affect its quality. We at Quality Housekeeping Services use 
                                a combination of different processes for extracting wastes and minutest particles from the carpets.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Our company presents the latest technology to clear the stains and spills efficiently. Some of the techniques 
                                include hot water extraction of foam shampooing to clean the carpets, making them look fresh and new.
                            </p>
                        </div>

                        {/* Vacuum Cleaners */}
                        <div className="content-block" style={{
                            background: '#f8f9ff',
                            padding: '30px',
                            borderRadius: '12px',
                            borderLeft: '4px solid #28a745'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Using Vacuum Cleaners
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Vacuum cleaning is one of the perfect and appropriate ways of carrying out carpet cleaning. While mopping 
                                and dusting does help in getting rid of dust, most often when the carpet contains excessive dust, vacuuming 
                                makes an ideal way of removing dirt. However, herein, using the right kind of vacuum cleaner can assist you 
                                in the right way.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Our staff is trained to use high-quality equipment and have a keen understanding of which cleaning appliance 
                                is suitable for your carpet. Using these we remove all the dust, wipe out dirt that gets accumulated in the 
                                pores of the carpet.
                            </p>
                        </div>

                        {/* Reducing Darkened Spots */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Reducing Darkened Spots in the Carpet
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                While carpets in the home get accumulated by lesser dirt, in the case of hotels and offices where carpets 
                                are spread over a large area are more probable to stains and marks. Carpets that are laid out in the hallway 
                                get covered with footprints and shoe marks which can be stubborn to get rid of. This when left untreated can 
                                form darkened spots on the carpet.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                This is also a usual phenomenon in areas where you have kept furniture and when removed it leaves out marks 
                                highlighting it on the carpet. Our company uses an advanced technique to remove stubborn stains and restore 
                                the original shine of the carpet.
                            </p>
                        </div>

                        {/* Removing Germs */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Removing Germs and Allergens
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                When carpets are left uncleaned for a long period, it can affect the immunity and life span of the carpet. 
                                Herein, our staff works beneath the layers of fabric by getting rid of the allergens from the deepest area. 
                                Our services include a combination of cleaning, sanitizing, and disinfecting the carpets to extract the toxic 
                                trapped underneath.
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
                        Ready for Fresh, Clean Carpets?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Let Quality Housekeeping Services restore your carpets to their original beauty. 
                        Contact us today for professional carpet cleaning services in Jabalpur!
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

export default CarpetCleaningJabalpur;
