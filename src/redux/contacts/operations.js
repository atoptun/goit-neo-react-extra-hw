import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * GET @ /contacts
 * headers: Authorization: Bearer token
 */
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/**
 * POST @ /contacts
 * body: { name, number }
 * headers: Authorization: Bearer token
 */
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', {
        ...contact,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/**
 * DELETE @ /contacts/:id
 * headers: Authorization: Bearer token
 */
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/**
 * PUT @ /contacts/:id
 * body: { name, number }
 * headers: Authorization: Bearer token
 */
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, thunkAPI) => {
    try {
      const { id, ...data } = contact;
      const res = await axios.patch(`/contacts/${id}`, {
        ...data,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
