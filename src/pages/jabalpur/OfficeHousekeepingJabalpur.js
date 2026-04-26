const OfficeHousekeeping = () => {
    const locationName = 'Jabalpur';

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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Office Housekeeping Services</h1>
                    <p style={{ fontSize: '1.3rem' }}>Professional Office Cleaning in {locationName} by Quality Housekeeping Services</p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Office Housekeeping Services
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                A clean and hygienic place that smells never fails to leave an impression on the visitors. Besides, 
                                won't it look uninviting for your clients and visitors if they enter the office and find litter strewn 
                                around? The empty tea and coffee cups lying on the table, the reception desk carrying stain marks surely 
                                doesn't look alluring at all. The office is the second home for people and as tidy you would want your 
                                household to be, the same goes for offices too. This is why you require a professional office housekeeping 
                                service who will uplift the ambiance of the place and thereby play an integral role in motivating employees 
                                at the workplace.
                            </p>
                        </div>

                        {/* Your Partner */}
                        <div className="content-block" style={{
                            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%)',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Your Partner in Presenting a Relaxed Work Area
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                                An office space that is unclean and unkempt can look completely unprofessional. This also can dull the 
                                overall motivation and energy of the employees working in the office. We at Quality Housekeeping Services 
                                provide exquisite and expert Office Housekeeping Services without hindering the working of staff or members.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="content-block">
                            <h2 style={{ color: '#1976D2', marginBottom: '25px' }}>
                                Our Comprehensive Office Housekeeping Services
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                                {[
                                    {
                                        title: 'An Organized Way of Removing Clutter',
                                        desc: 'Every office space is unique and has different requirements. While some are small and easy to cover in less time, others are extremely vast that require a detailed strategy and work. Herein, this requires an organized way of working by dividing the zones to remove clutter from each space. As office housekeeping service providers, our staff take the onus of each zone separately and take complete responsibility to manage the space to the core.'
                                    },
                                    {
                                        title: 'Sorting and Managing Stationeries',
                                        desc: 'An office space that is neatly sorted instills in employees the curiosity to work. Our office housekeeping staff clears the unnecessary clutter and items strewn on the desk thereby freeing space for employees to work without trouble in a cleaner environment free of dust and dirt. Stationery is another aspect that also makes an integral part of offices. As a feature of our office housekeeping, our staff assists in organizing, reorganizing, and stacking the stationery at the workspace. This includes dusting bookshelves, arranging file cabinets, drawers, dusting keyboards, telephones, etc.'
                                    },
                                    {
                                        title: 'Management of Eating Areas and Pantry',
                                        desc: 'Most offices have lunchrooms. Who would like to eat in a room that is unclean and smells of remaining eatables? As part of our Office Housekeeping Services our staff carries out the work of emptying the bins, wiping the ovens with a damp cloth, washing coffee mugs, stocking the pantry as well as regularly disinfecting the water tanks. Besides, we also wipe, spray, and clean the tables, chairs as well as countertops.'
                                    },
                                    {
                                        title: 'Restrooms and Bathrooms',
                                        desc: 'As restrooms are frequented by office staff and visitors, it can turn dirty very often. We at Quality Housekeeping Services stack and arrange towels on towel holders, refill hand sanitizers, refill toilet papers, disinfect urinals and toilet seats as well as washbowls and sinks. Besides, we also polish the mirrors, remove excess grout from tiles, clean away sanitary napkins, and clean the floors with chemical-free disinfectants. We use high-end equipment that offers appropriate maintenance of office space thereby making it an ideal place for employees to work in peace and hygienic environment.'
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
                        Professional Office Housekeeping Services
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px',
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        lineHeight: '1.8'
                    }}>
                        Contact us today for professional office housekeeping services in {locationName} that create a clean, 
                        organized, and motivating work environment for your team.
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

export default OfficeHousekeeping;
