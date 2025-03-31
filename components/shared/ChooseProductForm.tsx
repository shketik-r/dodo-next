/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Title } from './Title';
import { cn } from '@/lib/utils';
import { Button } from '../ui';

interface Props {
  className?: string;
  name: string;
  imageUrl: string;
  ingredients?: unknown[];
  items?: unknown[];
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  // ingredients,
  // items,
  // onClickAdd
}) => {

  const textDetails = `30 см, традиционное тесто 30.`;
  const totalPrice = 1000;

  return (
    <div className={cn('flex flex-1', className)}>
      <div className='flex items-center justify-center flex-1 relative w-full'>
        <img src={imageUrl} alt={name} className='relative left-2 top-2 transition-all duration-300 w-[350px] h-[350px] z-10' />
      </div>
        <div className='w-[490px] bg-[#f7f6f5] p-7'>
          <Title text={name} size='md' className='font-extrabold mb-1' />
          <p className='text-gray-400'>{textDetails}</p>
          <Button className='mt-10 w-full'>
            Добавить в корзину за { totalPrice } ₽
          </Button>
        </div>
    </div>
  );
};