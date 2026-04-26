const BlogSofaCarpetCleaning = () => {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>The Best Sofa Cleaning Services in Nagpur India</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Sofa & Carpet Cleaning Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                THE BEST SOFA CLEANING SERVICES IN NAGPUR INDIA, JUST CHECK IT!
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Holiness is frequently related to cleanliness. This saying can truly relate to sofa cleaning too. A clean atmosphere 
                                draws good energy, whereas a filthy environment invites pests. Pests can be quite bothersome if not dealt with promptly. 
                                Their quick reproduction allows them to spread like wildfire in no time. They not only pollute and harm the environment, 
                                but they may also cause considerable damage to furniture and other goods when the paints penetrate and hollow out hardwood 
                                furniture.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                As a result, adopting precautions like hiring sofa cleaning services in Nagpur India at the appropriate time is always a 
                                smart idea.
                            </p>
                        </div>

                        {/* Why Hire Us */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why should you hire Quality Housekeeping Services?
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                A skilled team works diligently to keep your house clean and free of germs. You shouldn't compare our sofa cleaning 
                                services in Nagpur India to those of housework maids any longer. We use modern cleaning tools and supplies since we're 
                                specialists, allowing us to enter and thoroughly clean spaces that ordinary cleaning cannot do.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                What are the benefits of hiring us?
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'With the help of our reasonable cleaning services, you can properly manage your time and stop worrying about household duties',
                                    'You may relax while we take care of the tiresome household chores for you',
                                    'We oversee staff and provide guaranteed replacements when necessary',
                                    'We have equipment and technologies that are not available with cleaning maids',
                                    'We respect your requirements. Our personnel is competent, well-trained, and furnished',
                                    'We travel with housekeeping supplies. By doing this, you may avoid having to gather all the supplies needed for thorough cleaning of your sofa'
                                ].map((benefit, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2',
                                        color: '#555'
                                    }}>
                                        ✓ {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Process of Cleaning a Sofa at Home
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '25px' }}>
                                Utilizing expert assistance creates the greatest method for cleaning couches at home. This is how it functions:
                            </p>

                            <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    { title: 'Getting Rid of Dust', desc: 'We provide a comprehensive couch deep cleaning service. To manage dirt professionally, a range of vacuum cube sizes are employed. Furthermore, dirt particles that are buried deeper are eliminated.' },
                                    { title: 'Shampoo couches', desc: 'Professional cleaning services only use specifically designed antiseptics and couch cleansers to clean sofas and remove stains. This contributes to the preservation of high-quality leather and textiles.' },
                                    { title: 'Fabric Scrubbing', desc: 'Experts utilize cleaning products and brushes designed specifically for cleaning couches. Scrubbing the fabric removes even the smallest dust particles and accentuates the unique feel of the furniture.' },
                                    { title: 'Moisture Extraction', desc: 'With steam cleaning, moisture removal, and texture development of the sofa set, you may enjoy the delight of brand-new fixtures.' },
                                    { title: 'Surface Reconditioning', desc: 'The couch\'s surface is cleaned during the reconditioning process. This cleaning includes surface reconditioning with an added sheen.' }
                                ].map((step, index) => (
                                    <div key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2'
                                    }}>
                                        <h4 style={{ color: '#333', marginBottom: '10px' }}>{step.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555' }}>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Types Covered */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Types of Sofas Covered in our Professional Sofa Cleaning Services
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                                {[
                                    'Fabric Sofa Cleaning Services',
                                    'Suede Couches Cleaning',
                                    'Cleaning Velvet Couch',
                                    'Leather Sofa Cleaning Service',
                                    'Cleaning Upholstered Furniture'
                                ].map((type, index) => (
                                    <li key={index} style={{
                                        padding: '12px 15px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {type}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* FAQs */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '30px', textAlign: 'center' }}>
                                Frequently Asked Questions
                            </h2>
                            <div style={{ display: 'grid', gap: '25px' }}>
                                {[
                                    { q: 'Is it worthwhile cleaning your sofa?', a: 'It\'s recommended to hire a professional to fully clean your sofa. A competent couch cleaning service provider may do everything from cleaning to refinishing. Professional cleaning cleans your furniture from the inside out to ensure long-term usage.' },
                                    { q: 'How often should I get my sofa deep cleaned?', a: 'The frequency of cleaning is affected by several variables, including proximity to a busy road, the presence of children or pets, daily routines, etc. But we advise using our service at least once every three months.' },
                                    { q: 'What Kind Of Chemicals Do You Use?', a: 'Quality sofa cleaning service of Nagpur employs green cleaning products that are safe for both people and animals in your household and are both eco and people-friendly.' },
                                    { q: 'Does sofa cleaning make my sofa wear early?', a: 'Absolutely not; in fact, the reverse may be true. Your sofa deteriorates as a result of the accumulation of dirt and other filth. Your sofas have new vitality, colour, and volume after receiving professional sofa cleaning.' }
                                ].map((faq, index) => (
                                    <div key={index}>
                                        <h4 style={{ color: '#333', marginBottom: '10px' }}>{faq.q}</h4>
                                        <p style={{ color: '#555', lineHeight: '1.8' }}>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
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
                        Ready for Professional Sofa & Carpet Cleaning?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Let Quality Housekeeping Services restore your furniture to its original beauty. 
                        Contact us today for professional sofa and carpet cleaning services in Nagpur!
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/quote" className="btn btn-large" style={{
                            backgroundColor: 'white',
                            color: '#1976D2',
                            padding: '15px 40px',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s'
                        }}>
                            Get Free Quote
                        </a>
                        <a
                            href="tel:+91-9028907874"
                            className="btn btn-large btn-secondary"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                padding: '15px 40px',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s'
                            }}
                        >
                            Call Now: +91-9028907874
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogSofaCarpetCleaning;
