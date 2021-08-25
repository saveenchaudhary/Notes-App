submitBtn.addEventListener("click", submitFunction);
showNotes();

// Function to Add Note into local Storage
function submitFunction() {
  let textareaVal = textarea.value;
  let notes = localStorage.getItem("notes");
  let notesObj = [];

  if (textareaVal != "") {
    if (notes != null) {
      notesObj = JSON.parse(notes);
    }
    notesObj.push(textareaVal);
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }
  showNotes();
  textarea.value = "";
}

// Display Note
function showNotes() {
  let notes = localStorage.getItem("notes");
  let notesObj = [];
  if (notes != null) {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, i) => {
    html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Note ${i + 1} </h5>
        <p class="card-text">${element}</p>
        <a href="#" id="${i}" onclick="deleteNote(this.id)"  class="btn btn-danger">Delete</a>
        </div>
        </div>
        
        `;
  });
  let notesEle = document.getElementById("notes");
  console.log(notesObj.length)
  if (notesObj.length != 0) {
      console.log("if running!!!!!!!!!!!!");
    notesEle.innerHTML = html;
  } else {
      console.log("else running!!!!!!!!!!!!");
    notesEle.innerHTML =
      "Nothing to Show Use Add a Note Section above to add notes.";
  }
}

// Function to delete Note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  let notesObj = [];
  if (notes != null) {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


searchTxt.addEventListener('input',()=>{
    let inputVal = searchTxt.value;
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(e =>{
        let cardTxt = e.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })

})
