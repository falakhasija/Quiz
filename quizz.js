const quiz = [
    {
        ques: "Q1. DOM stands for: ",
        a:"Document Object Model",
        b:"Data Object Model",
        c:"Data Object Module",
        d:"None",
        ans:"ans1"
    },
    {
        ques:"Q2. Fastest memory in a system: ",
        a:"Cache",
        b:"Register",
        c:"Hard disk",
        d:"None",
        ans:"ans2"
    },
    {
        ques:"Q3. Which operator is required to be overloaded as member function only?",
        a:"_",
        b:"_ _",
        c:"=",
        d:"None",
        ans:"ans3"
    },
    {
        ques:"Q4. JavaScript code is kept under which HTML tag?",
        a:"<body>",
        b:"<head>",
        c:"<p>",
        d:"<script>",
        ans:"ans4"
    },
    {
        ques:"Q5. How to insert a comment in JavaScript?",
        a:"//",
        b:"\\",
        c:"**",
        d:"!!",
        ans:"ans1"
    }
];

const ques=document.querySelector('.ques');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');
let count=0;
let score=0;
const load = ()=>{
    const list=quiz[count];
    ques.innerText=list.ques;
    option1.innerText=list.a;
    option2.innerText=list.b;
    option3.innerText=list.c;
    option4.innerText=list.d;
}
load();
const getcheck = () =>{
    let answer;
    answers.forEach((curAns) => {
        if(curAns.checked){
            answer=curAns.id;
        }
      //  return answer;
        
    })
    return answer;
};
const deselect =() =>{
    answers.forEach((curAns) =>curAns.checked=false);
}
submit.addEventListener('click',()=>
{
    const check=getcheck();
    console.log(check);
    if(check=== quiz[count].ans)
    {
        score++;
    };
    count++;
    deselect();
    if(count<quiz.length)
    {
        load();
    }
    else
    {
        showscore.innerHTML= `
        <h3>You Scored ${score}/${quiz.length}</h3>
        <button class = "btn" onclick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove('scorearea');
    }
});