import { createSlice } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    editingContact: null,
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      // fetchAll
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.items = action.payload;
      })

      // addContact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.items.push(action.payload);
      })

      // deleteContact,
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id,
        );
      })

      // updateContact,
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.editingContact = null;
      });
  },
  reducers: {
    editContact(state, { payload }) {
      state.editingContact = state.items.find(
        contact => contact.id === payload,
      );
    },
    cancelEditContact(state) {
      state.editingContact = null;
    },
  },
});

export const { editContact, cancelEditContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
