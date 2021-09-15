import { recipes } from "./data/recipes.js";

export const filterRecipesBySearchText = (searchFilter) => {
  const checkIfMatch = (text, search) => {
    const [formattedText, formattedSearch] = [
      text.trim().toLowerCase(),
      search.trim().toLowerCase(),
    ];

    if (formattedText.includes(formattedSearch)) {
      return formattedText;
    }
  };

  return recipes.filter(({ name, description, ingredients }) =>
    [
      name,
      description,
      ...ingredients.map(({ ingredient }) => ingredient),
    ].some((value) => checkIfMatch(value, searchFilter))
  );
};

export const filterRecipesByTag = (tagName) => {
  const checkIfMatch = (text, filter) => {
    const [formattedText, formattedFilter] = [
      text.trim().toLowerCase(),
      filter.map((element) => element.trim().toLowerCase()),
    ];

    if (formattedFilter.some((element) => formattedText === element)) {
      return formattedText;
    }
  };

  return recipes.filter(({ ustensils, ingredients, appliance }) =>
    [
      ...ustensils.map((ustensil) => ustensil),
      ...ingredients.map(({ ingredient }) => ingredient),
      appliance,
    ].some((value) => checkIfMatch(value, tagName))
  );
};

// export const filterRecipesByIngredients = (filterName) => {
//   return recipes.filter(({ ingredients }) =>
//     [...ingredients.map(({ ingredient }) => ingredient)].some((value) =>
//       checkIfMatch(value, filterName)
//     )
//   );
// };

// export const filterRecipesByUstensils = (filterName) => {
//   return recipes.filter(({ ustensils }) =>
//     [...ustensils.map((ustensil) => ustensil)].some((value) =>
//       checkIfMatch(value, filterName)
//     )
//   );
// };

// export const filterRecipesByAppliance = (filterName) => {
//   return recipes.filter(({ appliance }) =>
//     [appliance].some((value) => checkIfMatch(value, filterName))
//   );
// };
