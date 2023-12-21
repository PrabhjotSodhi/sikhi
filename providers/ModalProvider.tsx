"use client";

import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    // Tip: Modals can cause hydration error which is why we never want to render a Modal if we are SSR
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) {
        return null;
    }
    
    return (
        <>
            Modals
        </>
    );
}

export default ModalProvider;