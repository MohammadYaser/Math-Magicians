import PropTypes from 'prop-types';

const getStyleName = (btn) => {
  const className = {
    '=': 'equal',
    0: 'zero',
    '+': 'opt',
    '-': 'opt',
    X: 'opt',
    '/': 'opt',
  };

  return className[btn];
};

const Button = ({ value }) => (
  <button type="button" className={`${getStyleName(value)} button`}>{value}</button>
);

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Button;
