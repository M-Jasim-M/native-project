import { TOGGLE_THEME } from '../action/Actiontypes';

const initialState = {
  isDarkMode: false
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      };
    default:
      return state;
  }
};

export default themeReducer;
