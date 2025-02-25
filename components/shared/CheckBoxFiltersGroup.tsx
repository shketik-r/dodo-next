import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItem: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckBoxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItem,
  limit = 3,
  searchInputPlaceholder = 'Поиск...',
  // onChange,
  // defaultValue,
}) => {

  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const list = showAll ?
    items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : defaultItem?.slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>


      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item) => (
          <FilterCheckbox
            onCheckedChange={(idx) => console.log(idx)}
            checked={false}
            text={item.text}
            value={item.value}
            key={String(item.value)}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            className='text-primary mt-3'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}

    </div>
  );
};