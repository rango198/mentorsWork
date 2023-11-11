import { formEl } from "./refs";
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
}

function fabric(value) {
  const id = Date.now();
  return { id, checked: false, value };
}
