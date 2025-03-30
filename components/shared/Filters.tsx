'use client';

import React from 'react';
import { Title, RangeSlider, CheckBoxFiltersGroup } from '@/components/shared';
import { Input } from '../ui/input';
import { useIngredients, useFilters, useQueryFilters } from '@/hooks';


interface Props {
  className?: string;
}


export const Filters: React.FC<Props> = ({ className }) => {

  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map(item => ({ value: String(item.id), text: item.name }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  }


  return (

    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className='flex flex-col gap-4'>

        {/* тип теста */}
      
          <CheckBoxFiltersGroup
            className='mb-5'
            title="Тип"
            onClickCheckbox={filters.setPizzaTypes}
            titleGroup="type"
            selectedIds={filters.pizzaTypes}
            items={[
              { value: '1', text: 'Тонкое' },
              { value: '2', text: 'Традиционное' },
            ]}
          />
       
        {/* размеры */}
    
          <CheckBoxFiltersGroup
            className='mb-5'
            title="Размеры"
            onClickCheckbox={filters.setSizes}
            titleGroup="size"
            selectedIds={filters.sizes}
            items={[
              { value: '1', text: '20 см' },
              { value: '2', text: '30 см' },
              { value: '3', text: '40 см' },

            ]}
          />
      
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
       
            <Input
              type="number"
              placeholder="0"
              min={0}
              max={1000}
              value={String(filters.prices.priceFrom)}
              onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
            />

            <Input
              type="number"
              min={100}
              max={1000}
              placeholder="1000"
              value={String(filters.prices.priceTo)}
              onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
            />
          
        </div>
       
          <RangeSlider
            min={0}
            max={1000}
            step={10}
            value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
            onValueChange={updatePrices}
          />
        
      </div>
    
        <CheckBoxFiltersGroup
          className='mt-5'
          title="Ингредиенты"
          limit={6}
          defaultItem={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={filters.setSelectedIngredients}
          selectedIds={filters.selectedIngredients}
          titleGroup="ingredients"
        />
    
    </div>

  );
};