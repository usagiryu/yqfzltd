import * as React from 'react';

type TValue = string | boolean | object;

/**
 * 自定义挂钩，用于获取和设置localstorage中的项目。 你没有
 * 设置状态并在localstorage中设置值。useLocalStorage
 * 返回一个值和一个与localstorage同步的setter。
 */
export const useLocalStorage = (key: string, initialValue?: TValue) => {
  if (typeof window === undefined) {
    return [initialValue, undefined];
  }

  const [state, setState] = React.useState(() => {
    try {
      const local = localStorage.getItem(key);

      if (typeof local !== 'string') {
        localStorage.setItem(key, JSON.stringify(initialValue));

        return initialValue;
      } else {
        return JSON.parse(local);
      }
    } catch {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
    }
  }, [state]);

  return [state, setState];
};
