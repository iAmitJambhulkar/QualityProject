import { useParams } from 'react-router-dom';

const OfficeChairCleaning = () => {
    const { location } = useParams();
    const locationName = location ? location.charAt(0).toUpperCase() + location.slice(1) : 'Jabalpur';

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1920)',
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Office Chair Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Chair Cleaning in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Office Chair Cleaning Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                There are bacteria in the air that isn't visible to the naked eyes. And while you are busy working 
                                on your keyboard or coordinating a meeting over the telephone, these uninvited guests are silently 
                                creeping into your workspace. While we ensure to keep our surroundings and workspace spic and span, 
                                we often negate and pay very little heed to our office chairs on which we spend most of our time in 
                                the office.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Office Chair Cleaning Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'Getting Rid of Bacterial Invaders',
                                        desc: 'The humidity in the air combined with bacteria and germs tend to get accumulated in the chairs. This keeps building up insects, pollens, infections, and dirt that when left untreated lead to illness and allergic effects. Here is where we at Quality Housekeeping Services come in for your rescue with our army providing office chair cleaning services. With our services, we ensure that even the material things that you use including furniture, chair, and desk are hygienic and safe.'
                                    },
                                    {
                                        title: 'Enhancing the Appeal of Your Work Station',
                                        desc: 'It is a known fact that you surrounding has an immense impact on your psychology and how your day will go. As an obvious fact, working in a space that is clean and appealing free of dust can instill the curiosity to work and leave an ever-lasting impression on the visitors. As a feature of our office chair cleaning service employ advanced tools including vacuum cleaners, dusters as well as scrubbers to turn your chair into an enchanting element, sitting on which you can make working a comfortable task.'
                                    },
                                    {
                                        title: 'Keeping Hygiene and Health at the Top',
                                        desc: 'The unclean surrounding is not only unappealing but also has graver consequences. Especially for people who have a history of allergies, cough, or asthma, merely touching chair handles that are covered with dirt can impact you. Also, the accumulated dust can trigger allergies that can be completely discomforting. We at Quality Housekeeping Services take complete care and onus to pay attention to even the minutest details. Thus, we provide in-depth cleaning areas that come more in contact with us like handlebars and revolver knobs.'
                                    },
                                    {
                                        title: 'Cleaning and Repairs',
                                        desc: 'Our staff is trained to identify and gain an understanding of what material the chair is made of. Moreover, each material requires a different procedure for cleaning and repairing. Herein, understanding what material the chair is made of we employ the perfect procedure thereby offering ultimate cleaning. For example, if the outer covering of the chair is made of vinyl or plastic requires a different technique of cleaning in comparison to those made of leather. Our trained staff leaves no stone unturned in presenting an ideal workstation that is pleasant and free of germs.'
                                    },
                                    {
                                        title: 'Repairing Damages',
                                        desc: 'It is a known fact that over time, even the highest quality chairs tend to look worn out. From broken wheels to torn out foam pads, cushions to loosened hinges it goes through a lot of wear and tear. As part of our office chair cleaning services, we repair these small damages thereby removing any room for discomfort for employees including muscle spasms, back pain, etc.'
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
                        Professional Office Chair Cleaning Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional office chair cleaning services in {locationName} that ensure hygienic, 
                        clean, and comfortable seating for your workspace.
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

export default OfficeChairCleaning;
