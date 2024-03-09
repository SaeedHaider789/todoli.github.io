let index = localStorage.length;

let firstPrintLocal = () => {
    let dupIndex = 0;
    while (dupIndex < 1000) {
        let div = document.createElement("div");
        div.className = "newEntries";
        let str = localStorage.getItem(dupIndex);
        if (str == null) {
        }
        else {
            div.innerHTML = str;
            let img = document.createElement("img");
            img.id = "del";
            img.className = "del";
            img.addEventListener('click', () => { deleteEntry(img) });
            img.alt = "Delete";
            img.src = "trashcan.png";
            document.body.append(div);
            div.append(img);
            div.dataset.key = dupIndex;
        }
        dupIndex++;
    }
}

let assignLocalS = (inp) =>{
    localStorage.setItem(index, inp);
}

let createElement = () => {
    let inp = document.getElementById("inp").value;
    // console.log(inp)
    if (inp == "") { }
    else {
        let div = document.createElement("div");
        div.innerHTML = inp;
        div.className = "newEntries";
        let img = document.createElement("img");
        img.id = "del";
        img.className = "del";
        img.addEventListener('click', () => { deleteEntry(img) });
        img.src = "trashcan.png";
        document.body.append(div);
        div.append(img);
        assignLocalS(inp);
        div.dataset.key = index;
        index++;
        alert("Your list has been updated");
    }
}

let listUpdate = () => {
    createElement();
}

let deleteEntry = (img) =>{
    let parent = img.parentElement;
    // console.log(parent.dataset.key)
    parent.remove();
    localStorage.removeItem(parent.dataset.key);
    console.log(parent.dataset.key)
    console.log(localStorage.length)
    if(parent.dataset.key == localStorage.length){
        console.log("hell")
        index--;
    }
}

let deleteAll = () =>{
    localStorage.clear();
    index = 0;
    location.reload();
}

firstPrintLocal();
let add = document.getElementById("add");
add.addEventListener('click', listUpdate);

let btn = document.getElementById("btn");
// console.log(btn);
btn.addEventListener('click', deleteAll);

let inp = document.getElementById("inp");
        inp.addEventListener('keyup', function (event) {
            if (event.key === "Enter") {
                listUpdate();
            }
        });