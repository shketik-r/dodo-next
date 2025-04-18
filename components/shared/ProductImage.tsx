/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  src: string;
  alt: string;
  size?: 20 | 30 | 40;
}

export const ProductImage: React.FC<Props> = ({ src, alt, size, className }) => {
  return (
    <>
      <div className={cn('relative flex flex-1 justify-center items-center w-full', className)}>

        <img
          src={src}
          alt={alt}
          className={cn('relative left-2 top-2 transition-all duration-300 z-10', {
            'w-[300px] h-[300px]': size === 20,
            'w-[400px] h-[400px]': size === 30,
            'w-[500px] h-[500px]': size === 40,
          })}
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />

      </div>
    </>

  );
};