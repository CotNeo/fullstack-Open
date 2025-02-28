import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk' // ✅ Named import ile düzeltildi

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk) // ✅ Redux Thunk'ı doğru ekle
})

export default store
