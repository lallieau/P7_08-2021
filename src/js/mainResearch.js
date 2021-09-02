import { recipes } from "./data/recipes.js";
import { filterName } from "./advancedSearch.js";

const searchInput = document.querySelector(".form-control");
const searchForm = document.querySelector(".form-inline");

export const searchParams = new URLSearchParams(window.location.search);
searchParams.append("searchBy", "");
export let searchFilter = searchParams.get("searchBy");

export const filterRecipesBySearchText = (searchFilter, filterName) => {
  const checkIfMatch = (text, search, filter) => {
    const [formattedText, formattedSearch, formattedFilter] = [
      text.trim().toLowerCase(),
      search.trim().toLowerCase(),
      filter.map((element) => element.trim().toLowerCase()),
    ];

    if (
      formattedText.includes(formattedSearch) &&
      formattedFilter.map((element) =>
        console.log(
          formattedText,
          ":",
          element,
          formattedText.includes(element)
        )
      )
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

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInput.value.length >= 3) {
    searchParams.set("searchBy", searchInput.value);

    searchFilter = searchParams.get("searchBy");
    recipeFound = filterRecipesBySearchText(searchFilter, filterName);
    return renderRecipes();
  }
});

searchInput.addEventListener("change", () => {
  if (searchInput.value.length >= 3) {
    searchParams.set("searchBy", searchInput.value);
    window.location.search = searchParams;

    recipeFound = filterRecipesBySearchText(searchFilter, filterName);
    return renderRecipes();
  }
});
