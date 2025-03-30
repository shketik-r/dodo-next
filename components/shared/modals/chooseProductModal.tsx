import { Dialog } from '@/components/ui';
import { Product } from '@prisma/client';
import { DialogContent } from '@radix-ui/react-dialog';
import React from 'react';
import { Title } from '../Title';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className }) => {
  return (
    <>
      <Dialog>
        <DialogContent className='p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
          <Title text="Выберите продукт"></Title>
        </DialogContent>
      </Dialog>
    </>

  );
};