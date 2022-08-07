AFRAME.registerComponent('raycaster-listen', {
  
	init: function () {
    // Use events to figure out what raycaster is listening so we don't have to
    // hardcode the raycaster.
    this.el.addEventListener('raycaster-intersected', evt => {
      this.raycaster = evt.detail.el;
    });
    this.el.addEventListener('raycaster-intersected-cleared', evt => {
      this.raycaster = null;
    });
  },

  tick: function () {
 

    if (!this.raycaster) { return; }  // Not intersecting.

    let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
    if (!intersection) { return; }
    console.log(intersection.point);
    if( this.el.getAttribute('geometry').height == 3) {
      this.el.setAttribute('geometry', {
        primitive: 'box',
        height: 1,
        width: 1
      });
    } else {
      this.el.setAttribute('geometry', {
        primitive: 'box',
        height: 3,
        width: 1
      });
    }
  }
});
