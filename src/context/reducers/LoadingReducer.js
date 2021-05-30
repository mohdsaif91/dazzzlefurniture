import { loadingAction } from "../actions/LoadingAction";

export default (state, action) => {
  switch (action.type) {
    case loadingAction.START_LOADING:
      return {
        ...state,
        showLoading: action.data
      };
    case loadingAction.STOP_LOADING:
      return {
        ...state,
        showLoading: action.data
      };
    default:
      return state;
  }
};
