import "./style.css";

const details = document.querySelectorAll("details");

const expand = document.querySelector("#expand-toggle");

details.forEach((detailElem) => {
  detailElem.lastElementChild.addEventListener("click", (e) => detailElem.toggleAttribute("open"));
})

expand.addEventListener("click", (e) => {
  const listElement = expand.parentElement;
  
  if (listElement.getAttribute("expand") === null) {
    listElement.style.width = "var(--sidenav-width)"
    listElement.toggleAttribute("expand");
    return
  }

  listElement.toggleAttribute("expand");
  listElement.style.width = "calc(var(--sidenav-width) + 20rem)"
})