import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: '',
    editingContact: null,
    isEditDialogOpen: false,
    deletingContact: null,
    isDeleteDialogOpen: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id,
        );
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.editingContact = null;
      })
      // All
      .addMatcher(isPending, state => {
        state.loading = true;
      })
      .addMatcher(isFulfilled, state => {
        state.loading = false;
        state.error = '';
      })
      .addMatcher(isRejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      });
  },
  reducers: {
    newContact(state) {
      state.editingContact = null;
      state.isEditDialogOpen = true;
    },
    editContact(state, { payload }) {
      state.editingContact = state.items.find(
        contact => contact.id === payload,
      );
      state.isEditDialogOpen = true;
    },
    cancelEditContact(state) {
      state.editingContact = null;
      state.isEditDialogOpen = false;
    },
    confirmDeleteContact(state, { payload }) {
      state.deletingContact = state.items.find(
        contact => contact.id === payload,
      );
      state.isDeleteDialogOpen = true;
    },
    cancelDeleteContact(state) {
      state.deletingContact = null;
      state.isDeleteDialogOpen = false;
    },
  },
});

export const {
  newContact,
  editContact,
  cancelEditContact,
  confirmDeleteContact,
  cancelDeleteContact,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
