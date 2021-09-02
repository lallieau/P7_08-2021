// import { tagListTemplate } from "./templates/dropdownTemplate.js";
export let filterName = ["pain", "mozzarella"];

const linkItem = document.querySelectorAll(".dropdown-item");
// const tagsList = document.querySelector(".tags");

linkItem.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    filterName.push(item.textContent);
  })
);
