import { createSelector } from '@reduxjs/toolkit';

import { selectNameFilter } from '../filters/slice';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        contact.number.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  },
);

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectEditingContact = state => state.contacts.editingContact;
