

var ajaxObj = new XMLHttpRequest();

ajaxObj.open("GET", 'datafile.txt', true);

ajaxObj.onreadystatechange = function()    // XHR1
      { if (ajaxObj.status == 200)
        if (ajaxObj.readyState == 4)
        { document.getElementById('grabdiv').innerHTML
                      = ajaxObj.responseText;
                  console.log('Grabbed by ds3a!'); }
      };

ajaxObj.send(null); 