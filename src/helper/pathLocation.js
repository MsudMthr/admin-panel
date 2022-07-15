const pathLocation = () => {
  const path = window.location.pathname;
  const pathSplit = path.split("/");
  return `${pathSplit[1]}`;
};

export { pathLocation };
