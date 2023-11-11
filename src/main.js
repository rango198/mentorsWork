import { formEl, listEl } from "./refs";
import { createMarkup } from "./markup";
import { saveData, getData } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSub);

function onSub(event) {
  event.preventDefault();
  const value = event.target.elements.message.value.trim();
  if (!value) {
    return;
  }
  console.log(value);
  event.target.reset();
  const array = getData();
  const dataItem = fabric(value);
  array.push(dataItem);
  saveData(array);
  const markup = createMarkup([dataItem]);
  addMarkup(markup);
}

function fabric(value) {
  const id = Date.now();
  return { id, checked: false, value };
}

function onLoad() {
  const items = getData();
  if (items.length === 0) {
    return;
  }
  const markup = createMarkup(items);
  addMarkup(markup);
}

onLoad();

function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}
function removeLi(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  // console.log(1, 2, 3);
  const parent = event.target.closest(".item");
  const taskId = parent.dataset.id;

  // console.log(parent);

  const items = getData().filter(({ id }) => {
    return id.toString() !== taskId;
  });
  saveData(items);
  parent.remove();
}
listEl.addEventListener("click", removeLi);
