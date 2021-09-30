import nanoid from 'nanoid';
import {groupNames} from '../const';

class Util {
  static adaptToClient(offerFromServer) {
    const adaptedOfferForClient = Object.assign(
      {},
      offerFromServer,
      {
        host: Object.assign(
          {},
          offerFromServer.host,
          {
            avatarUrl: offerFromServer.host.avatar_url,
            isPro: offerFromServer.host.is_pro,
          },
        ),
        isFavorite: offerFromServer.is_favorite,
        isPremium: offerFromServer.is_premium,
        maxAdults: offerFromServer.max_adults,
        previewImage: offerFromServer.preview_image,
      },
    );

    // Ненужные ключи мы удаляем
    delete adaptedOfferForClient.host.avatar_url;
    delete adaptedOfferForClient.host.is_pro;

    delete adaptedOfferForClient.is_favorite;
    delete adaptedOfferForClient.is_premium;
    delete adaptedOfferForClient.max_adults;
    delete adaptedOfferForClient.preview_image;

    return adaptedOfferForClient;
  }

  static adaptPlacesToClient(placesFromServer) {
    return placesFromServer.map((place) => this.adaptToClient(place));
  }

  static getFilteredContacts(activeGroup, contacts) {
    let filteredContacts = [];
    if (activeGroup === groupNames.ALL) {
      return contacts;
    }
    filteredContacts = contacts.filter((item) => item.group === activeGroup);
    return filteredContacts;
  }

  static formatDate = (dateString) => {
    const DATE_OPTIONS = {year: 'numeric', month: 'short'};

    return (new Date(dateString)).toLocaleDateString('en-US', DATE_OPTIONS);
  }

  static generateIdKeys(listLength) {
    const list = new Array(listLength).fill('');
    const generatedIdList = list.map(() => nanoid(10));
    return generatedIdList;
  }

  static getUpdatedContacts(id, contacts, newContact) {
    const newContacts = [...contacts];
    const index = newContacts.findIndex((contact) => contact.id === id);
    newContacts[index].isFavorite = newContact.isFavorite;
    return newContacts;
  }
}

export default Util;
