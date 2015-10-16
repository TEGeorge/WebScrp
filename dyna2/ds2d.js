function getFormRadioValue(formelem,radioname){
  var buttons = formelem[radioname];
    for (var i=0, n=buttons.length; i<n; i++)
      if (buttons[i].checked)
        return buttons[i].value;
    return undefined;
}

function movestuff(){
  var theform = document,getElementById('myfirstform');
}

window.addEventListener(
  'load',
  function(event){
    var firstform = document.getElementById('myfirstform');
      firstform.addEventListener(
        'submit', function(event){ alert('submit'); event.preventDefault(); }
        )
    }
);
