import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({label, onClick, color, size, width, fontSize, textColor}) => {
    const buttonClassName = `button ${color} ${size} ${label} ${width} ${fontSize} `;
    const customStyle = {
        width: width,
        fontSize: fontSize,
        widthStyle: width,
        color: color,
        textColor: textColor,
    }
  return (
    <button className={buttonClassName} onClick={onClick} style={customStyle}>
        {label}
    </button>
  )
}

// Define prop types to ensure correct formatting
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'disabled', 'none']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    width: PropTypes.string,
    fontSize: PropTypes.string,
    textColor: PropTypes.string,
}

// Set default values for optional props
Button.defaultProps = {
    onClick: () => {},
    color: 'primary',
    size: 'medium',
    width: 'auto',
    fontSize: '16px',
    textColor: '#ffffff',
};

export default Button
