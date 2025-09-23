import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import testReducer from './reducer/test_reducer';
import themeReducer from './reducer/theme_reducer';
import snackbarReducer from './reducer/snackbar_reducer';
import offcanvasReducer from './reducer/offcanvas_reducer';
import calendarReducer from './reducer/calendar_reducer';

const store = configureStore({
  reducer: {
    test: testReducer,
    theme: themeReducer,
    snackbar: snackbarReducer,
    offcanvas: offcanvasReducer,
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: import.meta.env.MODE !== 'production', // kalau Vite
});

export default store;
