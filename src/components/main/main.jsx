import React from 'react';
import {useSelector} from 'react-redux';

import ContactList from '../contact-list/contact-list';
import withLayout from '../hocs/with-layout';
import Tabs from '../tabs/tabs';

import Util from '../../util/util';
import MainEmpty from '../main-empty/main-empty';
import {getContacts, getActiveGroupName} from '../../store/contacts/selectors';

function Main() {
  const activeGroupName = useSelector(getActiveGroupName);
  const contacts = useSelector(getContacts);

  const filteredContacts = Util.getFilteredContacts(activeGroupName, contacts);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        filteredContacts.length === 0
          ? <MainEmpty activeGroupName={activeGroupName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Contacts</h2>
                  <b className="places__found">{filteredContacts.length} contacts in `{activeGroupName}` group</b>
                  <ContactList
                    items={filteredContacts}
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
