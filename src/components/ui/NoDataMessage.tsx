import { CgSmileSad } from 'react-icons/cg';

import './NoDataMessage.scss';

// ----------------------------------------------------------------

const NoDataMessage: React.FC = () => {
  return (
    <div className="no-data-message">
      <h4 className="no-data-message__title">No Data Available!</h4>
      <CgSmileSad className="no-data-message__icon" />
    </div>
  );
};

export default NoDataMessage;
