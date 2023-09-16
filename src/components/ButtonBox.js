import PropTypes from 'prop-types';

const ButtonBox = ({ children }) => (
  <div className="buttonBox">{children}</div>
);

ButtonBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default ButtonBox;
