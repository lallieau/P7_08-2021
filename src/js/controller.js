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

export const filterRecipesByTags = (filters) => {
  const checkIfMatch = (filter, recipeTags) =>
    recipeTags.some((recipeTag) => filter === recipeTag.toLowerCase().trim());

  return recipes.filter(({ ustensils, ingredients, appliance }) => {
    const recipeTags = [
      ...ustensils,
      ...ingredients.map(({ ingredient }) => ingredient),
      appliance,
    ];
    return filters.every((filter) => checkIfMatch(filter, recipeTags));
  });
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
