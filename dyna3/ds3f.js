function showFileNames (response) {
  document.getElementById('filenamesdiv').innerHTML = response;
  }

AjaxGet('api/getdir.php', showFileNames); //  Function names are refrences to functions and therefore can be passed
