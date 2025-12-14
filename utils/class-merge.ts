import {clsx} from 'clsx';
import {HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';

export const mergeClasses = (...inputs: HTMLAttributes<HTMLElement>['className'][]) => {
  return twMerge(clsx(...inputs));
};
