let content = {}
let ftns = document.querySelectorAll("t-ftn")

for( i of ftns){
    content[i] = i.innerHTML

    // creates a div for the contents of the footnote
    i.innerHTML = `<div class='note'> ${i.innerHTML} </div>`

    if(i.dataset.version === 'hover'){
        i.addEventListener("mouseover", addFootnote);
        i.addEventListener("mouseout", removeFootnote);
    }else{
        i.addEventListener("click", toggleFootnote);
    }
}

// adds "show" class when the note is clicked
function toggleFootnote(){
    this.children[0].classList.toggle('show');
}

function addFootnote(){
    this.children[0].classList.add('show');
}

function removeFootnote(){
    this.children[0].classList.remove('show');
}