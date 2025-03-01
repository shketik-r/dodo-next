/* eslint-disable @next/next/no-img-element */
'use client';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(() => {
    Api.products.search(searchQuery).then(items => setProducts(items));
  },100, [searchQuery]);


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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className={cn(
          'absolute w-full bg-white rounded-xl  top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
          focused && 'visible opacity-100 top-12',
        )}>

          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className='flex items-center gap-1 px-2 hover:bg-primary/10'>
              <img src={product.imageUrl} alt={product.name} className='rounded-sm h-8' width={32} height={32} />
              <div className="px-3 py-3  cursor-pointer">
                {product.name}
              </div>
            </Link>
          ))}

        </div >
      </div>
    </>
  );
};