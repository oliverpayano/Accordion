const buttons = document.querySelectorAll(".accordion-item button");
const answers = document.querySelectorAll(".answer");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const answer = button.nextElementSibling;
        const isOpen = answer.style.display === "block";

        answers.forEach(function(item) {
            item.style.display = "none";
        });
        if (!isOpen) {
            answer.style.display = "block";
        }
    });
});




