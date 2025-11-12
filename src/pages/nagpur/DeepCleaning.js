import { useParams } from 'react-router-dom';

const DeepCleaning = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Deep Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Top-Class Deep Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Deep Cleaning Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Top-Class Deep Cleaning Services Provided By Quality Housekeeping Services {locationName} focuses on reaching 
                                locations that normal cleaning schedules typically miss. Experts in our team will optimize your area sanitation 
                                by providing deep cleaning services for residential homes and commercial areas like offices as well as business spaces.
                            </p>
                        </div>

                        {/* What is Deep Cleaning */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                What is Deep Cleaning?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                Intensive tasks and in-depth cleaning operations make up the procedure of deep cleaning which surpasses standard 
                                cleaning methods. At our deep cleaning service we clean all restricted spaces like ceiling fans and areas behind 
                                furniture and kitchen appliances until everything is sanitized to perfection.
                            </p>
                        </div>

                        {/* Service Operations */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                A Specific Overview of Our Deep Cleaning Service Operations
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                Those who need their home or business to achieve absolute refreshment while becoming spotless should contact our 
                                deep cleaning services. Your search for comprehensive cleaning services ends at Quality Housekeeping Services because 
                                our organization provides the best deep clean solution.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Expert Cleaning Team', 
                                        desc: 'The expert team of cleaners receives extensive training for delivering exceptional deep cleaning services. They possess professional cleaning tools alongside industry-grade equipment and eco-friendly products which enable them to handle stubborn dirt, grime and stain problems.'
                                    },
                                    { 
                                        title: 'Comprehensive and Thorough', 
                                        desc: 'The professionals offer deep cleaning of countertops in the kitchen while performing sanitary sink maintenance and stove scrubbing. They also complete cleaning tasks behind appliances and underneath the stove and clean the entire kitchen area. The bathroom cleaning process entails grout cleaning and both toilet bowl sanitizing. Our staff clean all living areas by dusting furniture. We clean under the bed by vacuuming while dusting objects in the room before performing high-touch sanitary procedures.'
                                    },
                                    { 
                                        title: 'Eco-Friendly Products', 
                                        desc: 'Our cleaning solutions provide both effectiveness and environmental and health-focused safety standards to protect your wellness. Our company always selects non-toxic and eco-friendly cleaning solutions as our main cleaning products. Customers can rely on us for powerful cleaning operations that protect everyone in your space including humans and domestic pets.'
                                    },
                                    { 
                                        title: 'Flexible Scheduling', 
                                        desc: 'Our business acknowledges that daily life requires adaptable scheduling so our cleaning services accommodate your personal scheduling needs. Our company adapts to your schedule for one-time services and scheduled periodic cleaning needs.'
                                    },
                                    { 
                                        title: 'Affordable and Transparent Pricing', 
                                        desc: 'Our service costs maintain simple clear rates. Our company presents an accurate cost to clients before any cleaning work begins. The service delivers exceptional quality together with affordable rates which match your budget.'
                                    }
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2'
                                    }}>
                                        <h4 style={{ color: '#333', marginBottom: '10px' }}>{service.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555' }}>{service.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* When to Consider */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Deep Cleaning Services Should Be Considered Under What Specific Circumstances?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                The necessity for deep cleaning arises in various situations which make such services beneficial:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'You should seek deep cleaning service before you begin occupying any fresh residential or commercial space',
                                    'Deep cleaning of your space before new residents move in is essential to provide a clean beginning for them',
                                    'The excessive dust accumulation after renovation projects makes the area extremely messy',
                                    'Quality Housekeeping Services specializes in complete dust removal and construction cleanup of all spaces'
                                ].map((item, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {item}
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
                        Conclusion
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        The deep cleaning services from Quality Housekeeping Services offer professional and affordable services that customize 
                        cleaning solutions to match any space requirements from homes, offices or commercial properties. You can trust us to 
                        generate exceptional results because we possess expert staff and implement eco-friendly products while focusing on details. 
                        Contact our team right now for deep cleaning service booking and transform your space.
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

export default DeepCleaning;
