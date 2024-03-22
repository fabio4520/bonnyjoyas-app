// Button.tsx
import React from 'react';
import style from './button.module.css'

interface ButtonProps {
  children: React.ReactNode; // Para tipar lo que se puede renderizar dentro del botón
  type?: 'button' | 'submit' | 'reset'; // Tipos de botón HTML válidos
  className?: string; // Para clases adicionales
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Manejador para el evento onClick
  disabled?: boolean; // Para manejar el estado deshabilitado del botón
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
}) => {
  // Clases base para el botón, asegúrate de ajustar según tu proyecto de Tailwind CSS
  const baseStyle = style['submit-button'];

  return (
    <button
      type={type}
      className={`${baseStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
