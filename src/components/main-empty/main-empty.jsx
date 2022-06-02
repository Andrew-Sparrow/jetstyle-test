import React from 'react';

function MainEmpty(props) {

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No books available</b>
            <p className="cities__status-description">We could not find any books available at the moment</p>
          </div>
        </section>
        <div className="cities__right-section" />
      </div>
    </div>
  );
}

export default MainEmpty;
