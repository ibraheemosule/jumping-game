let character = document.getElementById("character");

const jump = () => {
  let block = document.getElementById("block");
  let count = document.getElementsByClassName("count")[0];
  count.innerHTML = parseInt(count.innerHTML) + 1;
  if(count.innerHTML > 10){
block.style.animationDuration = "1.45s";
  } else if(count.innerHTML > 20){
    block.style.animationDuration = "1.40s";
      } else if(count.innerHTML > 30){
        block.style.animationDuration = "1.35s";
          } else if(count.innerHTML > 40){
            block.style.animationDuration = "1.30s";
              } else if(count.innerHTML > 50) {
                block.style.animationDuration = "1.25s";
                  } else if(count.innerHTML > 60) {
                    block.style.animationDuration = "1.20s";
                      } else if(count.innerHTML > 70) {
                        block.style.animationDuration = "1.15s";
                          }else if(count.innerHTML > 80) {
                            block.style.animationDuration = "1.1s";
                              } else if(count.innerHTML > 90) {
                                block.style.animationDuration = "1.05s";
                                  }  else if(count.innerHTML > 100) {
                                    block.style.animationDuration = "1.0s";
                                      }  else if(count.innerHTML > 110) {
                                        block.style.animationDuration = "0.7s";
                                          }
if(character.classList == "animate") {return;};
 character.classList.add("animate");
 setTimeout(removeJump, 500);
};

character.addEventListener("click", jump);

const removeJump = () => {
 character.classList.remove("animate");
}

const gameOver = () => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 30 && blockLeft > -30 && characterTop >=50){
      let block = document.getElementsByTagName("div")[3];
        block.setAttribute("id", "blockTwo");
        document.getElementById("game").innerHTML = "GAME OVER!! Your Score is "+
        document.getElementsByClassName("count")[0].innerHTML;
        clearInterval(interval);
    }
};
let interval = setInterval(gameOver, 10);
