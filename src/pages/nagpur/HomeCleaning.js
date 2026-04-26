import { useParams } from 'react-router-dom';

const HomeCleaning = () => {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Home Cleaning Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Top-Class Home Cleaning in {locationName}, India</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                The Ultimate Guide to Home Cleaning: Tips, Tricks And Benefits
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                Keeping your home clean is more than just a chore; it's a way to enhance your living environment, promote health, 
                                and create a welcoming space. Whether you're tackling daily cleaning tasks or planning a deep cleaning session, 
                                having the right approach can make all the difference. Let's dive into the essentials of home cleaning and explore 
                                some expert tips to keep your home sparkling clean.
                            </p>
                        </div>

                        {/* Why Important */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Why Is Home Cleaning Important?
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                A clean home isn't just visually appealing—it's essential for:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    { title: 'Health and Hygiene', desc: 'Regular cleaning reduces allergens, dust, and bacteria, helping to prevent illnesses and allergies.' },
                                    { title: 'Stress Reduction', desc: 'A tidy space can significantly improve mental well-being and reduce stress levels.' },
                                    { title: 'Enhanced Productivity', desc: 'A clean environment fosters focus and productivity, making it easier to work or relax.' },
                                    { title: 'Prolonged Lifespan of Assets', desc: 'Proper cleaning and maintenance can extend the life of furniture, appliances, and other household items.' }
                                ].map((item, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2'
                                    }}>
                                        <strong style={{ color: '#333' }}>{index + 1}. {item.title}:</strong> <span style={{ color: '#555' }}>{item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Essential Tips */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Essential Home Cleaning Tips
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    { 
                                        title: 'Create a Cleaning Schedule', 
                                        desc: 'Divide your cleaning tasks into daily, weekly, and monthly routines. This helps prevent overwhelm and keeps your home consistently clean.'
                                    },
                                    { 
                                        title: 'Declutter Before Cleaning', 
                                        desc: 'Clear away unnecessary items to make cleaning more efficient. A clutter-free space is easier to clean and organize.'
                                    },
                                    { 
                                        title: 'Use the Right Tools and Products', 
                                        desc: 'Invest in quality cleaning tools like microfiber cloths, a reliable vacuum cleaner, and eco-friendly cleaning solutions to achieve better results.'
                                    },
                                    { 
                                        title: 'Focus on High-Traffic Areas', 
                                        desc: 'Pay extra attention to spaces like the kitchen, bathroom, and living room, which accumulate the most dirt and germs.'
                                    },
                                    { 
                                        title: 'Adopt a Top-to-Bottom Approach', 
                                        desc: 'Start cleaning from higher surfaces like shelves and work your way down to avoid spreading dust and debris.'
                                    }
                                ].map((tip, index) => (
                                    <li key={index} style={{
                                        padding: '20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745'
                                    }}>
                                        <h4 style={{ color: '#333', marginBottom: '10px' }}>{index + 1}. {tip.title}</h4>
                                        <p style={{ lineHeight: '1.8', color: '#555' }}>{tip.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Professional Services */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Benefits of Professional Home Cleaning Services Provided By Quality Housekeeping Services
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Sometimes, a DIY approach isn't enough, especially for deep cleaning tasks. Here's why hiring professional home 
                                cleaning services is a smart choice:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    { title: 'Time-Saving', desc: 'Professionals handle cleaning efficiently, giving you more time to focus on other priorities.' },
                                    { title: 'Expertise and Equipment', desc: 'Trained cleaners use advanced tools and techniques to achieve a thorough clean.' },
                                    { title: 'Customized Solutions', desc: 'Professional services offer tailored cleaning plans to meet your specific needs.' },
                                    { title: 'Healthier Home Environment', desc: 'Experts can tackle hard-to-reach areas and eliminate stubborn stains, ensuring a healthier living space.' }
                                ].map((benefit, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1976D2',
                                        color: '#555'
                                    }}>
                                        <strong>{index + 1}. {benefit.title}:</strong> {benefit.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Eco-Friendly */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Eco-Friendly Home Cleaning Practices
                            </h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                Being environmentally conscious is crucial when it comes to home cleaning. Here are some tips to clean sustainably:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                                {[
                                    'Use Natural Cleaning Agents: Opt for ingredients like vinegar, baking soda, and lemon for effective and eco-friendly cleaning',
                                    'Reduce Water Usage: Be mindful of water consumption during cleaning tasks',
                                    'Recycle and Reuse: Repurpose old towels and clothes as cleaning rags instead of using disposable wipes',
                                    'Choose Green Products: Look for cleaning products that are biodegradable and free from harsh chemicals'
                                ].map((practice, index) => (
                                    <li key={index} style={{
                                        padding: '15px 20px',
                                        background: '#f8f9ff',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #28a745',
                                        color: '#555'
                                    }}>
                                        ✓ {practice}
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
                        Home cleaning Services is a vital part of maintaining a healthy and happy living environment. Whether handling tasks 
                        yourself or enlisting professional help, the key is consistency and using the right techniques. At Quality Housekeeping 
                        Services, we deliver top-notch home cleaning solutions tailored to your need. Let us take the hassle out of cleaning so 
                        you can enjoy a spotless and stress-free home. Ready to experience a cleaner home? Contact us today for professional home 
                        cleaning services that make a difference!
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

export default HomeCleaning;
