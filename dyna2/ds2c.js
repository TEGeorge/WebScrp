window.addEventListener(
  'load',
  function(event){
    var firstform = document.getElementById('myfirstform');
      firstform.addEventListener(
        'submit', function(event){ alert('submit'); event.preventDefault();} )
      });
