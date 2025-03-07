'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import React from 'react';

interface Props {
  className?: string;
  categories: Category[];
}



export const Categories: React.FC<Props> = ({ categories, className }) => {

  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        categories.map(({ name, id }) => {
          return (
            <a href={`#category-${id}`}
              className={cn('flex items-center font-bold h-11 rounded-2xl px-5', id === categoryActiveId && 'bg-white shadow-md shadow-gray-200 text-primary')}
              key={id}>
              <span>{name}</span>
            </a>
          )
        })
      }

    </div>
  );
};