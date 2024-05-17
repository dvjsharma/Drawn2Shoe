export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_THEME = 'SET_THEME';

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});
