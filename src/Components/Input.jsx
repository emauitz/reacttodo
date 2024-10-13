import PropTypes from 'prop-types';

function CustomInput({ placeholder, type, value, name, clase, onChange }) {
    return (
        <input
            placeholder={placeholder}
            type={type}
            value={value}
            name={name}
            className={clase}
            onChange={onChange} // Asegúrate de manejar onChange
        />
    );
}

CustomInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, // Debe ser string, no func
    value: PropTypes.string.isRequired, // Debe ser string, no func
    name: PropTypes.string.isRequired, // Debe ser string, no func
    clase: PropTypes.string,
    onChange: PropTypes.func.isRequired, // Asegúrate de agregar la validación para onChange
};

export default CustomInput;

