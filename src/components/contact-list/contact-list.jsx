// import React, {useState} from 'react';
import React, {useReducer, useEffect} from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

import Contact from '../contact/contact';
import contactProp from '../contact/contact.prop';
import Pagination from '../pagination/pagination';

const FIRST_PAGE_NUMBER = 0; // the initialPageNumber starts with zero
const ITEMS_PER_PAGE = 3;
let prevTabName = '';

function ContactList(props) {
  const {
    items,
    initialPageNumber,
    activeTabName
  } = props;

  const selectedItemsOnFirstPage = items.slice(0, ITEMS_PER_PAGE);
  const pagesTotalAmount = Math.ceil(items.length / ITEMS_PER_PAGE);

  let slicedItems = selectedItemsOnFirstPage;

  const init = (initialPageNumber) => {
    return {
      pageNumber: initialPageNumber,
      slicedItems: slicedItems
    };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changePageNumber':
        return {...state, pageNumber: action.payload};
      case 'changeSlicedItems':
        return {...state, slicedItems: action.payload};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialPageNumber, init);

  useEffect(() => {
    if (prevTabName !== activeTabName) {
      dispatch({type: 'changeSlicedItems', payload: []});
      dispatch({type: 'changeSlicedItems', payload: slicedItems});
      dispatch({type: 'changePageNumber', payload: FIRST_PAGE_NUMBER});
    }
    prevTabName = activeTabName;
  }, [activeTabName, slicedItems]);


  const pageNumberClickHandler = (dataPagination) => {
    let offset = Math.ceil(dataPagination.selected * ITEMS_PER_PAGE);
    slicedItems = items.slice(offset, offset + ITEMS_PER_PAGE);
    dispatch({type: 'changePageNumber', payload: dataPagination.selected});
    dispatch({type: 'changeSlicedItems', payload: slicedItems});
  };

  return (
    <Fragment>
      <ul className="cities__places-list places__list tabs__content">
        {state.slicedItems.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            lastName={contact.lastName}
            group={contact.group}
            phone={contact.phone}
            email={contact.email}
            avatar={contact.avatar}
          />
        ))}
      </ul>
      {/* comparison was added to don't show pagination if there are too little amount of items in list */}
      {items.length > ITEMS_PER_PAGE && <Pagination
        pageCount={pagesTotalAmount}
        onPageNumberClick={pageNumberClickHandler}
        forcePage={state.pageNumber}
      />}
    </ Fragment>
  );
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(contactProp),
  initialPageNumber: PropTypes.number,
  activeTabName: PropTypes.string,
  onListItemHover: PropTypes.func,
};

export default ContactList;
