//again button part
let button= document.querySelector(".button");
let CmpScore=document.querySelector("#scoreCmp");
let yourScore=document.querySelector("#scoreYou");
let massage = document.querySelector(".massage");
let score=0;
let computerScore=0;
button.addEventListener("click",()=>{
    document.querySelector("#scoreCmp").textContent=0;
    document.querySelector("#scoreYou").textContent=0;
    massage.textContent="lets Select Three of one";
    score = 0; computerScore = 0;
})

// selection part
// computer choice part
let cmp = ['rock','paper','scissor'];
 let cmpchoice;
 let choice;
 
let selections=document.querySelectorAll(".choice");


   selections.forEach(item => {
    item.addEventListener('click',()=>{
    choice= item.getAttribute("id");

    console.log(choice);
    let x= Math.floor(Math.random()*3);
    cmpchoice =cmp[x];
    console.log( cmpchoice , choice );
    if(choice===cmpchoice){
        massage.textContent=`Match Draw`;
    }
    else if(choice==='rock'){
        if(choice==='rock'&& cmpchoice==='paper'){
            massage.textContent=`Computer win!! ${cmpchoice} bits Your ${choice}`;
            computerScore++;
            document.querySelector("#scoreCmp").textContent=computerScore;
        }
        else{
            massage.textContent=` You  win!! ${choice} bits Computer's ${cmpchoice}`;
            score++;
            document.querySelector("#scoreYou").textContent=score;

        }
    }
    else if(choice==='paper'){
        if(choice==='paper' && cmpchoice==='rock'){
            massage.textContent=` You  win!! ${choice} bits Computer's ${cmpchoice}`;
            score++;
            document.querySelector("#scoreYou").textContent=score;
        }
        else{
            massage.textContent=`Computer win!! ${cmpchoice} bits Your ${choice}`;
            computerScore++;
            document.querySelector("#scoreCmp").textContent=computerScore;
        }
    }
    else{
        if(choice==='scissor'&& cmpchoice==='rock'){
            massage.textContent=` You  win!! ${choice} bits Computer's ${cmpchoice}`;
            score++;
            document.querySelector("#scoreYou").textContent=score;
        }
        else{
            massage.textContent=`Computer win!! ${cmpchoice} bits Your ${choice}`;
            computerScore++;
            document.querySelector("#scoreCmp").textContent=computerScore;
        }
    }
   
   })
   
})
