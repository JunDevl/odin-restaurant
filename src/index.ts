import "./style.css";

enum HeroTab {
  Introduction,
  Reviews
}

const details = document.querySelectorAll("details");

const expand = document.querySelector("#expand-toggle");

const hero = document.querySelector("#hero");

let currentHeroSelection: HeroTab = HeroTab.Introduction

details.forEach((detailElem) => {
  detailElem.lastElementChild.addEventListener("click", (e) => detailElem.toggleAttribute("open"));
})

expand.addEventListener("click", (e) => {
  const listElement = expand.parentElement;
  const activeSize = 20//rem
  
  if (listElement.getAttribute("expand") === null) {
    listElement.style.width = "var(--sidenav-width)"
    listElement.toggleAttribute("expand");
    return
  }

  listElement.toggleAttribute("expand");
  listElement.style.width = `calc(var(--sidenav-width) + ${activeSize}rem)`
})

hero.addEventListener("click", (e) => {
  const target = e.target as HTMLElement

  if (target.tagName! !== "BUTTON") return;

  switch (target.getAttribute("class")) {
    case "check-menu":
      console.log("checked")
      break;
    case "intro":
      currentHeroSelection = HeroTab.Introduction;
      console.log(currentHeroSelection);
      break;
    case "reviews":
      currentHeroSelection = HeroTab.Reviews;
      console.log(currentHeroSelection);
      break;
  }
})