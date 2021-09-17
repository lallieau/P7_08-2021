import { renderRecipes, renderAdvancedSearch } from "./renderRecipes.js";
import { filterRecipes, filterRecipesByTags } from "./controller.js";
import { tagListTemplate } from "./templates.js";
import {
  inputAppliance,
  applianceContainer,
  inputIngredient,
  ingredientContainer,
  inputUstensil,
  ustensilContainer,
} from "./dropdown.js";

export let searchFilter = "";
export let filters = [];

const searchInput = document.querySelector(".form-control");
const tagsList = document.querySelector(".tags");

searchInput.addEventListener("input", () => {
  // console.log(searchInput.value);
  // console.log(searchInput.value);
  if (searchInput.value.length >= 3) {
    searchFilter = searchInput.value;
    refresh();
  }
});

const refresh = () => {
  const recipes = filterRecipes(searchFilter, filters);
  // console.log(recipes);
  // filterRecipesBySearchText(searchFilter);
  // filterRecipesByTags(filters);
  renderRecipes(recipes);
};

const addFilter = (newFilter) => {
  if (
    filters.some(
      (filter) =>
        filter.tag === newFilter.tag && filter.category === newFilter.category
    )
  ) {
    return;
  }

  filters.push(newFilter);
  const newTag = document.createElement("div");
  newTag.innerHTML = tagListTemplate(newFilter.tag, newFilter.category);
  tagsList.appendChild(newTag);

  // const newTag = document.querySelectorAll(`.tag`).item();
  // console.log(newTag);

  const closeBtn = newTag.querySelector(".close");

  closeBtn.addEventListener("click", (e) => {
    // console.log(newTag);
    newTag.remove();
    const positionIndex = filters.indexOf(newFilter);
    // console.log(filters);
    filters.splice(positionIndex, 1);
    refresh();

    // const currentTagName = e.path[1].innerText.trim();
    // console.log(currentTagName);

    // console.log(positionIndex);

    // filters.splice(positionIndex, 1);
    // e.path[1].outerHTML = "";

    // if (tagName === [""]) {
    //   recipeFound = filterRecipesBySearchText(searchFilter);
    //   return renderRecipes(), renderAdvancedSearch();
    // } else {
    // recipeFound =
    //   filterRecipesBySearchText(searchFilter) && filterRecipesByTags(filters);
    // return renderRecipes(), renderAdvancedSearch();
    // }
  });

  refresh();
};

inputIngredient.addEventListener("click", () => {
  const items = ingredientContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      addFilter({
        tag: event.target.textContent,
        category: "ingredients",
      });
      // if (!filters.includes(event.target.textContent)) {
      //   const newFilter = {
      //     tag: event.target.textContent,
      //     category: "ingredients",
      //   };
      //   filters.push(newFilter);
      //   addFilter(newFilter);
      // }
    });
  });
});

inputAppliance.addEventListener("click", () => {
  const items = applianceContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      addFilter({
        tag: event.target.textContent,
        category: "appliances",
      });
      // if (!filters.includes(event.target.textContent)) {
      //   const newFilter = {
      //     tag: event.target.textContent,
      //     category: "appliances",
      //   };
      //   filters.push(newFilter);
      //   addFilter(newFilter);
      // }
    });
  });
});

inputUstensil.addEventListener("click", () => {
  const items = ustensilContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      addFilter({
        tag: event.target.textContent,
        category: "ustensils",
      });
    });
  });
});

refresh();
