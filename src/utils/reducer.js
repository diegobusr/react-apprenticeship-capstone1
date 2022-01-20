export const types = {
  SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
  THEME_TOGGLE: 'THEME_TOGGLE',
};
export const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case types.THEME_TOGGLE:
      return { ...state, darkThemeOn: action.payload };
    default:
      return state;
  }
};
