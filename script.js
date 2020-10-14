

let button= document.querySelector(".start");
button.addEventListener('click', function(e){
    button.style.display = "none";
    let trivia = document.querySelector("h2");
    console.log(trivia)
    trivia.style.display = "none";
    let q1= document.querySelector(".q1")
    q1.style.display= "block";
})

let q1right = document.querySelector('.right')
q1right.addEventListener('click', function(e){
     q1right.style.display= 'none'
    let answer1= document.querySelector('.q1')
    answer1.style.display = 'none'
    let q2= document.querySelector('.q2')
    q2.style.display = "block";
})
   






