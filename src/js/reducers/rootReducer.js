import { combineReducers } from 'redux'
import config from '../config/config'
import constants from '../constants/constants'

const modalWindow = {
  isActive: false,
}

const modalWindowReducer = (state = modalWindow, action) => {
  switch (action.type) {
    case constants.CHANGE_MODAL_WINDOW_STATE: {
      return {
        ...state,
        isActive: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

const defaultBalance = 100

const balanceReducer = (state = defaultBalance, action) => {
  switch (action.type) {
    case constants.CHANGE_BALANCE_STORE: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const viewBlockReducer = (state = config, action) => {
  switch (action.type) {
    case constants.CHANGE_VIEW_NEWS: {
      return {
        ...state,
        modules: {
          ...state.modules,
          news: {
            isActive: action.payload,
          },
        },
      }
    }
    case constants.CHANGE_VIEW_RACE: {
      return {
        modules: {
          ...state.modules,
          race: {
            isActive: action.payload,
          },
        },
      }
    }
    case constants.CHANGE_VIEW_QUOTES: {
      return {
        modules: {
          ...state.modules,
          quotes: {
            isActive: action.payload,
          },
        },
      }
    }
    default: {
      return state
    }
  }
}

const ratesReducer = (state = [], action) => {
  switch (action.type) {
    case constants.RATES_HISTORY_STORE: {
      return action.payload
    }
    case constants.RATES_UPDATE_STORE: {
      return action.payload
    }
    default: {
      return state
    }
  }
};

// const themeReducer = ( state = {}, action ) => {
//   switch (action.type) {
//     case constants.CHANGE_THEME_STORE: {
//       return {...action.payload}
//     }
//   }
// };

const filterReducer = (state = {instruments: '', marketField: 'all'}, action) => {
  switch (action.type) {
    case constants.FILTER_INSTRUMENTS: {
      return {
        ...state,
        instruments: action.payload
      }
    }
    case constants.FILTER_MARKET_FIELD: {
      return {
        ...state,
        marketField: action.payload
      }
    }
    default: {
      return state
    }
  }
};

export default combineReducers({
  isModalWindow: modalWindowReducer,
  balance: balanceReducer,
  viewBlocks: viewBlockReducer,
  rates: ratesReducer,
  filter: filterReducer
  // theme: themeReducer,
})

// normalize = (string) => {
//   return string.replace(/[^A-Za-zА-Яа-я0-9]/g, '').toLowerCase();
// };
//
// compare = (arg1, arg2) => {
//   let result = 0;
//   if (arg1.FullName.toLowerCase() > arg2.FullName.toLowerCase()) {
//     result = 1;
//   }
//   if (arg1.FullName.toLowerCase() < arg2.FullName.toLowerCase()) {
//     result = -1;
//   }
//   return result;
// };
//
// getFilteredList = () => {
//   const { loadedRates, searchValue } = this.props;
//   const activeTab = Actions.getActiveTab().toLowerCase();
//   let quotations = [];
//   let filteredQuotations = [];
//   let isFilteredQuotations = false;
//
//   if (activeTab !== 'all') {
//     if (activeTab === 'popular') {
//       quotations = Object.values(loadedRates).filter(item => item.isPopular);
//     } else if (activeTab === 'favorites') {
//       Object.keys(loadedRates).map(item => {
//         if (this.favorites.hasOwnProperty(item)) {
//           quotations.push(loadedRates[item]);
//         }
//       });
//     } else {
//       quotations = Object.values(loadedRates).filter(item => item.Category.toLowerCase() === activeTab);
//     }
//     isFilteredQuotations = false;
//   } else {
//     quotations = Object.values(loadedRates).filter(item => item);
//     isFilteredQuotations = false;
//   }
//
//   if (searchValue) {
//     isFilteredQuotations = true;
//     filteredQuotations = Object.values(quotations).filter(item => {
//       const value = this.normalize(searchValue);
//       return !!(value && this.normalize(item.FullName).indexOf(value) + 1);
//     });
//   }
//
//   return isFilteredQuotations ? filteredQuotations.sort(this.compare) : quotations.sort(this.compare);
// };
















