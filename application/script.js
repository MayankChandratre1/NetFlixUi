let slider = document.querySelector(".top10-slider");
let sliderButtonLeft = slider.querySelectorAll("button")[0];
let sliderButtonRight = slider.querySelectorAll("button")[1];
let sliderList = slider.querySelector("ul");



function scrollList(dir){
    let card = sliderList.querySelectorAll(".card")[dir];
      card.setAttribute('tabIndex',-1);
      card.focus();
      card.removeAttribute('tabIndex');

}

function getStarted(){
    alert("Welcome to netflix")
}


//faq

let answers = document.querySelectorAll(".ans");
answers.forEach(ans =>{
    $(ans).slideUp(200)
})

let questions = document.querySelectorAll(".faq-card");
questions.forEach(que => {
    que.addEventListener("click", (e)=>{
        handleClick(e);
    });
});

function handleClick(e){
    $(e.target.parentElement.querySelector(".ans")).slideToggle(200);
}

