function highcontrast(){  //High Contrast Mode Fucntion//
  var e = document.getElementById('precontrast');  //Finds the ID of the background and text in the interactive example div//
  var f = document.getElementById('contrasttext');

  e.id = "blackbackground";  //Changes the ID of both to elements to invert colours to give off effect of high contrast//
  f.id = "whitetext";
}
