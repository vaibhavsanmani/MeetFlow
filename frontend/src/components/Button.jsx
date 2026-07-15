import React from 'react';
import '../styles/Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
  ...props
}) => {
  const buttonClass = `
    btn
    btn-${variant}
    btn-${size}
    ${fullWidth ? 'btn-full-width' : ''}
    ${isLoading ? 'btn-loading' : ''}
    ${className}
  `.trim().split(/\s+/).join(' ');

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="loading-spinner" aria-hidden="true"></span>
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
