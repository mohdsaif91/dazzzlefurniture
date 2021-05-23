export const adminActions = {
  ADMIN_LOGIN: "ADMIN_LOGIN",
  ADMIN_LOGOUT: "ADMIN_LOGOUT",
  DELETE_SUCESSFULL: "DELETE_SUCESSFULL",
  DELETE_UNSUCESSFULL: "DELETE_UNSUCESSFULL",
  GET_CATEGORY_COUNT: "GET_CATEGORY_COUNT",
  GET_CATEGORY_COUNT_FAIL: "GET_CATEGORY_COUNT_FAIL",
  LOGIN_FAIL: "LOGIN_FAIL",
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING"
};

export function startLoading() {
  return {
    type: adminActions.START_LOADING,
    data: true
  };
}

export function stopLoading() {
  return {
    type: adminActions.STOP_LOADING,
    data: false
  };
}

export function adminLoginAction() {
  return {
    type: adminActions.ADMIN_LOGIN,
    data: { message: "loginSucessfull", login: true }
  };
}

export function getCategoryCountAction(data) {
  return {
    type: adminActions.GET_CATEGORY_COUNT,
    data
  };
}

export function getCategoryCountFail(err) {
  return {
    type: adminActions.GET_CATEGORY_COUNT_FAIL,
    data: {
      sucessfull: false,
      message: err
    }
  };
}

export function adminLogoutAction() {
  return {
    type: adminActions.ADMIN_LOGOUT,
    data: false
  };
}

export function loginFailAction() {
  return {
    type: adminActions.LOGIN_FAIL,
    data: {
      message: "loginFailed",
      login: false
    }
  };
}

export function deleteSucessfull(data) {
  return {
    type: adminActions.DELETE_SUCESSFULL,
    data
  };
}

export function deleteUnSucessfull(error) {
  return {
    type: adminActions.DELETE_UNSUCESSFULL,
    data: error
  };
}
