import React from 'react';
import { Input } from '@chakra-ui/react';
import clsx from 'clsx';

interface IProps {
  placeholder?: string;
  error?: string;
  type?: Parameters<typeof Input>[0]['type'];
  label: string;
  className?: string;
  isInvalid?: boolean;
}

const FormInput: React.FC<IProps> = ({ placeholder, error, type, label, className, isInvalid, ...rest }) => {
  return (
    <div className={clsx('transition-all', className)}>
      <label>{label}</label>
      <Input type={type} placeholder={placeholder} isInvalid={isInvalid} {...rest} />
      {isInvalid && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormInput;
