import { type HTMLAttributes } from 'react';
import styles from './Button.module.scss';

// ----------------------------------------------------------------

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  // created so it can be further extended with different styles if needed
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<IButtonProps> = ({ variant = 'primary', ...rest }) => {
  return (
    <button
      className={`${variant === 'primary' ? styles['button--primary'] : styles['button--secondary']}`}
      {...rest}
    />
  );
};

export default Button;
