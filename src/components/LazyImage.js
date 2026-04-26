import { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, placeholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E'}
      alt={alt}
      className={className}
      onLoad={() => setIsLoaded(true)}
      style={{ opacity: isLoaded ? 1 : 0.5, transition: 'opacity 0.3s' }}
    />
  );
};

export default LazyImage;
