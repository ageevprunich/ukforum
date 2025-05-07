import React, { useEffect, useRef, useState } from 'react';
import HeroSectionDesktop from './HeroSectionDesktop';
import HeroSectionMobile from './HeroSectionMobile';

const HeroSection = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                setIsMobile(width <= 991);
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef}>
            {isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}
        </div>
    );
};

export default HeroSection;