function myFunction() {
  document.getElementById("demo").innerHTML = getRandomInt(11);
  var el = document.getElementById('button');
  el.remove();

  if((document.getElementById("demo").innerHTML) == "10") {
    document.getElementById("wygrana").innerHTML = "Brawo, wygrałeś w konkursie!"
  }
  else{
    document.getElementById("wygrana").innerHTML = "Niestety nie udało ci się wygrać."
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
