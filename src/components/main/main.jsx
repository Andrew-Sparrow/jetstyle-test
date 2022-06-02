import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';

import ContactList from '../book-list/book-list';
import withLayout from '../hocs/with-layout';

import MainEmpty from '../main-empty/main-empty';
import {getBooks} from '../../store/books/selectors';

function Main() {
  const books = useSelector(getBooks);
  console.log(books)
  useEffect(() => {
  }, [books])


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Books</h1>
      {
        books.length === 0
          ? <MainEmpty />
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
                    activeBooks={books}
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
