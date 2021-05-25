function showhow() {
  if (document.getElementById("howtotext").style.display == "block") {
    document.getElementById("howtotext").style.display = "none";
    document.getElementById("howto").innerHTML = "How To Play"
  } else {
    document.getElementById("howtotext").style.display = "block";
    document.getElementById("howto").innerHTML = "Hide Menu";
  }
}
