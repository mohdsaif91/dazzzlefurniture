export const loadingAction = {
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING"
};

export function startLoading() {
  return {
    type: loadingAction.START_LOADING,
    data: true
  };
}

export function stopLoading() {
  return {
    type: loadingAction.STOP_LOADING,
    data: false
  };
}
