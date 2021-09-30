import PropTypes from 'prop-types';

export default PropTypes.shape({
  'id': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'author': PropTypes.string.isRequired,
  "img": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  "group": PropTypes.string,
});
