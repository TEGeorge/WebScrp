function grabber(response)
{
  document.getElementById('grabdiv').innerHTML = response;
  console.log('Grabbed by ds3e');
}

AjaxGet('datafile.txt', grabber); //Function names are refrences to functions and therefore can be passed

AjaxGet('ds3e.php', grabber);
