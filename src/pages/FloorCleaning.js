import { useParams } from 'react-router-dom';

const FloorCleaning = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Floor Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Floor Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Floor Cleaning Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                At Quality Housekeeping Services, we provide superior floor cleaning services in {locationName} which serve 
                                residential and commercial premises. The team at Quality Housekeeping Services tackles challenging dirt along 
                                with stains and grime using their experienced approach with modern equipment and cleaning solutions. We will 
                                deliver exceptional floor services for every type and size of space with dedication to long-lasting outcomes.
                            </p>
                        </div>

                        {/* Our Cleaning Process */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Cleaning Process
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                The floor cleaning process at our company delivers these main benefits:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'First, we inspect your floors to determine its current condition as well as detect specific problems like stains that need particular attention. From the assessment we can choose a cleaning solution that will give the best results to your floor',
                                    'Our pre-cleaning preparation consists of moving furniture and objects which enable complete floor cleaning',
                                    'The cleaning process includes specialized solutions together with particular cleaning tools that we apply depending on your floor type',
                                    'We conclude by carrying out a floor inspection to verify that your area is completely debris-free. Upon discovering further soiling areas we will re-treat them',
                                    'Our team finishes by completely drying all floors to stop possible accidents from wet surfaces. Our team takes care to dry carpet surfaces promptly to prevent mold and mildew development'
                                ].map((step, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'white',
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
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Benefits of Professional Floor Cleaning
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                Hiring professional floor cleaners provides better benefits than attempting cleaning work yourself. Among the 
                                main advantages which customers gain are:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Professional cleaning extends floor lifetime through protection from damage which results in enhanced room aesthetics for several years. Our cleaning process eradicates dangerous particles which leads to improved health conditions in indoor areas that benefit both people in their homes and those in workplaces',
                                    'High-quality floor cleaning affects the overall appearance together with the ambience of your space no matter what floor materials you use',
                                    'Professional cleaning services erase harmful odors to produce clean-smelling environments for your space',
                                    'Professional floor maintenance eliminates time strain because eliminating floor dirt from big areas traditionally requires both extensive time commitment and heavy physical effort. Working with professionals gives you the advantage of time management and professional floor service quality performance'
                                ].map((benefit, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us Today */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Contact Us Today
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Dirty flooring will reduce the attractiveness and cleanliness of your environment so never ignore this problem. 
                                Contact Quality Housekeeping Services and their team of professionals to achieve floor cleaning with perfection. 
                                Our team stands prepared to deliver top service for bathrooms and any residential or commercial area needs.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Contact our team right now to gather details about our Floor Cleaning in {locationName} Service together with an 
                                appointment booking. Quality Housekeeping Services stands ready to help maintain your floors at for an inviting 
                                environment of your space.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                We offer genuine services with the right pricing and our service quality is unmatched. All that you need to do 
                                is to get in touch with us, state your requirements and we will ensure to set our team to start with the floor 
                                cleaning service in {locationName} for you. Wait no further and call us today to enjoy a spotless and clean floor 
                                be it at home or a commercial space.
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
                        Professional Floor Cleaning Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional floor cleaning services in {locationName} that will restore your floors to their 
                        original shine. Our expert team uses state-of-the-art equipment and eco-friendly solutions to deliver exceptional results.
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

export default FloorCleaning;
