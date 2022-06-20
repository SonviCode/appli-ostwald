const emailInput = document.querySelector('.email-form');


emailInput.addEventListener('submit', (e) =>{
    e.preventDefault();

    console.log("good");
    window.location.href='./merci.html';
})