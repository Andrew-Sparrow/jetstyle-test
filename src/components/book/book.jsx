import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {defaultImg} from '../../const';
import {deleteItemApi} from '../../store/api-actions';

function Book(props) {
  const {
    id,
    title,
    author,
    img,
  } = props;

  const dispatch = useDispatch();

  const onDeleteClick = (evt) => {
    evt.preventDefault();
    console.log('delete');
    // dispatch(deleteItemApi(id));
  };

  return (
    <li
      className="contact"
      id={id}
    >
      <img className="contact__left" src={img === null ? defaultImg : img} alt="avatar"></img>
      <div className="contact__right">
        <p className="contact__data">Book Title: <span className="contact__name">{title}</span></p>
        <p className="contact__data">Author: <span className="contact__name">{author}</span></p>
      </div>
      <div className="contact__buttons">
        <button className="contact__bookmark-button button" type="button">
          <svg className="contact__edit-icon" width="30" height="30">
            <use xlinkHref="#icon-pencil"></use>
          </svg>
          <span className="visually-hidden">Edit</span>
        </button>
        <button className="contact__bookmark-button button" type="button" onClick={onDeleteClick}>
          <svg className="contact__bookmark-icon" width="30" height="30">
            <use xlinkHref="#icon-delete"></use>
          </svg>
          <span className="visually-hidden">Delete</span>
        </button>
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
};

export default Book;
