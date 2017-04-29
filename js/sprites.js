
/* SVG Sprites Loader via js instead of inline for caching.
   @author Kenneth Ma, 2017
*/
$(() => {

  // clouds
  fetch('assets/img/main/clouds/a.svg')
    .then(response => response.text())
    .then(svg => {
      $('#cloud-1').html(svg);
    });

  fetch('assets/img/main/clouds/b.svg')
    .then(response => response.text())
    .then(svg => {
      $('#cloud-2').html(svg);
    });

  fetch('assets/img/main/clouds/c.svg')
    .then(response => response.text())
    .then(svg => {
      $('#cloud-3').html(svg);
    });

  fetch('assets/img/main/clouds/d.svg')
    .then(response => response.text())
    .then(svg => {
      $('#cloud-4').html(svg);
    });

  fetch('assets/img/main/clouds/e.svg')
    .then(response => response.text())
    .then(svg => {
      $('#cloud-5').html(svg);
    });
});
