import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

interface PropsPriceRange {
  priceFrom: number;
  priceTo: number;
}

 interface QueryFilters extends PropsPriceRange {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters{
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PropsPriceRange;
}

export interface ReturnProps extends Filters{
setPrices: (name: keyof PropsPriceRange, value: number) => void;
setPizzaTypes: (value: string) => void;
setSizes: (value: string) => void;
setSelectedIngredients: (value: string) => void;
}

export const useFilters = ():ReturnProps => {

  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(
      searchParams.get('ingredients')?.split(','))
  );

  const [sizes, { toggle: toggleSize }] = useSet(
    new Set<string>(
      searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []),
  );

  const [pizzaTypes, { toggle: togglePizzaType }] = useSet(
    new Set<string>(
      searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []
    ));


  const [prices, setPrices] = React.useState<PropsPriceRange>({
    priceFrom: Number(searchParams.get('priceFrom')) || 0,
    priceTo: Number(searchParams.get('priceTo')) || 1000,
  });

  const updatePrice = (name: keyof PropsPriceRange, value: number) => {
    setPrices(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    sizes,
    pizzaTypes,
    prices,
    selectedIngredients,
    setSelectedIngredients:toggleIngredients,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzaType,
    setSizes: toggleSize,
    }
}