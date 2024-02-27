import './LoadingSpinner.scss';

// ----------------------------------------------------------------

interface ILoadingSpinnerProps {
  fullscreen?: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
  fullscreen = false,
}) => {
  return (
    <div className={`loader ${fullscreen ? 'loader--fullscreen' : ''}`}>
      <div className="loader__lds-roller">
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
