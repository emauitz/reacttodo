import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function PerfilTodo({ nombre }) {

    const [fecha, setFecha] = useState('');
    const [saludo, setSaludo] = useState('');

    useEffect(() => {
        const ahora = DateTime.now();
        setFecha(ahora.toLocaleString(DateTime.DATE_SHORT));

        const actualizarSaludo = (nombre) => {
            const hora = ahora.hour;
            let saludo;

            if (hora >= 6 && hora < 12) {
                saludo = 'buenos días';
            } else if (hora >= 12 && hora < 18) {
                saludo = 'buenas tardes';
            } else {
                saludo = 'buenas noches';
            }
            setSaludo(`Hola ${nombre}, ${saludo}`);
        };

        actualizarSaludo(nombre);
    }, [nombre]);

    return (
        <div className="perfil">
            <div id="fecha">{fecha}</div>
            <h2 id="saludo">{saludo}</h2>
            <span>vamos a ordenar tus tareas</span>
        </div>
    );
}

export default PerfilTodo;
