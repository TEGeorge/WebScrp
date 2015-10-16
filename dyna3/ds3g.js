function showFileNames (response) {
  console.log('response = ' + response);
  var namearray = response.split(',');
  console.log('namearray.length = ' + namearray.length);
  console.log('namepile## = ' + namepile);
  for (var namepile = '', i = 0; i < namearray.length - 1; i++) {
    console.log('namearray[' + i + '] = ' + namearray[i]);
    var ni = namearray[i];
    if (ni.endWith('.htm') || ni.endWith('.html') || ni.endwith('.php') || ni.endWith('.js') || ni.endWith('.txt')) {
      namepile = namepile + namearray[i] + "<br>";
      console.log('namepile#' + i + ' = ' + namepile);
    }
  }
  document.getElementById('filenamesdiv').innerHTML = namepile;
}

AjaxGet('api/getdir.php', showFileNames); // Function names are refrences to functions and therefore can be passed
