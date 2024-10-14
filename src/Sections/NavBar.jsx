import React, { useState } from 'react';
import CustomButton from '../Components/Button';
import SettingsModal from '../ModalSettings/SettingsModal'; // Asegúrate de ajustar la ruta si es necesario

function TodoNavBar() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('login_success');
        window.location.href = '/Login';
    };

    const handleSettings = () => {
        setIsSettingsOpen(true); // Abre el modal
    };

    return (
        <nav className="nav-bar">
            <div className="nombre-app">
                <h1>TODO-APP</h1>
            </div>
            <ul>
                <li>
                    <CustomButton label="Log-out" funcion={handleLogout} clase="NavbarButton" />
                </li>
                <li>
                    <CustomButton label="Settings" funcion={handleSettings} clase="NavbarButton" />
                </li>
            </ul>
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} /> {/* Cierra el modal */}
        </nav>
    );
}

export default TodoNavBar;
