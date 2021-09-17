import { recipes } from "./data/recipes.js";

// export let recipeFound = recipes;

export const filterRecipes = (searchFilter, filters) => {
  let recipeFound = recipes;
  const checkSearchQuery = (text, search) => {
    const [formattedText, formattedSearch] = [
      text.trim().toLowerCase(),
      search.trim().toLowerCase(),
    ];

    if (formattedText.includes(formattedSearch)) {
      return formattedText;
    }
  };

  const checkIfFilterMatch = (filter, recipeTags) =>
    recipeTags.some((recipeTag) => filter === recipeTag.toLowerCase().trim());

  recipeFound = recipeFound.filter(({ name, description, ingredients }) =>
    [
      name,
      description,
      ...ingredients.map(({ ingredient }) => ingredient),
    ].some((value) => checkSearchQuery(value, searchFilter))
  );

  recipeFound = recipeFound.filter(({ ustensils, ingredients, appliance }) => {
    const recipeTags = [
      ...ustensils,
      ...ingredients.map(({ ingredient }) => ingredient),
      appliance,
    ];
    return filters.every((filter) =>
      checkIfFilterMatch(filter.tag, recipeTags)
    );
  });

  return recipeFound;
};

export const filterRecipesByTags = (filters) => {
  recipeFound = recipeFound.filter(({ ustensils, ingredients, appliance }) => {
    const recipeTags = [
      ...ustensils,
      ...ingredients.map(({ ingredient }) => ingredient),
      appliance,
    ];
    return filters.every((filter) => checkIfMatch(filter.tag, recipeTags));
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
