window.onload = function() {
  
    var boundary = document.querySelector('#boundary1');
    boundary.onmouseover = function() {
      
    colorWall(boundary);
      
    }
    

  function colorWall(element) {
    
    element.className = "boundary youlose";
    
  }
  
}