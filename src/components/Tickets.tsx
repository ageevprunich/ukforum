import React, { useEffect, useRef, useState } from 'react';
import TicketsDesktop from './TicketsDesktop';
import TicketsMobile from './TicketsMobile';

const Tickets = () => {
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
            {isMobile ? <TicketsMobile /> : <TicketsDesktop />}
        </div>
    );
};

export default Tickets;