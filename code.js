document.onkeydown = function(e){
    var e = e || window.event; 
    if(e.ctrlKey && e.keyCode == 81) {
      var name = prompt('Name :');
      if (name != "" || !isNaN(name))
        document.title = name;
      return false;
    }
  }