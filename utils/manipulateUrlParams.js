export const getQueryParams = () => {
  const obj = {};
  const searchParams = new URLSearchParams(window.location.search);

  for (const [key, value] of searchParams.entries()) {
    obj[key] = value;
  }
  return obj;
};

export const mergeQueryParams = (prevParams, newParams) => {
  const finalObj = { ...prevParams, ...newParams };
  const qs = Object.entries(finalObj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  return qs;
};

export const mergeURLParams = (prevParams, route, newParams) => {
  const finalParams = mergeQueryParams(prevParams, newParams);
  return `${route}?${finalParams}`;
};
