import { configureStore } from '@reduxjs/toolkit'
import candidates from './pipline'

export const store = configureStore({
  reducer: {

    entry:candidates
  },
})