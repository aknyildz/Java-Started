var changeButton = document.getElementById("degistir");

changeButton.addEventListener("click", function () {
  var randomRenk = "#" + Math.floor(Math.random() * 10000000).toString(16);

  document.body.style.backgroundColor = randomRenk;
});
