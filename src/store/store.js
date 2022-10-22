import { configureStore } from '@reduxjs/toolkit';
import appConfig from 'PFConfig';

const { buildEnv } = appConfig;

export default configureStore({
  reducer: {
  },
  middleware:
    (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: buildEnv !== 'production',
});
