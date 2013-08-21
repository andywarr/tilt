function tilt(el) {
  var value = '';

  el.onmousemove = function(e) {   
    value = '';
    transition(el, value);
        
    cx = Math.ceil(el.offsetWidth / 2.0);
    cy = Math.ceil(el.offsetHeight / 2.0);
    dx = e.offsetX - cx;
    dy = e.offsetY - cy;
        
    tiltx = - (dy / cy);
    tilty = (dx / cx);
    radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
    degree = (radius * 20);
        
    value = 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)';
        
    transform(el, value);
  };
    
  el.onmouseleave = function() {
    value = 'all .2s ease-out';
    transition(el, value);
        
    value = 'rotate3d(' + 0 + ', ' + 0 + ', 0, ' + 0 + 'deg)';
    transform(el, value); 
  };
    
  var transform = function(el, value) {
    el.style.webkitTransform = value;
    el.style.MozTransform = value;
    el.style.OTransform = value;
    el.style.msTransform = value;
  };
    
  transition = function(el, value) {
    el.style.webkitTransition = value;
    el.style.MozTransition = value;
    el.style.OTransition = value;
    el.style.msTransition = value;
  };
}
