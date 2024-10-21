import {removeAllFootnotes, initializeFootnotes, toggleHover, toggleUnhover} from './actions.js'
import {distance} from './utils.js'

//removes all footnotes except the one that is opened
window.addEventListener("click", (e) => removeAllFootnotes(e.target));
initializeFootnotes();

// Create a class for the element
class Footnote extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      this.content = ""
    }
  
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const child = this.children.item(0);
        console.log(this.children)
        if (child && child.matches("a[href]")) {
            this.content = child.innerText;
            child.innerText = "";
            this.removeChild(child);
            shadow.appendChild(child);
        }

        const aside = document.createElement("aside");
        aside.part = "aside"
        aside.style.visibility = 'hidden';
        aside.classList.add("aside")
        const inside = document.createElement("div");
        inside.part = "content"
        const arr = document.createElement("div");
        arr.part = "arrow"

        inside.innerText = this.content
        aside.appendChild(arr);
        aside.appendChild(inside);
        shadow.appendChild(aside);
        const rect = inside.getBoundingClientRect()
        const lim = document.body.clientWidth;
        console.log(rect.x, lim)

        //repositions div to fit on screen
        if ((rect.x + rect.width) > lim){
            let dif = (rect.x + rect.width) - lim
            let newpos = rect.x - dif
            console.log("o",newpos )
            aside.style.left =  (-1*dif - 10) + "px"
        }
        if (rect.x < 0){
            aside.style.left =  10 + "px"
        }

        //calculations for arrow
        const near = distance(this, aside)
        const w = aside.getBoundingClientRect().width
        const perc = (near/w) * 100
        console.log(near, arr.style, (near/w) * 100)
        arr.style.left = perc + "%";
    }
  }
  
customElements.define("t-ftn", Footnote);
