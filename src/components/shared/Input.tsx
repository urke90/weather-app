import { type InputHTMLAttributes } from 'react';

import './Input.scss';

// ----------------------------------------------------------------

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = (props) => {
  return <input className="input" {...props} />;
};

export default Input;
