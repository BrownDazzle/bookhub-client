const bookReducer = (
  state = { books: null, loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    // belongs to bookshare.jsx
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    //case "UPLOAD_SUCCESS":
    // return { ...state, books: [action.data, ...state.books], uploading: false, error: false };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    // belongs to books.jsx
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, books: action.data, loading: false, error: false };
    case "SUBCATEGORY_SUCCESS":
      return { ...state, subCategory: action.data, loading: false, error: false };
    case "SINGLE_BOOK_SUCCESS":
      return { ...state, singleBook: action.data, loading: false, error: false };
    case "SEARCH_BOOK_SUCCESS":
      return { ...state, searchRes: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default bookReducer;
