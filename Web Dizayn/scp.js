const finn = document.getElementById("finn");
const cr = document.getElementById("cr");
const psd = document.getElementById("psd");
const meet = document.getElementById("meet");
const bgimg = document.getElementById("bgimg");
const score = document.getElementById("score");
const over = document.getElementById("over");
const retry = document.getElementById("retry");







const jp = document.createElement("audio");
jp.src = 'sound/jump.wav';
const coll = document.createElement("audio");
coll.src = 'sound/collide.wav';
const run = document.createElement("audio");
run.src = 'sound/walk.wav';







function jump() {
  if (finn.classList != "jump") {

    finn.classList.add("jump");
    jp.play();


    setTimeout(function () {
      finn.classList.remove("jump");
    }, 1000);
  }
}

let isAlive = setInterval(function start() {

  run.play();
  score.innerText++;


  let sc = score.innerText;

  // get current finn Y position
  let finnTop = parseInt(window.getComputedStyle(finn).getPropertyValue("top"));

  // get current cr X position
  let crLeft = parseInt(
    window.getComputedStyle(cr).getPropertyValue("left"));

  // get current psdX position
  let psdLeft = parseInt(
    window.getComputedStyle(psd).getPropertyValue("left"));

  // get current meetX position
  let meetLeft = parseInt(
    window.getComputedStyle(meet).getPropertyValue("left"));

  // detect collision
  if ((crLeft < 290 && crLeft > 150 && finnTop >= 253) || (psdLeft < 290 && psdLeft > 150 && finnTop >= 253) || (meetLeft < 290 && meetLeft > 150 && finnTop >= 253)) {
    //collision

    
    finn.classList.add("paused");
    cr.classList.add("paused");
    psd.classList.add("paused");
    meet.classList.add("paused");
    bgimg.classList.add("paused");
    

    run.pause();
    coll.play();
    over.classList.add("over");
    retry.classList.add("retry");
    
    function stop() {
      clearInterval(isAlive);
    }
    
    stop();
    


    // alert("Game Over!");
  }
}, 10);


document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    jump();
  }
})