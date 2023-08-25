import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';

const Spinner = ({
  position = 'left',
  color = 'blue',
  loading,
  children,
}) => {
  return (
    <>
      <PulseLoader
        color={color}
        cssOverride={{ textAlign: position }}
        loading={loading}
      />
      {!loading && children}
    </>
  );
};

Spinner.propTypes = {
  position: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Spinner;
