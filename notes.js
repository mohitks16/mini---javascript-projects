const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main");
const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value)
        }
    )
    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{
         localStorage.setItem("notes",JSON.stringify(data)); 
    }
   
}

addBtn.addEventListener("click",()=>{

    addNote();
})

const addNote = (text = "") =>{

 
        const note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = `
         <div class="tool">
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-floppy-disk"></i>
            </div>
            <textarea >${text}</textarea>      
        `;
        main.appendChild(note);
        note.querySelector(".fa-trash").addEventListener("click" , ()=>{
            note.remove();
            saveNotes();
        }) ;
        note.querySelector(".fa-floppy-disk").addEventListener("click" , () =>{
            saveNotes();
        })
        saveNotes();
}

// self calling function - 

(
    ()=>{
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null){
            addNote()
        }else{
             lsNotes.forEach(
             (lsNote) =>{
                addNote(lsNote)
             }

        )
        }
       
        // if(lsNotes.length === 0){
        //     localStorage.removeItem("notes")
        // }else{
        //     addNote()
        // }
    }
)()