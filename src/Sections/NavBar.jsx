import { useState } from 'react';
import CustomButton from '../Components/Button.jsx';
import SettingsModal from '../ModalSettings/SettingsModal.jsx';

function TodoNavBar() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('login_success');
        window.location.href = '../login.html';
    };

    const handleSettings = () => {
        setIsSettingsOpen(true);
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
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </nav>
    );
}

export default TodoNavBar;
