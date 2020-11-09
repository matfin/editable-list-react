import { useEffect } from 'react';

export const useKeyDown = (cb: (e: KeyboardEvent) => void): void => {
  useEffect((): (() => void) => {
    window.addEventListener('keydown', cb);

    return (): void => window.removeEventListener('keydown', cb);
  });
};
