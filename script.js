
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

function GetHumanChoice()
{
    let a = prompt("Rock,Paper or Scissor")
    if(typeof a==="string")
    {
        a=a.toLowerCase();
        a=a.trim();
        return(a);
    }
    else
    {
        console.log("invalid input type");
    }
};

let HumanScore=0;
let ComputerScore=0;

function Rock_Paper_Scissor()
{
    let HumanChoice=GetHumanChoice();
    let ComputerChoice=GetComputerChoice();

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
}

function PlayGame()
{
    Rock_Paper_Scissor();
    Rock_Paper_Scissor();
    Rock_Paper_Scissor();
    Rock_Paper_Scissor();
    Rock_Paper_Scissor();
}

PlayGame();

