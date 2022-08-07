AFRAME.registerComponent('testing', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      this.setAttribute('material', 'color', 'green');
    });
  }
});