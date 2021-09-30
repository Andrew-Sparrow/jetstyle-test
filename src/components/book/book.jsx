import React from 'react';
import PropTypes from 'prop-types';

import {defaultImg} from '../../const';

function Book(props) {
  const {
    id,
    title,
    author,
    group,
    img
  } = props;

  return (
    <li
      className="contact"
      id={id}
    >
      <img className="contact__left" src={img === null ? defaultImg : img} alt="avatar"></img>
      <div className="contact__right">
        <p className="contact__data">Book Title: <span className="contact__name">{title}</span></p>
        <p className="contact__data">Author: <span className="contact__name">{author}</span></p>
        <p className="contact__data">Group: <span className="contact__name">{group}</span></p>
      </div>
    </li>
  );
}

Book.propTypes = {
  'id': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'author': PropTypes.string.isRequired,
  "img": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  "group": PropTypes.string,
};

export default Book;
