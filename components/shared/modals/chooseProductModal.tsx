'use client';
import { Product } from '@prisma/client';
import React from 'react';
import { cn } from '@/lib/utils';
import { DialogContent, Dialog, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../ChooseProductForm';

interface Props {
  className?: string;
  product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
const router = useRouter();

  return (
    <>
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogTitle>
        {product.name}
        </DialogTitle>
        <DialogDescription>{product.name}</DialogDescription>
        <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
         <ChooseProductForm name={product.name} imageUrl={product.imageUrl} ingredients={[]} />
        </DialogContent>
      </Dialog>
    </>

  );
};