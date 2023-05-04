import { subtract } from "lodash";
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as BookApi from "../api/BookRequests";

const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
});

const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
});

const fetchCategoriesFailure = (error) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
});

/*export const getCategoryBooks = (category) => {
    return (dispatch) => {
        dispatch(fetchCategoriesRequest());
        BookApi.getCategoryBooks(category)
            .then((response) => {
                dispatch(fetchCategoriesSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchCategoriesFailure(error.message));
            });
    };
};*/


export const getAllBooks = () => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });
    try {
        const { data } = await BookApi.getAllBooks();
        dispatch({ type: "RETREIVING_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETREIVING_FAIL" });
    }
};

/*export const getCategoryBooks = (category) => createAsyncThunk(

    async () => {
        console.log("STA", category)
        const response = await BookApi.getCategoryBooks(category);
        console.log("START", response.data)
        return response.data;
    }
);*/

/*export const getCategoryBooks = (category) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });
    try {
        const res = await BookApi.getCategoryBooks(category);
        dispatch({ type: "CATEGORY_SUCCESS", data: res?.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETREIVING_FAIL" });
    }
};*/

export const getSubCategory = (subCategory) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });
    try {
        const { data } = await BookApi.getSubCategory(subCategory);
        dispatch({ type: "SUBCATEGORY_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETREIVING_FAIL" });
    }
}

export const getBook = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" })
    try {
        const { data } = await BookApi.getBook(id);
        console.log("Action ko receive hoa hy ye : ", data)
        dispatch({ type: "SINGLE_BOOK_SUCCESS", data: data })
    }
    catch (error) {
        dispatch({ type: "RETREIVING_FAIL" })
    }
}

export const searchBook = (searchTerm) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" })
    try {
        const { data } = await BookApi.searchBook(searchTerm);
        console.log("Action ko receive hoa hy ye : ", data)
        dispatch({ type: "SEARCH_BOOK_SUCCESS", data: data })
    }
    catch (error) {
        dispatch({ type: "RETREIVING_FAIL" })
    }
}

export const followBook = (id, data) => async (dispatch) => {
    dispatch({ type: "FOLLOW_Book", data: id })
    BookApi.followBook(id, data)
}

export const unfollowBook = (id, data) => async (dispatch) => {
    dispatch({ type: "UNFOLLOW_Book", data: id })
    BookApi.unfollowBook(id, data)
}