'use client';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';
import { useClickAway } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setFocused(false);
  });



  return (
    <>
      {focused && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-30'></div>
      )}

      <div
        ref={ref}
        className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}
      >
        <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
        <input
          type="text"
          placeholder="Поиск"
          className='rounded-2xl pl-11 w-full outline-none bg-gray-100'
          onFocus={() => setFocused(true)}
        />
      </div>
    </>
  );
};