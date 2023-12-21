"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

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
            <Modal isOpen onChange={() => {}} title="Test Modal" description="Test Description">
                Test Children
            </Modal>
        </>
    );
}

export default ModalProvider;