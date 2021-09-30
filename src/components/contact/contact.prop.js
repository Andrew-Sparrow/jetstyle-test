import PropTypes from 'prop-types';

export default PropTypes.shape({
  'id': PropTypes.number.isRequired,
  'name': PropTypes.string.isRequired,
  'lastName': PropTypes.string.isRequired,
  "phone": PropTypes.string,
  "email": PropTypes.string,
  "avatar": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  "group": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ])
});
