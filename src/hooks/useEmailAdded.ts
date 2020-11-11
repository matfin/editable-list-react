import { useEffect } from 'react';

export const useEmailAdded = (cb: (e: any) => void): void => {
  useEffect((): (() => void) => {
    window.addEventListener('emails:add', cb);

    return (): void => window.removeEventListener('emails:add', cb);
  });
};
