export const isMobileWindow = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  return width <= 700;
};
