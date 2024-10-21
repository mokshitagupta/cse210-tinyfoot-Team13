let ftns = document.querySelectorAll("t-ftn"); //selects all footnotes

//options
let options = document.querySelector("t-options");
var hover = options.dataset.hover === 'true';
var unhover = options.dataset.unhoverdelete === 'true';
let hoverDelay = options.dataset.hoverdelay === undefined ? 0 : options.dataset.hoverdelay;

export function setHoverDelay(delay){
    hoverDelay = delay
}

export function initializeFootnotes(){

  for(let i of ftns){
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

export function toggleHover(){
    hover = !hover;
    initializeFootnotes();
}

export function toggleUnhover(){
    unhover = !unhover;
    initializeFootnotes();
}

// toggles visibility when the note is clicked
export function toggleFootnote(){
    removeAllFootnotes(this);
    var vis = this.shadowRoot.children[1].style.visibility;
    if(vis == 'hidden'){
        this.shadowRoot.children[1].style.visibility = 'visible';
    }else{
        this.shadowRoot.children[1].style.visibility = 'hidden';
    }
}

// adds visibility to clicked footnote
export function addFootnote(){
    removeAllFootnotes();
    this.shadowRoot.children[1].style.visibility = 'visible';
}

// removes visibility from clicked footnote
export function removeFootnote(){
    this.shadowRoot.children[1].style.visibility = 'hidden';
}

// removes visibility from clicked footnote with timer (for hover delay)
export async function removeFootnoteWithTimer(){
    setTimeout(() => {
        this.shadowRoot.children[1].style.visibility = 'hidden';
    }, hoverDelay);
}

// removes visibility from all footnotes except for current note (if there is one)
// curr = current note
export function removeAllFootnotes(curr){
    document.querySelectorAll('t-ftn').forEach(ftn => {
        if(ftn !== curr){
            ftn.shadowRoot.children[1].style.visibility = 'hidden';
        }
    })
}


