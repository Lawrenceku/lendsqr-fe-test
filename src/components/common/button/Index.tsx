import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  buttonStyle?: string;
  type: 'button' | 'reset' | 'submit';
};

const Button = ({ children, onClick, buttonStyle, type }: Props) => (
  <button type={type} onClick={onClick} className={buttonStyle}>
    {children}
  </button>
);

export default Button;
