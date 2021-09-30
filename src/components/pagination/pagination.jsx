import React from "react";
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  const {
    pageCount,
    onPageNumberClick,
    forcePage
  } = props;

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onPageNumberClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={forcePage}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageNumberClick: PropTypes.func.isRequired,
  forcePage: PropTypes.number,
};

export default Pagination;
