'use client'

import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title, ProductCard } from '@/components/shared';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';


interface ProductItem {
  price: number;
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  items: ProductItem[];
}
interface Props {
  title: string;
  items: Product[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = useRef(null);

  const isIntersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (isIntersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [isIntersection?.isIntersecting, title, categoryId]);

  return (
    <div className={className} id={`category-${categoryId}`} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.filter((product) => product.items.length > 0)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}

      </div>
    </div>
  );
};
