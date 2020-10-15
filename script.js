

let button= document.querySelector(".start");
button.addEventListener('click', function(e){
    button.style.display = "none";
    let trivia = document.querySelector("h2");
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

let q2right = document.querySelector('.right2')
q2right.addEventListener('click', function(e){
     q2right.style.display= 'none'
    let answer2= document.querySelector('.q2')
    answer2.style.display = 'none'
    let q3= document.querySelector('.q3')
    q3.style.display = "block";
})

let q3right = document.querySelector('.right3')
q3right.addEventListener('click', function(e){
     q3right.style.display= 'none'
    let answer3= document.querySelector('.q3')
    answer3.style.display = 'none'
    let q4= document.querySelector('.q4')
    q4.style.display = "block";
})
let q4right = document.querySelector('.right4')
q4right.addEventListener('click', function(e){
     q4right.style.display= 'none'
    let answer4= document.querySelector('.q4')
    answer4.style.display = 'none'
    let q5= document.querySelector('.q5')
    q5.style.display = "block";
})
let q5right = document.querySelector('.right5')
q5right.addEventListener('click', function(e){
     q5right.style.display= 'none'
    let answer5= document.querySelector('.q5')
    answer5.style.display = 'none'
    let q6= document.querySelector('.q6')
    q6.style.display = "block";
})

let q6right = document.querySelector('.right6')
q6right.addEventListener('click', function(e){
     q6right.style.display= 'none'
    let answer6= document.querySelector('.q6')
    answer6.style.display = 'none'
    let q7= document.querySelector('.q7')
    q7.style.display = "block";
})
let q7right = document.querySelector('.right7')
q7right.addEventListener('click', function(e){
     q7right.style.display= 'none'
    let answer7= document.querySelector('.q7')
    answer7.style.display = 'none'
    let q8= document.querySelector('.q8')
    q8.style.display = "block";
})
let q8right = document.querySelector('.right8')
q8right.addEventListener('click', function(e){
     q8right.style.display= 'none'
    let answer8= document.querySelector('.q8')
    answer8.style.display = 'none'
    let q9= document.querySelector('.q9')
    q9.style.display = "block";
})
let q9right = document.querySelector('.right9')
q9right.addEventListener('click', function(e){
     q9right.style.display= 'none'
    let answer9= document.querySelector('.q9')
    answer9.style.display = 'none'
    let q10= document.querySelector('.q10')
    q10.style.display = "block";
})
let q10right = document.querySelector('.right10')
q10right.addEventListener('click', function(e){
     q10right.style.display= 'none'
    let answer10= document.querySelector('.q10')
    answer10.style.display = 'none'
    let final= document.querySelector('.final')
    final.style.display = "block"
})

let wrong = document.getElementsByClassName("wrong");
for (var i = 0 ; i < wrong.length; i++) {
    wrong[i].addEventListener('click' ,function (e){
    e.target.style.backgroundColor= '#FF007C';
    } ) ; 
 }







