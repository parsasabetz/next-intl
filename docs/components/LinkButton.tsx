import clsx from 'clsx';
import Link from 'next/link';
import {ComponentProps} from 'react';

type Props = {
  variant?: 'primary' | 'secondary';
} & Omit<ComponentProps<typeof Link>, 'className'>;

export default function LinkButton({variant = 'primary', ...rest}: Props) {
  return (
    <Link
      className={clsx(
        'inline-block rounded-full px-4 py-2 text-base font-semibold transition-colors lg:px-8 lg:py-4',
        variant === 'primary'
          ? 'bg-slate-800 text-white hover:bg-slate-700 dark:bg-primary dark:text-slate-900 dark:hover:bg-sky-200'
          : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-white/90 dark:hover:bg-slate-700'
      )}
      {...rest}
    />
  );
}
