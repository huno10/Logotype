import { createContext, useCallback, useContext, useState } from "react";

export const modalContext = createContext()

export const useModalContex = () => useContext(modalContext)

export const ModalProvider = ({ children }) => {
    const [{ isOpen, text, title }, setModalData] = useState({
        isOpen: false,
        title: "",
        text: ""
    })

    const closeModal = useCallback(() => {
        setModalData({ isOpen: false, title: "", text: "" })
    }, [])

    const openModal = useCallback(({ title, text }) => {
        setModalData({ isOpen: true, title, text })
    }, [])

    return <modalContext.Provider value={{ isOpen, title, text, closeModal, openModal }}>
        {children}
    </modalContext.Provider>
}