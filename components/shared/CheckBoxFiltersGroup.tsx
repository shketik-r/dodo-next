import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { Input, Skeleton } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItem?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  selectedIds?: Set<string>;
  defaultValue?: string[];
  className?: string;
  loading?: boolean;
  titleGroup?: string;
}

export const CheckBoxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItem,
  limit = 4,
  searchInputPlaceholder = 'Поиск...',
  loading,
  onClickCheckbox,
  selectedIds,
  titleGroup = '',

  // defaultValue,
}) => {

  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const list = showAll ?
    items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : (defaultItem || items)?.slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {
          ...Array(limit).fill(0).map((_, idx) => (
            <Skeleton key={idx} className='h-6 mb-3 rounded-[8px]' />
          ))
        }
      </div>
    )
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
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selectedIds?.has(item.value)}
            text={item.text}
            value={item.value}
            key={String(item.value)}
            endAdornment={item.endAdornment}
            titleGroup={titleGroup}
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