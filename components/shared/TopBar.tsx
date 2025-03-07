import { cn } from '@/lib/utils';
import React from 'react';
import { Container, Categories, SortPopup } from "@/components/shared";
import { Category } from '@prisma/client';

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({categories, className }) => {
  return (

    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container  className='flex items-center justify-between'>
        <Categories categories={categories}/>
        <SortPopup className='123'/>
      </Container>

    </div>
  );
};