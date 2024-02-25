import { type ButtonHTMLAttributes } from 'react';
import './Button..scss';

// ----------------------------------------------------------------

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // created so it can be further extended with different styles if needed
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<IButtonProps> = ({ variant = 'primary', ...rest }) => {
  return (
    <button
      className={`btn ${variant === 'primary' ? 'btn--primary' : 'btn--secondary'}`}
      {...rest}
    />
  );
};

export default Button;
