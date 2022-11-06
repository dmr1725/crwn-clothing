import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState => {
  // console.log('selector fired 1')
  return state.categories;
};

// createSelector is used to memoize/cache results
// I think that it will not re-render or re-compute if categories hasn't change
// lecture 162. Reselect library
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    // console.log('selector fired 2')
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    // console.log('selector fired 3');
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
