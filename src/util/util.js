import nanoid from 'nanoid';
import {groupNames} from '../const';

const Util = {
  getFilteredBooks (activeGroup, books) {
    let filteredBooks = [];
    if (activeGroup === groupNames.ALL) {
      return books;
    }
    filteredBooks = books.filter((item) => item.group === activeGroup);
    return filteredBooks;
  },

  getFavoritesBooks(activeGroup, books) {
    let favoritesBooks = [];
    if (activeGroup === groupNames.ALL) {
      return books;
    }
    favoritesBooks = books.filter((item) => item.favorite === true);
    return favoritesBooks;
  },

  formatDate (dateString) {
    const DATE_OPTIONS = {year: 'numeric', month: 'short'};

    return (new Date(dateString)).toLocaleDateString('en-US', DATE_OPTIONS);
  },

  generateIdKeys(listLength) {
    const list = new Array(listLength).fill('');
    const generatedIdList = list.map(() => nanoid(10));
    return generatedIdList;
  },

  getUpdatedBooks(id, books, favorite) {
    const newBooks = [...books];
    const index = newBooks.findIndex((book) => book.id === id);
    newBooks[index].favorite = favorite;
    return newBooks;
  },

  deleteItem(id, items) {
    const newBooks = [...items];
    const index = newBooks.findIndex((item) => item.id === id);
    newBooks.splice(index, 1);
    return newBooks;
  }
}

export default Util;
