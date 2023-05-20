import {combineReducers, legacy_createStore} from 'redux';
import {
  userReducer,
  profilesReducer,
  chatsReducer,
  chatHelperReducer,
} from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  userReducer,
  profilesReducer,
  chatsReducer,
  chatHelperReducer,
});

// const persistConfig = {
//   key: 'root2',
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2,
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// export const persistor = persistStore(store);
