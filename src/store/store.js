import { configureStore } from '@reduxjs/toolkit';

import appConfig from 'PFConfig';
import navigationReducer from './slices/navigationSlice';

const { buildEnv } = appConfig;

export default configureStore({
  reducer: {
    navigation: navigationReducer,
  },
  middleware:
    (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: buildEnv !== 'production',
});
