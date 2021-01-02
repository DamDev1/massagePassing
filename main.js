function massage(){
    const entry = document.getElementById("entry").value;
    const view = document.getElementById("view");

    document.getElementById("entry").value = "";
    
    view.textContent = entry;
}