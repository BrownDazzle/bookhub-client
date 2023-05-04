import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as BookApi from "../api/BookRequests";

export const categoryBooks = createAsyncThunk('categories/getCategoryBooks', async (category) => {
    const response = await BookApi.getCategoryBooks(category);
    return response.data;
}
);


export const CategorySlice = createSlice({
    name: 'bookCategory',
    initialState: {
        categories: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(categoryBooks.pending, (state) => {
                state.loading = true;
                state.categories = null;
                state.error = null;
            })
            .addCase(categoryBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.error = null;
            })
            .addCase(categoryBooks.rejected, (state, action) => {
                state.loading = false;
                state.categories = null;
                state.error = action.error.message;
            });
    }
});

export default CategorySlice.reducer;
