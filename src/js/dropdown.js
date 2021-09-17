export const inputIngredient = document.querySelector("#input-ingredients");
export const inputAppliance = document.querySelector("#input-appliances");
export const inputUstensil = document.querySelector("#input-ustensils");

export const ingredientContainer = document.querySelector("#ingredients");
export const applianceContainer = document.querySelector("#appliances");
export const ustensilContainer = document.querySelector("#ustensils");

const ingredientsList = document.querySelector("#ingredients-placeholder");
const appliancesList = document.querySelector("#appliances-placeholder");
const ustensilsList = document.querySelector("#ustensils-placeholder");

const removeAppliances = () => {
  applianceContainer.classList.remove("expand-the-btn");
  appliancesList.classList.remove("expanded-appliances");
  inputAppliance.placeholder = "Appareils";
};

const removeUstensils = () => {
  ustensilContainer.classList.remove("expand-the-btn");
  ustensilsList.classList.remove("expanded-ustensils");
  inputUstensil.placeholder = "Ustensiles";
};

const removeIngredients = () => {
  ingredientContainer.classList.remove("expand-the-btn");
  ingredientsList.classList.remove("expanded-button");
  inputIngredient.placeholder = " Ingrédients";
};

ingredientContainer.addEventListener("click", () => {
  ingredientContainer.classList.add("expand-the-btn");
  ingredientsList.classList.add("expanded-button");
  inputIngredient.placeholder = "Recherche un ingrédient";

  removeUstensils();
  removeAppliances();
});

applianceContainer.addEventListener("click", () => {
  applianceContainer.classList.add("expand-the-btn");
  appliancesList.classList.add("expanded-appliances");
  inputAppliance.placeholder = "Recherche un appareil";

  removeIngredients();
  removeUstensils();
});

ustensilContainer.addEventListener("click", () => {
  ustensilContainer.classList.add("expand-the-btn");
  ustensilsList.classList.add("expanded-ustensils");
  inputUstensil.placeholder = "Recherche un ustensile";

  removeIngredients();
  removeAppliances();
});

document.addEventListener("click", (event) => {
  if (event.target.closest("#ingredients")) return;
  removeIngredients();

  if (event.target.closest("#appliances")) return;
  removeAppliances();

  if (event.target.closest("#ustensils")) return;
  removeUstensils();
});
