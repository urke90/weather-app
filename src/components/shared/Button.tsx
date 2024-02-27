import { type ButtonHTMLAttributes } from 'react';

import './Button..scss';

// ----------------------------------------------------------------

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // created so it can be further extended with different styles if needed
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  disabled,
  ...rest
}) => {
  const btnClasses = `btn ${variant === 'primary' ? 'btn--primary' : 'btn--secondary'} ${disabled ? 'btn-disabled' : ''}`;

  return <button className={btnClasses} disabled={disabled} {...rest} />;
};

export default Button;
