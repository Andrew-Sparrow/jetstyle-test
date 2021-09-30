import React from 'react';
import {useSelector} from 'react-redux';

import ContactList from '../contact-list/contact-list';
import withLayout from '../hocs/with-layout';
import Tabs from '../tabs/tabs';

import Util from '../../util/util';
import MainEmpty from '../main-empty/main-empty';
import {getBooks, getActiveGroupName} from '../../store/books/selectors';

function Main() {
  const activeGroupName = useSelector(getActiveGroupName);
  const books = useSelector(getBooks);

  const filteredBooks = Util.getFilteredBooks(activeGroupName, books);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        filteredBooks.length === 0
          ? <MainEmpty activeGroupName={activeGroupName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Books</h2>
                  <b className="places__found">{filteredBooks.length} books in `{activeGroupName}` group</b>
                  <ContactList
                    items={filteredBooks}
                    // first page number
                    initialPageNumber={0}
                    activeTabName={activeGroupName}
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
