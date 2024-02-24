import styles from './LoadingSpinner.module.scss';

// ----------------------------------------------------------------

interface ILoadingSpinnerProps {
  fullscreen?: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
  fullscreen = false,
}) => {
  return (
    <div
      className={`${styles['loader']} ${fullscreen ? styles['loader--fullscreen'] : ''}`}
    >
      <div className={styles['loader__lds-roller']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
