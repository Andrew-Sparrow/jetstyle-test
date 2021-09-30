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

  static getFilteredBooks(activeGroup, books) {
    let filteredBooks = [];
    if (activeGroup === groupNames.ALL) {
      return books;
    }
    filteredBooks = books.filter((item) => item.group === activeGroup);
    return filteredBooks;
  }

  static getFavoritesBooks(activeGroup, books) {
    let favoritesBooks = [];
    if (activeGroup === groupNames.FAVORITES) {
      return books;
    }
    favoritesBooks = books.filter((item) => item.favorites === true);
    return favoritesBooks;
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

  static getUpdatedBooks(id, books, newContact) {
    const newBooks = [...books];
    const index = newBooks.findIndex((contact) => contact.id === id);
    newBooks[index].isFavorite = newContact.isFavorite;
    return newBooks;
  }
}

export default Util;
