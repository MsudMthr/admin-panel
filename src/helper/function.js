export const splitId = (id) => {
  const splitId = id.split(":");
  const newId = `${splitId[1]}`;
  return newId;
};
