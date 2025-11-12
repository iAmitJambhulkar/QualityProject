import { useParams } from 'react-router-dom';

const TilesCleaning = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Tiles Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Tiles Cleaning in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Tiles Cleaning Service in {locationName} by Quality Housekeeping Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Tiles need proper cleaning to sustain their vibrant appearance and sanitary state. Our team of experts 
                                utilizes the best modern cleaning equipment and safe environmental products to treat substantial stains 
                                on ceramic porcelain or natural stone tiles. Our company serves residential and commercial clients to 
                                maintain clean and welcoming environments for both types of properties.
                            </p>
                        </div>

                        {/* Comprehensive Tile Cleaning Process */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Comprehensive Tile Cleaning Process
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                The process of tile cleaning consists of the following steps:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    {
                                        title: 'Inspection and Assessment',
                                        desc: 'Our inspection process starts with evaluating tile and grout conditions to determine their cleanliness level and stain concentrations. Through this process we can find the most suitable solutions and procedures that will achieve maximum cleanliness.'
                                    },
                                    {
                                        title: 'Pre-Treatment',
                                        desc: 'We begin by applying industrial-grade pre-treatment solutions on heavily affected tiles and grout to dissolve the stubborn dirt particles. The initial step elevates stubborn contaminants so they become ready for deep cleaning procedures.'
                                    },
                                    {
                                        title: 'Deep Cleaning',
                                        desc: 'Our team uses high-powered cleaning devices paired with effective substances to perform a complete cleaning job on tiles and grout. Using hot water extraction combined with high-pressure steam cleaning technique we extract all contaminants that exist deep inside the porous materials of tiles and grout.'
                                    },
                                    {
                                        title: 'Grout Cleaning and Sealing',
                                        desc: 'Tile cleaning professionals consider grout as their main cleaning challenge because dirt penetrates its porous structure causing discoloration. The team utilizes specific tools to clean between grout lines by restoring the original grout color. A sealing solution gets applied to forestall future surface staining on the tiles.'
                                    },
                                    {
                                        title: 'Drying and Protection',
                                        desc: 'We execute drying procedures following tile and grout cleaning to stop water spots from occurring and to avoid mold buildup on surfaces. We apply protective sealants directly after cleaning to maintain clean appearance and extend the outcomes from our service.'
                                    }
                                ].map((step, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2',
                                        color: '#555'
                                    }}>
                                        <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>{index + 1}. {step.title}</strong>
                                        <p style={{ marginTop: '10px', marginBottom: 0, lineHeight: '1.8' }}>{step.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Benefits of Professional Tile Cleaning
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                The maintenance of floor and wall beauty alongside hygiene depends heavily on tile cleaning procedures. 
                                Selecting our professional tile cleaning service delivers numerous advantages:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    {
                                        title: 'Restores Shine and Luster',
                                        desc: 'Tiles gradually lose their shine because dirt combined with mineral deposits builds up over time. Professional cleaning services from us restore tile surfaces to their original lustrous state creating a brand new appearance.'
                                    },
                                    {
                                        title: 'Removes Stubborn Stains',
                                        desc: 'Professional tile cleaning services successfully remove stubborn stains and scum as well as grime from tile surfaces in kitchens and bathrooms. Our tile cleaning process fully removes stubborn stains while restoring tile appearance according to its original state.'
                                    },
                                    {
                                        title: 'Improves Health and Hygiene',
                                        desc: 'Regular cleaning of tiles and grout prevents their accumulation of bacteria together with allergens and mold because they cannot thrive in a healthy maintenance environment. The tile cleaning process we provide removes dangerous microorganisms which establishes improved health conditions for people dwelling or working in the area.'
                                    },
                                    {
                                        title: 'Enhances Aesthetic Appeal',
                                        desc: 'Clean and well-kept tiles create a significant improvement in the visual appearance of all rooms. The appearance and charm of any space improves dramatically after tile cleaning which applies to all areas including bathrooms, kitchens and hallways.'
                                    },
                                    {
                                        title: 'Extends Tile Lifespan',
                                        desc: 'Professional cleaning support will extend the life-duration of tiles while simultaneously preventing damage between cleanings. Your tiles will stay unscathed while grout stains become prevented from becoming permanent and tiles maintain their protected state from damage and scratching.'
                                    }
                                ].map((benefit, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        <strong style={{ color: '#28a745' }}>✓ {benefit.title}</strong>
                                        <p style={{ marginTop: '10px', marginBottom: 0, lineHeight: '1.8' }}>{benefit.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Why Choose Us */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Choose Quality Housekeeping Services?
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                The tile cleaning department at Quality Housekeeping Services strives to deliver the highest possible 
                                quality service combined with satisfied customers. We offer our services which are unique for customers.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Experienced and trained professionals who understand different tile types and cleaning requirements',
                                    'Advanced cleaning equipment and eco-friendly products that are safe for your family and environment',
                                    'Comprehensive cleaning process that addresses both tiles and grout for complete restoration',
                                    'Flexible scheduling to accommodate your convenience without disrupting your routine',
                                    'Competitive pricing with transparent quotes and no hidden charges',
                                    'Customer satisfaction guarantee - we work until you are completely satisfied with the results'
                                ].map((reason, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2',
                                        color: '#555'
                                    }}>
                                        ✓ {reason}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Closing Statement */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                At Quality Housekeeping Services, we are committed to providing exceptional tile cleaning services that 
                                transform your spaces. Whether you need residential or commercial tile cleaning in {locationName}, our 
                                expert team is ready to restore the beauty and hygiene of your tiles.
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
                        Professional Tiles Cleaning Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional tiles cleaning services in {locationName} that will restore your tiles to their 
                        original beauty. Our expert team uses state-of-the-art equipment and eco-friendly solutions to deliver exceptional results.
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

export default TilesCleaning;
