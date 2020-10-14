//container
//cool title
//cool background
//question(s)
//options answer(s)/buttons

//1. when the page load the message and button of start is shown 

//user will click in the botton which will take them to the first question 
//2 the first question is shown with 4 options 1 is correct 4 are incorrect
//3. Second question with picture with different options is load 
//4. score is load .. maybe 1/5 or maybe % 
// 5 a botton to try again is loaded
// let questions = document.createElement('div');
// questions.className= "questions";
// questions.innerText= "First Question";
// document.body.appendChild(questions);
// console.log(questions);

let button= document.querySelector(".start");
button.addEventListener('click', function(e){
    let questions= document.querySelector(".questions")
    if(questions.style.display == 'block'){
        e.style.display== 'none'
  return questions;
    }
    })

