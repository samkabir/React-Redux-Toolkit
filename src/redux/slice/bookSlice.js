import { createSlice } from '@reduxjs/toolkit';
import books from '../../fakeData/books.json';

export const bookSlice = createSlice({
      name: 'book',
      initialState: {
            discover : books,
            readingList : [],
            finishedList : []
      },

      reducers: {
            addToReadingList: (state, { payload }) => {
                  state.readingList.push(payload)
            },
            removeFromReadingList: (state, { payload }) => {
                  state.readingList = state.readingList.filter(book => book.id !== payload.id);
            },
            removeFromDiscoveryList: (state, { payload }) => {
                  state.discover = state.discover.filter(book => book.id !== payload.id);
            },
            addToDiscoveryList: (state, { payload }) => {
                  state.discover.push(payload)
            },
            addTofinishedList: (state, { payload }) => {
                  state.finishedList.push(payload)
            },
      },
})

export const { addToReadingList, removeFromReadingList, addToDiscoveryList, removeFromDiscoveryList, addTofinishedList } = bookSlice.actions;

export default bookSlice.reducer;