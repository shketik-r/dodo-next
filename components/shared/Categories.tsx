'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Салаты' },
  { id: 3, name: 'Супы' },
  { id: 4, name: 'Горячее' },
  { id: 5, name: 'Напитки' },
  { id: 6, name: 'Десерты' }
]

export const Categories: React.FC<Props> = ({ className }) => {

  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        cats.map(({ name, id }) => {
          return (
            <a href={`/#category-${id}`}
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