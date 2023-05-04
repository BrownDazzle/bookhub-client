import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: "book",
    initialState: {
        book: [],
    },
    reducers: {
        getBooks: (state, action) => {
            state.book.push({ ...action.payload });
        },
        incrementQty: (state, action) => {
            const itemPresent = state.book.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQty: (state, action) => {
            const itemPresent = state.book.find((item) => item.id === action.payload.id);
            if (itemPresent.quantity == 1) {
                itemPresent.quantity = 0;
                const removeItem = state.book.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            } else {
                itemPresent.quantity--;
            }
        }
    }
});

export const { getBooks, incrementQty, decrementQty } = bookSlice.actions;

export default productSlice.reducer;