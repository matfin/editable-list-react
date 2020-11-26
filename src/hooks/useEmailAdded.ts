import { useEffect } from 'react';
import { EmailAddedEventProps } from 'models';

export const useEmailAdded = (cb: (e: any) => void): void => {
  useEffect((): (() => void) => {
    window.addEventListener('emails:add', cb);

    return (): void => window.removeEventListener('emails:add', cb);
  });
};
