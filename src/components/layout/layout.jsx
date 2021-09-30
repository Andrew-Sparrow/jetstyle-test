import React from 'react';
import PropTypes from 'prop-types';

function Layout(props) {
  const {children, className} = props;

  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <h2 className="header__title">Books</h2>
            </div>
          </div>
        </div>
      </header>
      {children}
    </ div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};

export default Layout;
