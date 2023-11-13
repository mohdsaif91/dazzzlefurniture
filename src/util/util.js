import { useEffect, useState } from "react";

export const getObj = (obj) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });
  return formData;
};

export const useDebounce = (inputValue, delay) => {
  const [value, setInputValue] = useState(inputValue);
  useEffect(() => {
    const timeOutHandler = setTimeout(() => {
      setInputValue(inputValue);
    }, delay);
    return () => {
      clearTimeout(timeOutHandler);
    };
  }, [inputValue, delay]);
  return value;
};
