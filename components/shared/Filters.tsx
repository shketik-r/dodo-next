'use client';

import React from 'react';
import { Title ,FilterCheckbox,RangeSlider,CheckBoxFiltersGroup } from '@/components/shared';
import { Input } from '../ui/input';



interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text="можно собирать" value="1" />
        <FilterCheckbox text="новинки" value="2" />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckBoxFiltersGroup
        className='mt-5'
        title="Ингредиенты"
        limit={4}
        defaultItem={[{ text: 'Категория 1', value: '11' }, { text: 'Категория 2', value: '22' }, { text: 'Категория 3', value: '3' }, { text: 'Категория 4', value: '4' }, { text: 'Категория 5', value: '5' }, { text: 'Категория 6', value: '6' }]}
        items={[{ text: 'Категория 1', value: '1' }, { text: 'Категория 2', value: '2' }, { text: 'Категория 3', value: '3' }, { text: 'Категория 4', value: '4' }, { text: 'Категория 5', value: '5' }, { text: 'Категория 6', value: '6' }]} />
    </div>
  );
};