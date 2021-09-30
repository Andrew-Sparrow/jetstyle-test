import React from 'react';
import {defaultAvatar} from '../../const';

function Contact(props) {
  const {
    id,
    name,
    lastName,
    group,
    phone,
    email,
    avatar
  } = props;

  return (
    <li
      className="contact"
      id={id}
    >
      <img className="contact__left" src={avatar === null ? defaultAvatar : avatar} alt="avatar"></img>
      <div className="contact__right">
        <p className="contact__data">Name: <span className="contact__name">{name}</span></p>
        <p className="contact__data">Last Name: <span className="contact__name">{lastName}</span></p>
        <p className="contact__data">Group: <span className="contact__name">{group}</span></p>
        <p className="contact__data">Phone: <span className="contact__name">{phone}</span></p>
        <p className="contact__data">Email: <span className="contact__name">{email}</span></p>
      </div>
    </li>
  );
}

export default Contact;
