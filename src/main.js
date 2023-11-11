import { formEl } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSub);

function onSub (event) {
    event.preventDefault();
const value =  event.target.elements.message.value.trim();
if (!value) {
    return;
}
console.log(value)
event.target.reset()
};
