import React from 'react';
import PropTypes from 'prop-types';

function MainEmpty(props) {
  const {activeGroupName} = props;

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No contacts available</b>
            <p className="cities__status-description">We could not find any contacts available at the moment in "{activeGroupName}" group</p>
          </div>
        </section>
        <div className="cities__right-section" />
      </div>
    </div>
  );
}

MainEmpty.propTypes = {
  activeGroupName: PropTypes.string.isRequired,
};

export default MainEmpty;
