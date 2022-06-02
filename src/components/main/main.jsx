import React from 'react';
import {useSelector} from 'react-redux';

import ContactList from '../book-list/book-list';
import withLayout from '../hocs/with-layout';

import Util from '../../util/util';
import MainEmpty from '../main-empty/main-empty';
import {getBooks, getActiveGroupName} from '../../store/books/selectors';

function Main() {
  const activeGroupName = useSelector(getActiveGroupName);
  const books = useSelector(getBooks);

  const filteredBooks = Util.getFavoritesBooks(activeGroupName, books);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Books</h1>
      {
        books.length === 0
          ? <MainEmpty activeGroupName={activeGroupName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Books</h2>
                  <b className="places__found">{books.length} books </b>
                  <ContactList
                    items={books}
                    // first page number
                    initialPageNumber={0}
                    activeTabName={activeGroupName}
                    activeBooks={filteredBooks}
                  />
                </section>
              </div>
            </div>
          )
      }
    </main>
  );
}

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
