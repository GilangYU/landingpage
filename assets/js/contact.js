const form = document.querySelector('#my-form');
const inputs = form.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

function submitFunc(event){
    let isValid = true;
    inputs.forEach(input => {
        if(input.value.trim() === ""){
            isValid = false;
            input.focus();
            return;
        }
    });

    if(isValid){
        alert("Terima kasih telah menghubungi kami!");
        form.reset(); // Reset Form setelah muncul pesan pop up 
    }
    event.preventDefault();
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);

    input.addEventListener("blur", blurFunc);
})

form.addEventListener('submit', submitFunc);
