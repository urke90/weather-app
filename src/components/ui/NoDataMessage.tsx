import { CgSmileSad } from 'react-icons/cg';

import './NoDataMessage.scss';

// ----------------------------------------------------------------

const NoDataMessage: React.FC = () => {
  return (
    <div className="no-data-message">
      <h4>No Data!</h4> <CgSmileSad />
    </div>
  );
};

export default NoDataMessage;
