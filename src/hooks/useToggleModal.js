import { useState } from 'react';

function useToggleModal(action) {
    const [isOpen, setIsOpen] = useState(false);
    if (action === 'open') {
        setIsOpen(true);
    } else {
        setIsOpen(false);
    }
    return { isOpen };
}

export default useToggleModal;