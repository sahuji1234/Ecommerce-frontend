import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PAYMENT_REQUEST,
    });

    const { data } = await api.post(
      `/api/payments/${orderId}`,
      
    );
    console.log("datta", data);
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePayment = (reqData) => {
  return async (dispatch) => {
    console.log("update payment reqData ", reqData);
    dispatch({type:UPDATE_PAYMENT_REQUEST});
    try {
      const response = await api.get(
        `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
      );
      console.log("updated data", response.data);
      dispatch({type:UPDATE_PAYMENT_SUCCESS,payload:response.data});
    } catch (error) {
      dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message});
    }
  };
};
