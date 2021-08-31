import { searchParams } from "./mainResearch.js";

// searchParams.append("filterBy", "");

export let filterName = "lait";

const linkItem = document.querySelectorAll(".dropdown-item");

linkItem.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // if (!filterName) {
    //   searchParams.set("filterBy", item.textContent);
    //   window.location.search = searchParams;
    // } else searchParams.append("filterBy", item.textContent);
  })
);
