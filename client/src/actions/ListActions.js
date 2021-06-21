import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST }
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list }
}

export function editListRequest() {
  return { type: types.EDIT_LIST_REQUEST }
}

export function editListSuccess(updatedList) {
  return { type: types.EDIT_LIST_SUCCESS, updatedList }
}

export function createList(newListInfo) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(newListInfo, list => {
      dispatch(createListSuccess(list))
    })
  }
}

export function editList(listId, newListInfo) {
  return function(dispatch) {
    dispatch(editListRequest());
    apiClient.editList(listId, newListInfo, updatedList => {
      dispatch(editListSuccess(updatedList))
    })
  }
}
