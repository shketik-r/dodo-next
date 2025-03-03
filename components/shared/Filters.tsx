'use client';

import React from 'react';
import { Title,  RangeSlider, CheckBoxFiltersGroup } from '@/components/shared';
import { Input } from '../ui/input';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs'
import { useRouter } from 'next/navigation';



interface Props {
  className?: string;
}

interface PropsPriceRange {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { ingredients, loading, onAddId, selectIds } = useFilterIngredients();
  const [{ priceFrom, priceTo }, setPriceRange] = React.useState<PropsPriceRange>({
     priceFrom: 0, 
     priceTo: 1000
    });
  const [sizes, { toggle: toggleSize }] = useSet(new Set<string>([]));
  const [type, { toggle: togglePizzaType }] = useSet(new Set<string>([]));


  const items = ingredients.map(item => ({ value: item.id.toString(), text: item.name }));

  const updatePrice = (name: keyof PropsPriceRange, value: number) => {
    setPriceRange(prev => ({
      ...prev,
      [name]: value
    }))
  }



  React.useEffect(() => {
    const filters = {
      sizes: Array.from(sizes),
      pizzaTypes: Array.from(type),
      priceFrom: priceFrom,
      priceTo: priceTo,
      selectIds: Array.from(selectIds),
    };

    const query = qs.stringify(filters,{
      arrayFormat: 'comma',
    });

    router.push(`?${query}`);

  }, [ sizes, type, priceFrom, priceTo, selectIds]);

  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className='flex flex-col gap-4'>

        {/* тип теста */}
        <CheckBoxFiltersGroup
          className='mb-5'
          title="Размеры"
          onClickCheckbox={togglePizzaType}
          titleGroup="type"
          selectedIds={type}
          items={[
            { value: '1', text: 'Тонкое' },
            { value: '2', text: 'Традиционное' },
          ]}
        />

        {/* размеры */}
        <CheckBoxFiltersGroup
          className='mb-5'
          title="Размеры"
          onClickCheckbox={toggleSize}
          titleGroup="size"
          selectedIds={sizes}
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
            value={priceFrom.toString()}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={priceTo.toString()}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[priceFrom, priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPriceRange({ priceFrom, priceTo })}
        />
      </div>

      <CheckBoxFiltersGroup
        className='mt-5'
        title="Ингредиенты"
        limit={6}
        defaultItem={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectIds}
        titleGroup="ingredients"
      />

    </div>
  );
};