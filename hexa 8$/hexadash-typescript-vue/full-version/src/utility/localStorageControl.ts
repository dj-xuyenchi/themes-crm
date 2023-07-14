const getItem = (key: string): string | object => {
  const data: string | null = typeof window !== 'undefined' ? localStorage.getItem(key) : '';
  try {
    return JSON.parse(data!);
  } catch (err) {
    return data!;
  }
};

const setItem = (key: string, value: string) => {
  const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
  return localStorage.setItem(key, stringify);
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
