import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Google Maps Section */}
      <section style={{ padding: 0, margin: 0 }}>
        <div style={{ width: '100%', height: 'calc(100vh - 70px)', minHeight: '600px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2847447891844!2d79.08847631493654!3d21.145847885937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11be826593b%3A0xf52df834e7f0e46f!2sQuality%20Housekeeping%20Services%20In%20Nagpur%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Quality Housekeeping Services Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
