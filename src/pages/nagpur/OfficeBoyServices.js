import { useParams } from 'react-router-dom';

const OfficeBoyServices = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Office Boy Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Office Boy Service in {locationName} at Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Office Boy Service in {locationName} at Quality Housekeeping Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The trained office boys of Quality Housekeeping Services provide detailed and professional support for
                                multiple office duties. Our office boys deliver solutions for maintaining workplace order and environmental
                                cleanliness and fully operational office management.
                            </p>
                        </div>

                        {/* Comprehensive Office Boy Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Comprehensive Office Boy Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                The scope of our Office Boy Services extends to multiple workstation requirements which differentiate
                                according to your office demands. The following list details specific services which our office boys offer to clients:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    {
                                        title: 'Office Cleaning and Maintenance',
                                        desc: 'Office boys maintain their responsibility of keeping office spaces clean and organized while also managing their duty to eliminate clutter. The office boy maintains order in meeting rooms and restrooms and handles kitchen waste disposal on a regular basis.'
                                    },
                                    {
                                        title: 'Tea, Coffee, and Refreshment Services',
                                        desc: 'Preparing and delivering tea, coffee and refreshments stands as one of the essential duties office boys accomplish to support staff members and visitors with their supplies. The basic chore enhances office hospitality by providing hydration which supports employee alertness during work hours.'
                                    },
                                    {
                                        title: 'Courier and Errand Services',
                                        desc: 'The office boys can offer courier and errand services through their duties which include document drops and package pickups. The quick completion of urgent responsibilities results from their services which enables office staff to manage their workload effectively.'
                                    },
                                    {
                                        title: 'Meeting Room Setup and Support',
                                        desc: 'The task of setup preparation for meetings and supply management falls under office boys who directly support staff activities before essential tasks. The office boy arranges chairs with presentation equipment while ensuring stationery supply levels to keep operations running smoothly.'
                                    },
                                    {
                                        title: 'Inventory and Stock Management',
                                        desc: 'The office boy must manage office stocks which include stationery items as well as printer cartridges alongside other essential items. The monitoring of stock levels falls under their responsibilities and they submit reports for reordering supplies which ensures continuous office operations.'
                                    },
                                    {
                                        title: 'Administrative Support',
                                        desc: 'An office boy supports administrative work by handling filing duties along with photocopying and recordkeeping operations which reduces the workload of administrative staff.'
                                    }
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2',
                                        color: '#555'
                                    }}>
                                        <strong style={{ color: '#1976D2', fontSize: '1.1rem' }}>● {service.title}</strong>
                                        <p style={{ marginTop: '10px', marginBottom: 0, lineHeight: '1.8' }}>{service.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Significance of Office Boy Services */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Significance of Office Boy Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                An office boy plays a fundamental part in making daily operations run efficiently even though their
                                responsibilities seem basic. The exact reasons for using an office boy in the workplace include the
                                following points for workplace productivity:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    {
                                        title: 'Enhanced Productivity',
                                        desc: 'Office boys handle routine tasks that save time so your personnel maintain their main duties. The organization enables better productivity and efficiency within the workplace.'
                                    },
                                    {
                                        title: 'Improved Work Environment',
                                        desc: 'One should maintain his office with proper organization along with cleanliness because such conditions create both positive environmental conditions and happier staff emotions. The presence of office boys maintains top-office condition thus leading directly to improved workday productivity.'
                                    },
                                    {
                                        title: 'Cost-Effective Solution',
                                        desc: 'Businesses save money by accessing dependable office support services through their dedicated office boy recruitments. Businesses accessing office boy services create a cost-saving alternative that enables them to secure operational efficiency without adding a full-time staff member.'
                                    },
                                    {
                                        title: 'Professional Image',
                                        desc: 'The office boy\'s tasks for cleaning alongside refreshment service and assistance duties result in better experiences for clients who visit the workplace. New business relationships depend heavily on an excellent initial encounter to develop and grow into meaningful partnerships.'
                                    }
                                ].map((benefit, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        <strong style={{ color: '#28a745' }}>● {benefit.title}</strong>
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
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Trained and professional office boys who understand workplace requirements',
                                    'Reliable and punctual service that ensures smooth daily operations',
                                    'Flexible service packages tailored to your specific office needs',
                                    'Background-verified staff for your security and peace of mind',
                                    'Competitive pricing with transparent billing and no hidden costs',
                                    'Dedicated support team to address any concerns or requirements'
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

                        {/* Contact Us Today */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px',
                            textAlign: 'center'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '20px' }}>
                                Contact Us Today
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                The reliable professional Office Boy Services which you need to streamline your office operations are
                                available at Quality Housekeeping Services. Call us right away to discuss your requirements further.
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
                        Professional Office Boy Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional office boy services in {locationName} that will streamline your office operations.
                        Our trained staff provides reliable support to keep your workplace running smoothly.
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

export default OfficeBoyServices;
