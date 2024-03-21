const buton = document.querySelector("#btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");


function saveData(){
    localStorage.setItem("notes", notesContainer.innerHTML);
    localStorage.setItem("data", notes.innerHTML);
}

function showData(){
   notesContainer.innerHTML = localStorage.getItem("notes"); 
   notes.innerHTML = localStorage.getItem("data");
}




    buton.addEventListener("click", () => {
     let inputBox = document.createElement("P");
     let img =  document.createElement("IMG");
     inputBox.className = "input-box";
     inputBox.setAttribute("contenteditable", "true");
     img.src ="./images/trash.png";
     notesContainer.appendChild(inputBox).appendChild(img);
     saveData();
    })
    notesContainer.addEventListener("click", function(e){
        if(e.target.tagName ==="IMG"){
            e.target.parentElement.remove();
            saveData();
        }
        else if(e.target.tagName === "P"){
            let notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onKeyUp = function(){
                    saveData();
                }
                
            })
        }
    })

    document.addEventListener("keydown", (ev) =>{
        if(ev.key ==="Enter"){
          document.execCommand("insertLineBreak");
          ev.preventDefault(); 
        }
    })
    showData();