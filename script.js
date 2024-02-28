function Generate() {
  var max = document.getElementById("max").value;
  var min = document.getElementById("min").value;
  var result = document.getElementById("result");
  var number = Math.floor(Math.random() * max);
  console.log(number);
  result.innerHTML = number;
}
