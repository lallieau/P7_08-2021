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

export let searchFilter = "";
export let filters = [];
export let sortFilter = "";

const searchInput = document.querySelector(".form-control");
const tagsList = document.querySelector(".tags");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length >= 3) {
    searchFilter = searchInput.value;
    refresh(sortFilter);
  }
});

const refresh = (sortFilter) => {
  const recipes = filterRecipes(searchFilter, filters);
  renderRecipes(recipes, sortFilter);
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
    refresh(sortFilter);
  });

  refresh(sortFilter);
};

inputIngredient.addEventListener("click", () => {
  const items = ingredientContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(item);
      addFilter({
        tag: event.target.textContent,
        category: "ingredients",
      });
    });
  });

  // inputIngredient.addEventListener("input", () => {
  //   sortFilter = inputIngredient.value;
  //   refresh(sortFilter);
  // });
});

inputAppliance.addEventListener("click", () => {
  const items = applianceContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      addFilter({
        tag: event.target.textContent,
        category: "appliances",
      });
    });
  });

  // inputAppliance.addEventListener("input", () => {
  //   sortFilter = inputAppliance.value;
  //   refresh(sortFilter);
  // });
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

  // inputUstensil.addEventListener("input", () => {
  //   sortFilter = inputUstensil.value;
  //   refresh(sortFilter);
  // });
});

inputIngredient.addEventListener("input", () => {
  sortFilter = inputIngredient.value;
  refresh(sortFilter);
});

inputAppliance.addEventListener("input", () => {
  sortFilter = inputAppliance.value;
  refresh(sortFilter);
});

inputUstensil.addEventListener("input", () => {
  sortFilter = inputUstensil.value;
  refresh(sortFilter);
});

refresh(sortFilter);
