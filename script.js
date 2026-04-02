
function GetRandomArbitary(min,max)
{
    let a=Math.floor(Math.random() * (max - min + 1)) + min;
    return a;
}

function GetComputerChoice() {
    switch(GetRandomArbitary(0,2))
    {
        case 0:
            return ("rock")
            break;
        
            case 1:
                return ("paper")
                break;
            case 2:
                return ("scissor")
                break;
    }
}


let HumanScore=0;
let ComputerScore=0;

const Human_Score = document.getElementById("Human_Score");
const Computer_Score = document.getElementById("Computer_Score");

function Rock_Paper_Scissor(ComputerChoice,HumanChoice)
{

    if(ComputerChoice==HumanChoice)
    {

    }
    else if(HumanChoice=="rock")
    {
        if(ComputerChoice=="paper")
        {
            ComputerScore++;
        }
        else {
            HumanScore++;
        }
    }
    else if (HumanChoice == "paper") {
        if (ComputerChoice == "scissor") {
            ComputerScore++;
        }
        else {
            HumanScore++;
        }
    }
    else if (HumanChoice == "scissor") {
        if (ComputerChoice == "rock") {
            ComputerScore++;
        }
        else {
            HumanScore++;
        }
    }

    Human_Score.textContent="Human-Score:"+String(HumanScore);
    Computer_Score.textContent="Computer-Score:"+String(ComputerScore); 
}

const Rock_Button=document.getElementById("Rock_Button");
const Paper_Button=document.getElementById("Paper_Button");
const Scissor_Button=document.getElementById("Scissor_Button");


Rock_Button.addEventListener("click",() =>{
    Rock_Paper_Scissor(GetComputerChoice(),"rock");
})

Scissor_Button.addEventListener("click",() =>{
    Rock_Paper_Scissor(GetComputerChoice(),"scissor");
})

Paper_Button.addEventListener("click",()=>{
    Rock_Paper_Scissor(GetComputerChoice(),"paper");
})

