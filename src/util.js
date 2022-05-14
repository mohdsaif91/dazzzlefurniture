export const getFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};

export const mobileValidation = (data) => {
  const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return regex.test(data);
};

export const emailValidation = (data) => {
  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(data);
};
