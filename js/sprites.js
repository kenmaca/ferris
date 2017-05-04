
/* SVG Sprites Loader via js instead of inline for caching.
   @author Kenneth Ma, 2017
*/
$(() => {

  // transition clouds
  fetch('assets/img/main/transition/first.svg')
    .then(response => response.text())
    .then(svg => {
      $('.transition .first').html(svg);
    });

  fetch('assets/img/main/transition/second.svg')
    .then(response => response.text())
    .then(svg => {
      $('.transition .second').html(svg);
    });

  fetch('assets/img/main/transition/third.svg')
    .then(response => response.text())
    .then(svg => {
      $('.transition .third').html(svg);
    });

  fetch('assets/img/main/transition/fourth.svg')
    .then(response => response.text())
    .then(svg => {
      $('.transition .fourth').html(svg);
    });

  // clouds
  fetch('assets/img/main/clouds/a.svg')
    .then(response => response.text())
    .then(svg => {
      $('.cloud-1').html(svg);
    });

  fetch('assets/img/main/clouds/b.svg')
    .then(response => response.text())
    .then(svg => {
      $('.cloud-2').html(svg);
    });

  fetch('assets/img/main/clouds/c.svg')
    .then(response => response.text())
    .then(svg => {
      $('.cloud-3').html(svg);
    });

  fetch('assets/img/main/clouds/d.svg')
    .then(response => response.text())
    .then(svg => {
      $('.cloud-4').html(svg);
    });

  fetch('assets/img/main/clouds/e.svg')
    .then(response => response.text())
    .then(svg => {
      $('.cloud-5').html(svg);
    });

  // scene 1: banner
  fetch('assets/img/main/banner.svg')
    .then(response => response.text())
    .then(svg => {
      $('#banner').html(svg);
    });

  // scene 1: ferris
  fetch('assets/img/main/ferris/stand.svg')
    .then(response => response.text())
    .then(svg => {
      $('#ferris .stand').html(svg);
    });

  fetch('assets/img/main/ferris/wheel.svg')
    .then(response => response.text())
    .then(svg => {
      $('#ferris .wheel').html(svg);
    });

  fetch('assets/img/main/ferris/pod.svg')
    .then(response => response.text())
    .then(svg => {
      $('#ferris .pod').html(svg);
    });

  /* scene 2: carousel */
  fetch('assets/img/main/merry-go-round.svg')
    .then(response => response.text())
    .then(svg => {
      $('#merry-go-round').html(svg);
    });

  fetch('assets/img/main/carousel/top.svg')
    .then(response => response.text())
    .then(svg => {
      $('#carousel .top').html(svg);
    });

  fetch('assets/img/main/carousel/base.svg')
    .then(response => response.text())
    .then(svg => {
      $('#carousel .base').html(svg);
    });

  fetch('assets/img/main/carousel/horse-1.svg')
    .then(response => response.text())
    .then(svg => {
      $('#carousel .first').html(svg);
    });

  fetch('assets/img/main/carousel/horse-2.svg')
    .then(response => response.text())
    .then(svg => {
      $('#carousel .second').html(svg);
    });

  /* scene 2: letter */
  fetch('assets/img/main/letter.svg')
    .then(response => response.text())
    .then(svg => {
      $('#letter').html(svg);
    });
});
