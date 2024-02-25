import { forwardRef, type InputHTMLAttributes } from 'react';

import './Input.scss';

// ----------------------------------------------------------------

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <input ref={ref} className="input" {...props} />;
});

export default Input;
