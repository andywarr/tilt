var tilt = function(id) {
    if (id) {
        var el = document.getElementById(id);
        
        var onmouseleave = function() {
           transition('all .2s ease-out');
      
           transform('rotate3d(' + 0 + ', ' + 0 + ', 0, ' + 0 + 'deg)');
        };
        
        var onmousemove = function(e) {   
           transition('');
        
            cx = Math.ceil(el.offsetWidth / 2.0);
            cy = Math.ceil(el.offsetHeight / 2.0);
            dx = e.offsetX - cx;
            dy = e.offsetY - cy;
        
            tiltx = - (dy / cy);
            tilty = (dx / cx);
            radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
            degree = (radius * 20);
        
           transform('rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
        };
        
        var transform = function(value) {
            el.style.webkitTransform = value;
            el.style.MozTransform = value;
            el.style.OTransform = value;
            el.style.msTransform = value;
        };
    
        var transition = function(value) {
            el.style.webkitTransition = value;
            el.style.MozTransition = value;
            el.style.OTransition = value;
            el.style.msTransition = value;
};
        this.addTiltListener = function() {
    el.onmousemove = onmousemove;
    el.onmouseleave = onmouseleave;
};
        
        this.removeTiltListener = function() {
    el.onmousemove = null;
    el.onmouseleave = null;
};
        
        this.addTiltListener();
        
        return this;
    }
};
