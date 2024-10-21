
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

// removes visibility from all footnotes except for current note (if there is one)
// curr = current note
export function removeAllFootnotes(curr){
    document.querySelectorAll('t-ftn').forEach(ftn => {
        if(ftn !== curr){
            ftn.shadowRoot.children[1].style.visibility = 'hidden';
        }
    })
}

