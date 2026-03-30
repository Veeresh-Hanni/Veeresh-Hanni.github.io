import { useEffect, useRef } from 'react';

/**
 * Hook for lazy loading images
 * Improves performance by loading images only when they're in viewport
 * Falls back to immediate loading in older browsers
 */
export const useLazyLoad = () => {
    const ref = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '50px',
            threshold: 0.01,
        };

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Handle data-src attribute for actual image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }

                    // Handle data-srcset for responsive images
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }

                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, observerOptions);

        const images = ref.current?.querySelectorAll('img[data-src]');
        images?.forEach((img) => imageObserver.observe(img));

        return () => imageObserver.disconnect();
    }, []);

    return ref;
};

/**
 * Utility function to create lazy-loading image markup
 */
export const createLazyImage = (dataSrc, alt = '', className = '') => {
    return {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
        'data-src': dataSrc,
        alt,
        className: `lazy-image lazy-placeholder ${className}`,
        loading: 'lazy',
    };
};

export default { useLazyLoad, createLazyImage };
