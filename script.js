function obtenerDatos(){
    var x1 = document.getElementById("x1").value;
}

const colors = ['yellow', 'green', 'blue', '#f15025', 'rgba(125,125,125,0.5)'];

const btn = document.getElementById('btn');


btn.addEventListener('click', function () {

  var x1 = document.getElementById("x2").value;

  if(x1==4){
    buttonColor = x1 - 1;
  } else {
    buttonColor = x1 + 1;
  }
    
  const body = document.body;
  body.style.backgroundColor = colors[x1];
  btn.style.backgroundColor = colors[buttonColor];
})