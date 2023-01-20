import { configureStore } from '@reduxjs/toolkit';
import weatherstore from './reducers/weatherstore';

export default configureStore({
  reducer: {
    weatherapp: weatherstore
  }
})