const submitBtn = document.querySelector(".submit-btn");
const selectedBtns = document.querySelectorAll(".selection");
const spanDisplay = document.querySelector("span");
const submitedForm = document.querySelector(".main-submited");
const mainForm = document.querySelector(".main");

selectedBtns.forEach(function(btn) {
    btn.addEventListener("click", () => {
        selectedBtns.forEach(button => button.classList.remove("active"));
        
        btn.classList.add("active");
    });
});

submitBtn.addEventListener("click", () => {
    const selectedButton = document.querySelector(".selection.active");

    if (selectedButton) {
        mainForm.style.display = "none";
        submitedForm.style.display = "block";
        
        spanDisplay.textContent = selectedButton.textContent;
    } else {
        window.alert("Please select a rating");
    }
});



