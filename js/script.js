// Este es mi js
var myNodelist = document.getElementsByTagName('li');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('span');
  var textoInput = document.createTextNode(" ");
  span.className = "remove";
  span.appendChild(textoInput);
  myNodelist[i].appendChild(span);
}
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("remove");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function(){
//  var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Para ver si está hecha la tarea
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Agregar tarea

function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById("myInput").value;	
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  // if (inputValue === '') {
  //   alert("Debes escribir tus pendientes aquí");
  // } else {
  //   document.getElementById("myUL").appendChild(li);
  // }
  document.getElementById("myInput").value = "";

  var span = document.createElement('span');
  var txt = document.createTextNode("x");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};