
alert('Start of the .JS file');

function flipHSpara()
{
  var button = document.getElementById('hsbutton');
  var parastyle = document.getElementById('hspara').style;
  if (parastyle.display==='none')
  {
    parastyle.display ='block';
    button.value = 'Hide';
  }
  else {
    parastyle.display ='none';
    button.value = 'Show';
  }
}


window.onload = function(event)
{
  alert('Start set-up');
  var button = document.getElementById('hsbutton');
  button.onclick = function(event) { flipHSpara(); }
  alert('Ended set-up');
}

alert('End of the .JS file');
