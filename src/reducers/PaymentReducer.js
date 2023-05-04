const paymentReducer = (
    state = { loading: false, error: false, uploading: false },
    action
) => {
    switch (action.type) {
        // belongs to PostShare.jsx
        case "PAYMENT_START":
            return { ...state, error: false, uploading: true };
        case "PAYMENT_SUCCESS":
            return { ...state, paymentSuccess: action.data, uploading: false, error: false };
        case "PAYMENT_FAIL":
            return { ...state, uploading: false, error: true }
        default:
            return state;
    }
};

export default paymentReducer;
