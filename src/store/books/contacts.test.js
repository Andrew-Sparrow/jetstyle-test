import {places} from './places';
import {SortByValues} from '../../const';

import {
  changeCity,
  loadPlaces,
  removeNearbyPlaces,
  changeFavorite,
} from '../actions';

const mockPlaces = [
  {
    'id': 1,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Beautiful & luxurious studio at great location',
    'city': {
      'name': 'Amsterdam',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': false,
    'isPremium': true,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 2,
    'price': 120,
    'bedrooms': 3,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 3,
    'price': 120,
    'bedrooms': 3,
    'city': {
      'location': {},
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': false,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 4,
    'price': 180,
    'bedrooms': 3,
    'city': {
      'location': {},
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 5,
    'price': 2220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Campanile PARIS OUEST - Pont de Suresnes',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.8588376,
        'longitude': 2.2768488,
        'zoom': 10,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': false,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
  },
  {
    'id': 6,
    'price': 2220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Holiday Inn Express Paris - Canal de la Villette',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.8588376,
        'longitude': 2.2768488,
        'zoom': 10,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
  },
  {
    'id': 7,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Cappuccini Resort',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 45.577327089867396,
        'longitude': 9.938598635190925,
        'zoom': 12,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 8,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Hotel Touring',
    'city': {
      'name': 'Cologne',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 9,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Premier Inn Hamburg City (Zentrum) hotel',
    'city': {
      'name': 'Hamburg',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {
      'id': 3,
      'avatarUrl': 'img/1.png',
      'isPro': true,
      'name': 'Angelina',
    },
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 10,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Steigenberger Parkhotel',
    'city': {
      'name': 'Dusseldorf',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
];

const initialState = {
  places: [],
  sortBy: SortByValues.POPULAR,
  isDataLoaded: false,
  activeCityName: 'Paris',
  isNearbyPlacesLoaded: false,
  nearbyPlaces: [],
};

describe('Reducer: places', () => {
  it('without additional parameters should return initial state', () => {
    expect(places(undefined, {})).toEqual(initialState);
  });

  it('should change active city', () => {
    const newState = Object.assign(
      {},
      initialState,
      {activeCityName: 'Copenhagen'},
    );

    const changeCityAction = changeCity('Copenhagen');
    expect(places(initialState, changeCityAction)).toEqual(newState);
  });

  it('should add places', () => {
    const newState = Object.assign(
      {},
      initialState,
      {places: mockPlaces, isDataLoaded: true},
    );

    const changePlacesAction = loadPlaces(mockPlaces);
    expect(places(initialState, changePlacesAction)).toEqual(newState);
  });

  it('should remove nearby places', () => {
    const newState = Object.assign(
      {},
      initialState,
      {nearbyPlaces: [], isNearbyPlacesLoaded: false},
    );

    const changeNearbyPlacesAction = removeNearbyPlaces(mockPlaces);
    expect(places(initialState, changeNearbyPlacesAction)).toEqual(newState);
  });

  it('should change favorite', () => {
    const initialPlace = {
      'id': 1,
      'price': 220,
      'bedrooms': 3,
      'type': 'apartment',
      'title': 'Beautiful & luxurious studio at great location',
      'city': {
        'name': 'Amsterdam',
        'location': {},
      },
      'description': 'A qu unique lightness of Amsterdam.',
      'goods': [],
      'host': {},
      'images': ['img/1.png', 'img/2.png'],
      'isFavorite': true,
      'isPremium': true,
      'location': {},
      'maxAdults': 4,
      'previewImage': 'img/1.png',
      'rating': 4.0,
    };

    const placeFromServer = {
      'id': 1,
      'price': 2200,
      'bedrooms': 5,
      'type': 'apartment',
      'title': 'Beautiful & luxurious studio at great location',
      'city': {
        'name': 'Amsterdam',
        'location': {},
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': [],
      'host': {
        'id': 3,
        'avatar_url': 'img/avatar-angelina.jpg',
        'is_pro': true,
        'name': 'Angelina',
      },
      'images': [],
      'is_favorite': false,
      'is_premium': true,
      'location': {},
      'max_adults': 40,
      'preview_image': 'img/1.png',
      'rating': 0.5,
    };

    const oldPlaces = [initialPlace];
    const oldState = Object.assign({}, initialState, {places: oldPlaces});

    const newPlace = Object.assign({}, initialPlace, {isFavorite: false});
    const newPlaces = [newPlace];
    const newState = Object.assign({}, initialState, {places: newPlaces});

    const changeFavoriteAction = changeFavorite(1, placeFromServer);

    expect(places(oldState, changeFavoriteAction)).toEqual(newState);
  });
});
