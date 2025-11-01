import { useParams } from 'react-router-dom';

const HousekeepingAndCleaning = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Jabalpur';

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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Housekeeping And Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Housekeeping Services in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Why Choose Us */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Choose Us?
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                We, at Quality Housekeeping Services, are a team of professional experts who deem to offer the best 
                                housekeeping services in the city of Nagpur. Backed by a team of experts, we aim to present to our 
                                clients a sustainable environment that is free from pests, dirt and dust. Our experienced team holds 
                                expertise in managing and handling small scale to large scale projects which are in tandem with the 
                                client requirement. With extensive training and knowledge as well as equipped with the latest tools, 
                                we closely work in providing a hygienic and clean environment at work, leisure, and home.
                            </p>
                        </div>

                        {/* Who Are We */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Who are we?
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Quality Housekeeping Services are pioneers when it comes to offering a pollution-free environment. 
                                Cleanliness is next to Godliness, and this is exactly the mission we have armored ourselves to. Our 
                                company is ISO certified and has been a veteran in this sector with over 8 years of experience in 
                                serving our clients with heavy-duty execution. This has helped in creating a niche for ourselves in 
                                the mind of our clients. Our team comprises of professionals who hold expert knowledge of how to 
                                provide complete relief from pests in addition to management of primary activities ranging from 
                                household to industries. We are prominent housekeeping and cleaning service provider who is primarily 
                                involved in offering services at domestic, corporate, and industrial levels.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                                Cleaning is an integral an important part of housekeeping to keep the place free of bacteria and dirt. 
                                This includes washing, cleaning, sorting, removing clutter and rubbish thereby turning the place into 
                                a pleasant and peaceful abode.
                            </p>
                        </div>

                        {/* Housekeeping Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Housekeeping Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                Housekeeping is an indispensable activity of our daily life. The task involves taking up the 
                                responsibility of planning, manning, and troubleshooting which takes up a lot of energy. Our staff 
                                is trained to deal with the entire job activities with finesse and efficiency.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Residential',
                                        desc: 'Cleanliness and hygiene play an important role when it comes to healthy living. Our residential housekeeping service involves providing you with a beautiful house that is clean, tidy, and free of pollution. This includes tidying the furniture, marbles, removing rubbish and much more. Besides it also includes using of vacuum on curtains, tidying of bathrooms, bedroom as well as ironing of clothes etc.'
                                    },
                                    {
                                        title: 'Commercial',
                                        desc: 'We offer a sustainable working environment for our clients that is free from pests and ailments. This includes timely cleaning, supervision, and precaution from pest attack to turn the place completely spick and span. Our corporate services include removing clutter, sorting out stationary, keeping lunch rooms neat and tidy and much more.'
                                    },
                                    {
                                        title: 'Industrial',
                                        desc: 'Our housekeeping services for industrial sectors are in line with the needs of the particular industry. Based on the industry, we offer appropriate equipment and machine that can make the entire process easily deliverable on time. From small to big industries, we provide high-quality service and equipment that can penetrate the minutest areas thereby removing pests and dirt accurately.'
                                    }
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '25px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2'
                                    }}>
                                        <h4 style={{ color: '#1976D2', marginBottom: '15px', fontSize: '1.2rem' }}>{service.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: 0 }}>{service.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services We Undertake */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                We undertake the following services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '25px' }}>
                                As renowned housekeeping services provider, we undertake the following services which are as follows:
                            </p>
                            <ul style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                                gap: '15px',
                                listStyle: 'none',
                                padding: 0
                            }}>
                                {[
                                    'Mall Housekeeping Services',
                                    'Gym Housekeeping Services',
                                    'Hospital Housekeeping Services',
                                    'Hotel Housekeeping Services',
                                    'Household Housekeeping Services',
                                    'College Housekeeping Services',
                                    'Bank Housekeeping Services',
                                    'Housekeeping Manpower Supply'
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '12px 15px',
                                        background: 'white',
                                        borderRadius: '6px',
                                        color: '#555',
                                        fontSize: '0.95rem'
                                    }}>
                                        ● {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cleaning Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Cleaning Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                Quality Housekeeping Services is renowned for the utmost cleaning services in the city of Nagpur. 
                                Whether it is office or household, our workforce has experience in working in different environments 
                                and following the correct methods and procedures of cleaning. We use the latest technology, advanced 
                                equipment available in the market, and cleaning products in carrying out the entire cleaning activity 
                                with efficiency.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Residential',
                                        desc: 'Our home cleaning services involve arranging closet, reorganize cupboards, separating clutter, cleaning washrooms and bathrooms, disinfecting the floors with phenolic substances, fixing the peg rails, refilling toilet paper, dusting and cleaning the kitchen. Besides, we also offer sofas and carpet cleaning using the latest equipment to make them free of dust.'
                                    },
                                    {
                                        title: 'Commercial',
                                        desc: 'We deem to offer you a pollution-free working environment free of germs and bacteria. This includes employing a cleaning process relevant to the material of the chair, vacuuming carpets, and cleaning desks.'
                                    },
                                    {
                                        title: 'Industrial',
                                        desc: 'Our cleaning staff is occasionally trained and updated about the latest equipment to clean huge areas including hotels, offices, schools, colleges, hospitals that are prone to infection and require timely maintenance.'
                                    }
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '25px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745'
                                    }}>
                                        <h4 style={{ color: '#28a745', marginBottom: '15px', fontSize: '1.2rem' }}>{service.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: 0 }}>{service.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cleaning Services List */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                We offer the following cleaning services for:
                            </h2>
                            <ul style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                                gap: '15px',
                                listStyle: 'none',
                                padding: 0
                            }}>
                                {[
                                    'Sofa',
                                    'Tiles',
                                    'Gym',
                                    'Carpet',
                                    'Floor',
                                    'Building',
                                    'Deep Cleaning',
                                    'Office Chair'
                                ].map((service, index) => (
                                    <li key={index} style={{
                                        padding: '12px 15px',
                                        background: 'white',
                                        borderRadius: '6px',
                                        color: '#555',
                                        fontSize: '0.95rem'
                                    }}>
                                        ● {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Principles */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Principles
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Improve work environment',
                                        desc: 'The advantages are obvious! Not only the work environment will be greatly improved, but the efficiency will also go.'
                                    },
                                    {
                                        title: 'Improve safety',
                                        desc: 'Safety at work must be a priority for any company manager, the person with prime responsibility for maintaining the physical integrity of the workforce.'
                                    },
                                    {
                                        title: 'Efficient maintenance',
                                        desc: 'Clean and orderly environment where each object is not only on its place, but also indicated in a very visible way.'
                                    }
                                ].map((principle, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2'
                                    }}>
                                        <h4 style={{ color: '#1976D2', marginBottom: '10px', fontSize: '1.1rem' }}>{principle.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: 0 }}>{principle.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mission, Vision, Quality Policy */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <div style={{ marginBottom: '35px' }}>
                                <h3 style={{ color: '#1976D2', marginBottom: '15px', fontSize: '1.4rem' }}>Our Mission</h3>
                                <p style={{ lineHeight: '1.8', color: '#555' }}>
                                    We as a organization want to see with multi-skill workforce to build world-class facility management 
                                    company with the higher standard of professionalism, ethics, Quality. The Core Principle of the Company 
                                    is to give the best value to the clients with Strict Adherence.
                                </p>
                            </div>

                            <div style={{ marginBottom: '35px' }}>
                                <h3 style={{ color: '#1976D2', marginBottom: '15px', fontSize: '1.4rem' }}>Our Vision</h3>
                                <p style={{ lineHeight: '1.8', color: '#555' }}>
                                    To be recognized by our clients, employees and the industry as the leading Service provider of 
                                    housekeeping Services.
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: '#1976D2', marginBottom: '15px', fontSize: '1.4rem' }}>Our Quality Policy</h3>
                                <p style={{ lineHeight: '1.8', color: '#555' }}>
                                    We are committed to give world class housekeeping services with Quality Standards through continual 
                                    improvement and upgradation of technology and processes delivered through dedicated and committed 
                                    professionals.
                                </p>
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
                        Professional Housekeeping And Cleaning Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional housekeeping and cleaning services in {locationName}. Our expert team 
                        provides comprehensive solutions for residential, commercial, and industrial cleaning needs.
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

export default HousekeepingAndCleaning;
