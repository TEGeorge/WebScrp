window.onload = function(event)
{
  alert('Start set-up');
  var h=document.getElementById('heading');
  alert('The <h1> is '+h);
  if (!h.style) h.style={};
  h.style.backgroundColor = 'red';
  alert('Ended set-up');
}
