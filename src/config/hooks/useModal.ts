// hooks/useModal.ts
import { useState, useCallback } from 'react';
import type { MouseEvent } from 'react';

/**
 * Hook personalizado para manejar el estado del modal y proporcionar las props
 * necesarias para el componente <Modal>.
 * @returns Un objeto con el estado del modal y las props para pasárselas directamente al componente Modal.
 */
export const useModal = () => {
    // 1. Estado para controlar si el modal está abierto o cerrado
    const [showModal, setShowModal] = useState(false);

    // 2. Función para abrir el modal, manejando el evento de clic si es necesario
    const openModal = useCallback((e?: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement> | MouseEvent) => {
        if (e) {
            e.preventDefault(); // Previene la acción por defecto
        }
        setShowModal(true);
    }, []);

    // 3. Función para cerrar el modal
    const closeModal = useCallback(() => {
        setShowModal(false);
    }, []);

    // 4. Objeto de props para pasar directamente al componente <Modal>
    const modalProps = {
        open: showModal,
        onClose: closeModal,
    };

    return {
        // Estado y funciones de control por si se necesitan individualmente
        showModal,
        openModal,
        closeModal,
        
        // El objeto de props que estabas buscando
        modalProps, 
    };
};