export const getValue = (key) => {
  try {
    const value = localStorage.getItem(key);
    const parsedValue = JSON.parse(value);
    return parsedValue;
  } catch (e) {
    return undefined;
  }
};

export const updateValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
