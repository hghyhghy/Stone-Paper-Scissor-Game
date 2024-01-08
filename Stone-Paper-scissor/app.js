

let userscore=0
let compscore=0

const choices =  document .querySelectorAll ( ".choice" )
const msg = document . querySelector ( "#msg" )
const us = document .querySelector ( "#us" )
const cs = document .querySelector ( "#cs" )


const gamechoices = () => {
    const options =[ "rock", "paper" ,"scissors"]
    const randomIdx = Math . floor(Math.random() *3 )
    return options [randomIdx]
}

const drawgame = () => {
    msg.innerText = `Match Drawn yourchoice = ${userchoice},  compchoice = ${compchoice}` 
    msg.style.backgroundColor = "#081b31"


}

const showwinner = ( userwin , userchoice , compchoice ) =>
{
    if (userwin) {
        userscore ++;
        us.innerText=userscore
        msg.innerText = `Congrats! You Won yourchoice = ${userchoice},  compchoice = ${compchoice}` 
        msg.style.backgroundColor = "green"
    } else
    {   compscore++
        cs.innerText=compscore
        msg.innerText = `Oh ! You loose yourchoice = ${userchoice}, compchoice = ${compchoice}` 
        msg.style.backgroundColor = "red"


    }
}
const playgame = (userchoice) => {
   
    const compchoice = gamechoices()

    if ( userchoice === compchoice) {
        drawgame()
    } else {

        let userwin  = true

        if ( userchoice === "rock") {

            userwin = compchoice === "paper" ? false : true;

        } else if ( userchoice === "paper") 
        {
                userwin = compchoice === "scissors" ? false : true ;

        }  else {

            userwin = compchoice === "rock" ? false : true ;
        }

        showwinner(userwin , userchoice , compchoice)

    }

};
// accessing the individual div
choices.forEach((choice) => {   

    choice.addEventListener( "click" , ()=> {
        
        const userchoice= choice .getAttribute ("id")
        playgame(userchoice)
    }) 
});