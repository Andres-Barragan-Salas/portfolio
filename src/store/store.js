import { configureStore } from '@reduxjs/toolkit';

import { buildEnv } from 'PFConfig';
import navigationReducer from './slices/navigationSlice';

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
