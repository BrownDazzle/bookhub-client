import * as PaymentApi from "../api/PaymentRequest";

export const paymentPost = (path, data) => async (dispatch) => {
  dispatch({ type: "PAYMENT_START" });
  try {
    const newPost = await PaymentApi.paymentPost(path, data);
    dispatch({ type: "PAYMENT_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "PAYMENT_FAIL" });
  }
};
