import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function createCard(newCardInfo) {
  return function (dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(newCardInfo, (card) => {
      dispatch(createCardSuccess(card));
    });
  };
}
