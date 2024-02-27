import { CgSmileSad } from 'react-icons/cg';
import { getServerErrorMessage } from '@/utils';

import './ErrorMessage.scss';

// ----------------------------------------------------------------

interface ErrorMessageProps {
  statusCode?: number;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ statusCode }) => {
  const message = getServerErrorMessage(statusCode);

  return (
    <div className="error-message">
      <h4>{message}</h4> <CgSmileSad />
    </div>
  );
};

export default ErrorMessage;
