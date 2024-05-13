import { useState, useEffect } from 'react';

const useSetScroll = (scrollPixel) => {
    const [isSticky, setIsSticky] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollPixel) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPixel]);

    return isSticky;
};

export default useSetScroll;