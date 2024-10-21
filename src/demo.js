import { toggleHover, toggleUnhover, setHoverDelay } from "./actions.js"

let hoverButton = document.getElementById('hover-button')
let unhoverButton = document.getElementById('unhover-button')

hoverButton.addEventListener('click', toggleHover);
unhoverButton.addEventListener('click', toggleUnhover);

var slider = document.getElementById("myRange");
slider.oninput = function() {
  setHoverDelay(this.value);
}