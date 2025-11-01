import { useParams } from 'react-router-dom';

const SofaCleaning = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Nagpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Sofa Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Top-Class Sofa Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Sofa Cleaning Services In {locationName} India
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Top-Class Sofa Cleaning Services In {locationName}, India at your home. The sofa is probably the best and the most 
                                extensively used piece of furniture in your home. It is the place where you like to have your siesta. It is also 
                                the place where you want to lie down and read a book or watch a movie. There are so many things happening on the 
                                sofa that this starts to get dirty with time. To make sure that you do not have to compromise on the relaxation and 
                                comfort that this piece of furniture offers to you, you must hire the Sofa Cleaning Services from a trained and 
                                professional company like Quality housekeeping services that will make your sofa look as good as new.
                            </p>
                        </div>

                        {/* Best Services */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Best Services at the Most Economical Price
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                Your sofa or your couch attracts a lot of dirt and stains. This is a piece of furniture that all your family 
                                members use a lot which in turn makes it prone to dust and dirt. The sofa fabric absorbs all the dust. If you 
                                have dogs or other pets at home then the fabric could have the animal fur on it. Termites and pests are also 
                                common on sofas. So this makes it an urgency that you get your sofa treated soon. You want your sofa to be clean 
                                and get all the germs and unwanted particles cleaned away. However, the tough challenge is that it is not easy to 
                                clean your sofa. You need to hire a reliable and professional company that is trained to offer Sofa Cleaning Services.
                            </p>
                        </div>

                        {/* Why Hire Us */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Should You Hire Us for Cleaning Your Sofa?
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality housekeeping services is a trusted name and they offer cleaning services in various domain. When you hire 
                                us for a Sofa Cleaning Services we send our trained experts who are skilled at this particular job. We make use of 
                                cleaning materials that can clean your sofa fabric thoroughly. We also use tools that can penetrate even the most 
                                difficult parts of your sofa. We thus remove dirt and dust from areas where your hand or your home tools may never 
                                reach. No doubt we are the best Sofa Cleaning Services today.
                            </p>
                        </div>

                        {/* Latest Machines */}
                        <div className="content-block" style={{
                            background: '#f8f9ff',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                We Make Use of the Latest Machines
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                When you hire us to clean your sofa then we do our best to give back your sofa to you which will look as good as 
                                new. We make use of the latest technologies and the equipment that is on par with international standards. We make 
                                use of advanced tools that offer effective treatment and cleaning services. Your sofa is expensive and you would not 
                                want an unskilled person to handle its cleaning. This is why you should hire trained cleaners from us because we help 
                                to revive the appearance and the look of your sofa.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Features of Our Sofa Cleaning Service
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                At Quality housekeeping services we offer the following features when you purchase our Sofa Cleaning Services:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'We offer extensive vacuuming and lift the dust from every corner of your sofa',
                                    'We make use of a solution that is fabric friendly that further cleans your sofa',
                                    'The dirt is extracted using powerful machines',
                                    'Our cleaning methods will remove most of the spots and stains',
                                    'We also semi-dry your sofa',
                                    'Your sofa gets completely dried four hours after we finish our cleaning and looks as good as new'
                                ].map((feature, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {feature}
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
                        Professional Sofa Cleaning Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional sofa cleaning services in {locationName} that will make your sofa look as good as new. 
                        Our trained experts use the latest equipment and fabric-friendly solutions to deliver exceptional results.
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

export default SofaCleaning;
