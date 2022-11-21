function createGame(player1, player2, hour){
    
   return  `<li>
            <img src="assets/icon-${player1}.svg" alt="">
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="">
        </li>
`}


let delay = -0.5
function createCard(date, day, games){
    delay = delay + .5
    return `<div class="card"  style='animation-delay:${delay}s'>
    <h2>${date} <span>${day}</span></h2>
    <ul>
        
       ${games} 
        
    </ul>
</div>`
}

document.querySelector("#cards").innerHTML = 
    createCard('24/12','quarta', createGame('serbia','brazil','17:00') + 
    
    createGame('switzerland','portugal','20:00'))  +
    
    createCard('26/11','segunda', createGame('brazil','cameroon','14:00'))+
    
    createCard('20/11','sábado', createGame('uruguai','brazil','18:00'))+
   
    createCard('14/11','domingo', createGame('brazil','switzerland','07:00'))

