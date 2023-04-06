import React, { ChangeEvent } from 'react';

type Props = {
  type: string;
  placeholder: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

const InputField = ({
  type,
  placeholder = 'Placeholder',
  name,
  required = false,
  disabled = false,
  onChange,
}: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    className='input_field'
    name={name}
    required={required}
    disabled={disabled}
    onChange={onChange}
  />
);

export default InputField;
