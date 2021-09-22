import { renderRecipes } from "./renderRecipes.js";
import { filterRecipes } from "./controller.js";
import { tagListTemplate } from "./templates.js";
import {
  inputAppliance,
  applianceContainer,
  inputIngredient,
  ingredientContainer,
  inputUstensil,
  ustensilContainer,
} from "./dropdown.js";

let searchFilter = "";
const filters = [];
let ingredientsSortFilter = "";
let ustensilsSortFilter = "";
let appliancesSortFilter = "";

const searchInput = document.querySelector(".form-control");
const tagsList = document.querySelector(".tags");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length >= 3) {
    searchFilter = searchInput.value;
    refresh(ingredientsSortFilter, appliancesSortFilter, ustensilsSortFilter);
  }
});

const refresh = (
  ingredientsSortFilter,
  appliancesSortFilter,
  ustensilsSortFilter
) => {
  const recipes = filterRecipes(searchFilter, filters);
  renderRecipes(
    recipes,
    ingredientsSortFilter,
    appliancesSortFilter,
    ustensilsSortFilter
  );
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

  const closeBtn = newTag.querySelector(".close");
  closeBtn.addEventListener("click", (e) => {
    newTag.remove();
    const positionIndex = filters.indexOf(newFilter);

    filters.splice(positionIndex, 1);
    refresh(ingredientsSortFilter, appliancesSortFilter, ustensilsSortFilter);
  });

  refresh(ingredientsSortFilter, appliancesSortFilter, ustensilsSortFilter);
};

export const addTagsEventListeners = () => {
  const ingredientsItems = ingredientContainer.querySelectorAll(".item");
  ingredientsItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      addFilter({
        tag: event.target.textContent,
        category: "ingredients",
      });
    });
  });

  const applianceItems = applianceContainer.querySelectorAll(".item");
  applianceItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      addFilter({
        tag: event.target.textContent,
        category: "appliances",
      });
    });
  });

  const ustensilItems = ustensilContainer.querySelectorAll(".item");
  ustensilItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      addFilter({
        tag: event.target.textContent,
        category: "ustensils",
      });
    });
  });
};

inputIngredient.addEventListener("input", () => {
  ingredientsSortFilter = inputIngredient.value;
  refresh(ingredientsSortFilter, appliancesSortFilter, ustensilsSortFilter);
});

inputAppliance.addEventListener("input", () => {
  appliancesSortFilter = inputAppliance.value;
  refresh(ingredientsSortFilter, appliancesSortFilter, ustensilsSortFilter);
});

inputUstensil.addEventListener("input", () => {
  ustensilsSortFilter = inputUstensil.value;
  refresh(ingredientsSortFilter, appliancesSortFilter, ustensilsSortFilter);
});

window.onload = () => {
  refresh(ingredientsSortFilter, appliancesSortFilter, ustensilsSortFilter);
};
