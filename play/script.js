character = document.getElementById("character");
alien = document.getElementById("alien");
bullet = document.getElementById("bullet");
moveoffset = window.innerWidth/192;
health = 20;
score = 0;
window.addEventListener("keydown", move, false)
function shoot() {
  if (document.getElementById("bullet").style.display == "none") {
    return;
  } else {
    document.getElementById("lasershoot").play();
    bullet.style.left = character.style.left;
    bullet.classList.add("bullet");
  }
}

function move(event) {
  if (event.keyCode == "39" && character.offsetLeft + moveoffset <= window.innerWidth - character.offsetWidth) {
    character.style.left = character.offsetLeft + moveoffset + 'px';
  } else if (event.keyCode == "37" && character.offsetLeft - moveoffset >= 0) {
    character.style.left = character.offsetLeft - moveoffset + 'px';
  } else if (event.keyCode == "13" && document.getElementById("restart").style.display == "block") {
    document.getElementById("dead").style.display = "none";
    alien.classList.add("enemy");
    alien.classList.remove("alreadydead");
    alien.style.display = "block";
    character.style.display = "block";
    bullet.style.display = "block";
    document.getElementById("health").innerHTML = 20;
    document.getElementById("score").innerHTML = 0;
    document.getElementById("restart").style.display = "none";
  }
}

setInterval(function() {
  if (alien.classList.contains("alreadydead")) {
    return;
  } else {
    var maxpos = window.innerWidth - character.offsetWidth;
    var randpos = Math.floor(Math.random() * maxpos);
    alien.style.left = randpos + 'px';
    alien.style.display = "block";
    alien.classList.add("enemy");
  }
}, 3000)

setInterval(function() {
  if (bullet.offsetTop < 0) {
    bullet.classList.remove("bullet");
    bullet.style.top = "100vh";
  }
  if (bullet.offsetTop < (alien.offsetTop + alien.offsetHeight) && bullet.offsetLeft < alien.offsetLeft + alien.offsetWidth/2 && bullet.offsetLeft > alien.offsetLeft - alien.offsetWidth/2) {
    alien.style.top = "-25vh";
    alien.classList.remove("enemy");
    bullet.classList.remove("bullet");
    bullet.style.top = "100vh";
    score += 1;
    document.getElementById("score").innerHTML = score;
  }
  if (alien.offsetTop > (character.offsetTop - character.offsetHeight) && alien.offsetLeft < character.offsetLeft + character.offsetWidth && alien.offsetLeft > character.offsetLeft - character.offsetWidth || health == 0) {
    document.getElementById("dead").style.display = "block";
    alien.style.top = "-25vh";
    alien.classList.remove("enemy");
    alien.classList.add("alreadydead");
    alien.style.display = "none";
    character.style.display = "none";
    bullet.style.display = "none";
    document.getElementById("health").innerHTML = 0;
    document.getElementById("restart").style.display = "block";
    health = 20;
    score = 0;
  }
  if (alien.offsetTop == window.innerHeight - alien.offsetHeight) {
    alien.style.display = "none";
    health -= 1;
    document.getElementById("health").innerHTML = health;
  }
}, 10)
