'use client'

import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title, ProductCard } from '@/components/shared';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import {  Variation } from '@prisma/client';


interface Product {
  id: number;
  name: string;
  imageUrl: string;
  variations: Variation[];
}
interface Props {
  title: string;
  products:Product[] ;
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = useRef<HTMLDivElement>(null);

  const isIntersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (isIntersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [isIntersection?.isIntersecting, categoryId, setActiveCategoryId]);

  return (
    <div className={className} id={`category-${categoryId}`} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.filter((product) => product.variations.length > 0)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.variations[0].price}
            />
          ))}

      </div>
    </div>
  );
};
