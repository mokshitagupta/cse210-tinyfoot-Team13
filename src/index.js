let content = {}
let ftns = document.querySelectorAll("t-ftn"); //selects all footnotes

//options
let options = document.querySelector("t-options");
var hover = options.dataset.hover === 'true';
var unhover = options.dataset.unhoverdelete === 'true';
let hoverDelay = options.dataset.hoverdelay === undefined ? 0 : options.dataset.hoverdelay;

var slider = document.getElementById("myRange");
slider.oninput = function() {
    hoverDelay = this.value;
}

//removes all footnotes except the one that is opened
window.addEventListener("click", (e) => removeAllFootnotes(e.target));
initializeFootnotes();

function toggleHover(){
    hover = !hover;
    initializeFootnotes();
}

function toggleUnhover(){
    unhover = !unhover;
    initializeFootnotes();
}

function initializeFootnotes(){

    for(i of ftns){
        content[i] = i.innerHTML;
        i.removeEventListener("mouseenter", addFootnote);
        i.removeEventListener("click", removeFootnote);
        i.removeEventListener("click", toggleFootnote);
        i.removeEventListener("mouseout", removeFootnoteWithTimer);
    
        // hover/click option hub (more options to be added)
        if(hover){
            i.addEventListener("mouseenter", addFootnote);
            i.addEventListener("click", removeFootnote);
        }else{
            i.addEventListener("click", toggleFootnote);  
        }
    
        if(unhover){
            i.addEventListener("mouseout", removeFootnoteWithTimer);
        }
        
    }
}

// calculates distance for the arrow
function distance(tdiv, bdiv) {
    const trect = tdiv.getBoundingClientRect();
    const brect = bdiv.getBoundingClientRect();
    const bleftx = brect.left;
    const blefty = brect.top;
    const tcenterx = trect.left + trect.width / 2;
    const tbottomy = trect.bottom;
    const distance = Math.hypot(bleftx - tcenterx, tbottomy - blefty);

    return distance;
}

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
  

// toggles visibility when the note is clicked
function toggleFootnote(){
    removeAllFootnotes(this);
    var vis = this.shadowRoot.children[1].style.visibility;
    if(vis == 'hidden'){
        this.shadowRoot.children[1].style.visibility = 'visible';
    }else{
        this.shadowRoot.children[1].style.visibility = 'hidden';
    }
}

// adds visibility to clicked footnote
function addFootnote(){
    removeAllFootnotes();
    this.shadowRoot.children[1].style.visibility = 'visible';
}

// removes visibility from clicked footnote
function removeFootnote(){
    this.shadowRoot.children[1].style.visibility = 'hidden';
}

async function removeFootnoteWithTimer(){
    setTimeout(() => {
        this.shadowRoot.children[1].style.visibility = 'hidden';
    }, hoverDelay);
}

// removes visibility from all footnotes except for current note (if there is one)
// curr = current note
function removeAllFootnotes(curr){
    document.querySelectorAll('t-ftn').forEach(ftn => {
        if(ftn !== curr){
            ftn.shadowRoot.children[1].style.visibility = 'hidden';
        }
    })
}