import { useParams } from 'react-router-dom';

const ChairCleaning = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1503602642458-232111445657?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Chair Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Chair Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Chair Cleaning Service at Quality Housekeeping Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The professionals at Quality Housekeeping Services understand that chairs serve as fundamental elements of 
                                furniture since they form integral components of comfortable workplace environments across homes, workplaces 
                                and commercial spaces. Your chairs receive detailed cleaning services which are customized according to their 
                                individual requirements.
                            </p>
                        </div>

                        {/* Our Process */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Chair Cleaning Services in {locationName} – Our Process
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'We start each cleaning process by examining what fabric materials they contain and to evaluate their dirtiness and stain presence and their unique cleaning requirements. Before undertaking cleaning tasks we determine the best approach based on collected information about the effective cleaning solutions and methods',
                                    'A preliminary stage begins with using pre-treatment solutions to address visible stains and marks along with heavily dirty areas. Professional cleaning products aim to dissolve dirt, grease and other stubborn particles so the fabric receives an intense cleaning process',
                                    'We employ professional cleaning devices which include steam cleaners and upholstery extractors for performing deep cleans of your chairs. Our specialized cleaning techniques enter deep into the fabric fibers to lift all dirt particles along with dust, allergens and bacterial contaminants. The cleaning process effectively removes and restores fabric surface and deep texture',
                                    'We finalize your chair cleaning service by expediting its drying process before use. The drying process is essential to stop the growth of dampness and musty odors. Our drying process will rapidly dry your chairs while making them immediately ready for use right after completion',
                                    'A final quality review occurs after cleaning operations to confirm that chairs show no remaining stains or dust. Our team checks all minor elements during the process to make sure you get satisfied results'
                                ].map((step, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2',
                                        color: '#555'
                                    }}>
                                        <strong>Step {index + 1}:</strong> {step}
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
                                Benefits of Chair Cleaning
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Through routine cleaning activities you gain multiple advantages which increase furniture sustainability while 
                                enhancing both environment comfort and cleanliness.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Tainted and dirty chairs create a negative impact on space appearance. The chair cleaning service from our company will revive faded colors while completely refreshing the appearance so your furniture looks brand new once again',
                                    'Regular cleaning enhances comfort because it cleans away both fabric debris as well as padding contaminants which creates chairs suitable for pleasant seating',
                                    'Upholstered chairs retain dust along with allergens and bacteria deep inside the fabric thus creating discomfort for sensitive users',
                                    'Proper care through maintenance and cleaning procedures allows your chairs to survive longer because dirt and grime accumulation cannot damage the material components or construction. Professional cleaning service extends the lifetime of your furniture because it helps keep the furniture in excellent shape for multiple years',
                                    'Chairs that get proper cleaning become essential elements to stop the environment from becoming unclean. Working areas with large visitor volume need proper cleaning to create both favorable business impressions and maintain good space health'
                                ].map((benefit, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Types of Chairs */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Types of Chairs We Clean
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                Our equipment and professional skills make us capable of deep cleaning each variety of chair that comes our way.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Our team handles complete furniture cleaning of all office seat variety including executive chairs and ergonomic office seating which maintains professional workplaces for all clients',
                                    'The cleaning team at our company handles dining chairs to eliminate food smudges and restore chair appearance',
                                    'Our team offers complete restoration of upholstered armchairs as well as lounge chairs which keeps your living areas feeling fresh',
                                    'As part of our service we specialize in cleaning products made from leather and vinyl by using techniques which maintain the original quality of the material'
                                ].map((type, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2',
                                        color: '#555'
                                    }}>
                                        ✓ {type}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us Today */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px',
                            textAlign: 'center'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Contact Us Today
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services helps customers recover their chairs' cleanliness and comfort through their 
                                specialized chair cleaning program.
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
                        Professional Chair Cleaning Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional chair cleaning services in {locationName} that will restore your chairs to their 
                        original beauty. Our expert team uses state-of-the-art equipment and eco-friendly solutions to deliver exceptional results.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/contact" className="btn btn-large" style={{
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

export default ChairCleaning;
