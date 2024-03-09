const pick = <T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[]
): Partial<T> => {
  const finalObj: Partial<T> = {};
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined) {
        finalObj[key] = value;
      }
    }
  }
  return finalObj;
};

export default pick;
