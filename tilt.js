function tilt(id) {
    if (id) {
        if (window === this) {
             return new tilt(id);
        }
        
        this.el = document.getElementById(id);
        
        this.onmouseleave = (function() {
            this.transition('all .2s ease-out');
      
            this.transform('rotate3d(' + 0 + ', ' + 0 + ', 0, ' + 0 + 'deg)');
        }).bind(this);
        
        this.onmousemove = (function(e) {   
            this.transition('');
        
            cx = Math.ceil(this.el.offsetWidth / 2.0);
            cy = Math.ceil(this.el.offsetHeight / 2.0);
            dx = e.offsetX - cx;
            dy = e.offsetY - cy;
        
            tiltx = - (dy / cy);
            tilty = (dx / cx);
            radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
            degree = (radius * 20);
        
            this.transform('rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
        }).bind(this);
        
        this.transform = function(value) {
            this.el.style.webkitTransform = value;
            this.el.style.MozTransform = value;
            this.el.style.OTransform = value;
            this.el.style.msTransform = value;
        };
    
        this.transition = function(value) {
            this.el.style.webkitTransition = value;
            this.el.style.MozTransition = value;
            this.el.style.OTransition = value;
            this.el.style.msTransition = value;
};
        
        this.addTiltListener();
        
        return this;
    }
}

tilt.prototype.addTiltListener = function() {
    this.el.onmousemove = this.onmousemove;
    this.el.onmouseleave = this.onmouseleave;
};

tilt.prototype.removeTiltListener = function() {
    this.el.onmousemove = null;
    this.el.onmouseleave = null;
};
