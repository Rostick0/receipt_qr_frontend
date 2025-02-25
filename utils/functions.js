export const getParamsFromQuery = (queryString) =>
  Object.fromEntries(new URLSearchParams(queryString).entries());
