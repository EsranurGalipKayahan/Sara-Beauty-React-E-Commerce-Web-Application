export const isEmptyMultiDimensionalArr = (arr) => {
  const results = arr.map((subarr) => {
    if (subarr.length === 0) return true;
  });
  for (let result in results) if (!result) return false;
  return true;
};
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
