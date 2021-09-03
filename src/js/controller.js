import { recipes } from "./data/recipes.js";

export const filterRecipesBySearchText = (searchFilter, filterName) => {
  const checkIfMatch = (text, search, filter) => {
    const [formattedText, formattedSearch, formattedFilter] = [
      text.trim().toLowerCase(),
      search.trim().toLowerCase(),
      filter.map((element) => element.trim().toLowerCase()),
    ];

    if (
      formattedText.includes(formattedSearch) //&&
      //formattedFilter.map((element) => formattedText.includes(element))
      //formattedFilter.some((element) => formattedText === element)
    ) {
      return formattedText;
    }
  };

  return recipes.filter(({ name, description, ingredients }) =>
    [
      name,
      description,
      ...ingredients.map(({ ingredient }) => ingredient),
    ].some((value) => checkIfMatch(value, searchFilter, filterName))
  );
};
