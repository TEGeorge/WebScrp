function AjaxGet(URL, callback)
{
    var ajaxObj = new XMLHttpRequest();

    ajaxObj.open("GET", 'datafile.txt', true);

    ajaxObj.onreadystatechange = function()    // XHR1
      { if (ajaxObj.status == 200)
            if (ajaxObj.readyState == 4)
                callback(ajaxObj.responseText);
      };

    ajaxObj.send(null); 
}

function grabber(response)
{
    document.getElementById('grabdiv').innerHTML = response;
    console.log('Grabbed by ds3c');
}

AjaxGet('datafile.txt', grabber); //Function names are refrences to functions and therefore can be passed