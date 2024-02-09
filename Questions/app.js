const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
        // console.log(e.currentTarget.parentElement.parentElement);
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
});