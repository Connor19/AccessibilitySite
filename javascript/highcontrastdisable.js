function highcontrastdisable(){    //Disable High Contrast Mode Fucntion//
  var e = document.getElementById('blackbackground'); //Finds the ID of the background and text in the interactive example div//
  var f = document.getElementById('whitetext');

  e.id = "precontrast";   //Changes the ID of both to original values//
  f.id = "contrasttext";
}
