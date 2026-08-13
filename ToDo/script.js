const task=document.getElementById("task");
const btnAdd=document.getElementById("btnAdd");
const entries=document.getElementById("entries");
const checkAll=document.getElementById("checkAll")
const btnDelAll=document.getElementById("btnDelAll")
btnAdd.addEventListener("click",function(){
    const entry = task.value.trim();
    //validation
    if(entry === ""){
        alert("Enter a task");
        return;
    }

    //create card
    const cards = document.createElement("div");
    cards.classList.add("card");

    //create check box
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check");

    checkBox.addEventListener("change", ()=>{
        if(checkBox.checked){
                text.classList.add("checked")
            }
            else{
                text.classList.remove("checked")
            }
    })

    //create text box
    const text = document.createElement("p");
    text.textContent = entry ;
    text.classList.add("entryp");

    //create del btn 
    const btndel = document.createElement("Button");
    btndel.textContent = "X"
    btndel.classList.add("btnDel");

    cards.appendChild(checkBox);
    cards.appendChild(text);
    cards.appendChild(btndel);
    entries.appendChild(cards);

    //Empty the text box 
    task.value = "" ;

    if (entries.length !== 0) {
    entries.classList.add("entriesx");
}
else if(entries.length == 0){
    entries.classList.remove("entriesx");
}

    //functionalities
     checkBox.addEventListener("change", ()=>{
        if(checkBox.checked){
                text.classList.add("checked")
            }
            else{
                text.classList.remove("checked")
            }
    })
    btndel.addEventListener("click",()=>{
        cards.remove() 
    })
})


    checkAll.addEventListener("change",()=>{
        const checkBoxes = entries.querySelectorAll(".check")
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = checkAll.checked;
        }
        if(checkAll.checked){
            for (i = 0;i <checkBoxes.length;i++){
                let texts = checkBoxes[i].parentElement.querySelector(".entryp")
                texts.classList.add("checked")
            }
        }
        else{
            for (i = 0;i <checkBoxes.length;i++){
                let texts = checkBoxes[i].parentElement.querySelector(".entryp")
                texts.classList.remove("checked")
            }
        }
        })

    btnDelAll.addEventListener("click",()=>{

        let deleteAll = entries.querySelectorAll(".btnDel")
        for(i=0; i < deleteAll.length; i++){
            deleteAll[i].click()
            if (entries.children.length === 0) {
        entries.classList.remove("entriesx");
    }
        }
    })