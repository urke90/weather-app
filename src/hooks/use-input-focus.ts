import { useEffect, useRef } from 'react';

// ----------------------------------------------------------------

export const useInputFocus = () => {
  const inputElRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputElRef.current?.focus();
  }, []);

  return inputElRef;
};
