import { recipes } from "./data/recipes.js";

//
// Filtre les recettes avec la recherche principale
//
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

//
// Filtrer les recettes avec les tags des différentes catégories (ingrédients, ustensiles, appareils)
//
const checkIfMatch = (text, filter) => {
  const [formattedText, formattedFilter] = [
    text.trim().toLowerCase(),
    filter.map((element) => element.trim().toLowerCase()),
  ];

  if (formattedFilter.some((element) => formattedText === element)) {
    return formattedText;
  }
};

export const filterRecipesByIngredients = (filterName) => {
  return recipes.filter(({ ingredients }) =>
    [...ingredients.map(({ ingredient }) => ingredient)].some((value) =>
      checkIfMatch(value, filterName)
    )
  );
};

export const filterRecipesByUstensils = (filterName) => {
  return recipes.filter(({ ustensils }) =>
    [...ustensils.map((ustensil) => ustensil)].some((value) =>
      checkIfMatch(value, filterName)
    )
  );
};

export const filterRecipesByAppliance = (filterName) => {
  return recipes.filter(({ appliance }) =>
    [appliance].some((value) => checkIfMatch(value, filterName))
  );
};
