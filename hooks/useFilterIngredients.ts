import { Api } from '@/services/api-client';
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from 'react-use';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectIds, { toggle }] = useSet(new Set<string>([]));


  useEffect(() => {
    Api.ingredients.getAll();
    async function fetchIngredients() {
      try {
        setLoading(true);
        const response = await Api.ingredients.getAll();
        setIngredients(response);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }finally{
        setLoading(false);
      }
    }
    fetchIngredients();
  }, [])


  return { ingredients,loading,onAddId: toggle, selectIds };
}