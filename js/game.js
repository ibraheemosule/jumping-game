let playGame = document.getElementById("playGame");
let button = document.getElementsByTagName("button")[0];
let game = document.getElementById("game");

const begin = () => {
  playGame.style.display = "none";
  game.style.display = "block";
};

button.addEventListener("click", begin);

let character = document.getElementById("character");

const jump = () => {
  let block = document.getElementById("block");
  let count = document.getElementsByClassName("count")[0];
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  count.innerHTML = parseInt(count.innerHTML) + 1;
  if(count.innerHTML <= 20 ){
block.style.animationDuration = "1.4"+(((10-(count.innerHTML / 2))*10).toLocaleString(undefined, {minimumIntegerDigits: 2}))+"s";
  } else if(count.innerHTML <= 40 ){
    block.style.animationDuration = "1.3"+(((20-(count.innerHTML / 2))*10).toLocaleString(undefined, {minimumIntegerDigits: 2}))+"s";
    } else if(count.innerHTML <= 60 ){
    block.style.animationDuration = "1.2"+(((30-(count.innerHTML / 2))*10).toLocaleString(undefined, {minimumIntegerDigits: 2}))+"s";
    } else if(count.innerHTML <= 80 ){
    block.style.animationDuration = "1.1"+(((40-(count.innerHTML / 2))*10).toLocaleString(undefined, {minimumIntegerDigits: 2}))+"s";
    } else if(count.innerHTML <= 100 ) {
    block.style.animationDuration = "1.0"+(((50-(count.innerHTML / 2))*10).toLocaleString(undefined, {minimumIntegerDigits: 2}))+"s";
  } else if(count.innerHTML <= 120 ) {
    block.style.animationDuration = "0."+(((60-(count.innerHTML / 2))*10).toLocaleString(undefined, {minimumIntegerDigits: 2}))+"s";
      };

if(character.classList == "animate") {return;};
 character.classList.add("animate");
 setTimeout(removeJump, 600);
};

character.addEventListener("click", jump);

const removeJump = () => {
 character.classList.remove("animate");
}

let score = document.getElementsByClassName('count')[0];
//  localStorage.clear()
const gameOver = () => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    let highScore = parseInt(score.innerHTML);

    if(blockLeft < 30 && blockLeft > -30 && characterTop >=50){

    setTimeout(() => {
          let previousScore =  localStorage.getItem('yes');
        
        if(highScore > previousScore || previousScore == null){
         localStorage.setItem("u",score.innerHTML)
       newHighScore = highScore;
       console.log(newHighScore);
         localStorage.setItem('yes',newHighScore);
        } else {
            newHighScore = previousScore;
        }
      
      let block = document.getElementsByTagName("div")[3];
        block.setAttribute("id", "blockTwo");
      document.getElementById("game").style.borderRadius = "20px";
      document.getElementById("game").style.boxShadow = "5px 5px 5px black";
        document.getElementById("game").innerHTML = "GAME OVER!! Your Score is "+
        document.getElementsByClassName("count")[0].innerHTML + "<br><br>HIGH SCORE:"+" "+newHighScore+"<br><br><br> <button onclick = 'document.location.reload()'>PLAY AGAIN</button>";

    }, 100);  
    clearInterval(interval);
    }
};
let interval = setInterval(gameOver, 10);



